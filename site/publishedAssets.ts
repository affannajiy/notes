import path from "path"
import fs from "fs"
import { QuartzEmitterPlugin } from "./quartz/plugins/types"
import { FilePath, joinSegments, slugifyFilePath } from "./quartz/util/path"
import { glob } from "./quartz/util/glob"

/**
 * Allowlisted replacement for Quartz's built-in `Assets` emitter.
 *
 * The built-in one copies EVERY non-markdown file under the content root, and
 * the `publish: true` frontmatter gate only applies to markdown. A PDF or slide
 * deck dropped next to a note would therefore go live. This emitter only copies
 * web image formats — anything else never leaves the vault.
 *
 * Lives outside `quartz/` so `npx quartz update` cannot overwrite it.
 */
const ALLOWED = "**/*.{png,jpg,jpeg,gif,svg,webp,avif}"

export const PublishedAssets: QuartzEmitterPlugin = () => ({
  name: "PublishedAssets",
  async *emit({ argv, cfg }) {
    const fps = await glob(ALLOWED, argv.directory, cfg.configuration.ignorePatterns)
    for (const fp of fps) {
      const src = joinSegments(argv.directory, fp) as FilePath
      const dest = joinSegments(argv.output, slugifyFilePath(fp)) as FilePath
      await fs.promises.mkdir(path.dirname(dest), { recursive: true })
      await fs.promises.copyFile(src, dest)
      yield dest
    }
  },
  async *partialEmit() {},
})
