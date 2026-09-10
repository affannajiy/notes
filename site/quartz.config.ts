import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { PublishedAssets } from "./publishedAssets"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "affannajiy.github.io/notes",
    // Content root is the vault (`-d ..`). Everything below is excluded from the
    // content scan outright; `.gitignore` at the vault root is honoured too, so
    // `**/reference/` never reaches the build. Anything that survives still has
    // to pass the ExplicitPublish filter (`publish: true`).
    ignorePatterns: [
      "site", // this Quartz install
      "templates",
      "**/reference/**",
      ".obsidian",
      ".github",
      "private",
      "README.md",
    ],
    defaultDateType: "modified",
    theme: {
      // System fonts: no Google Fonts request (no third-party runtime dependency,
      // no visitor IP sent to Google), and a faster first paint.
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        body: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        code: "ui-monospace, 'Cascadia Code', Consolas, 'Liberation Mono', monospace",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    // HARD GATE: only notes with `publish: true` in frontmatter are emitted.
    filters: [Plugin.ExplicitPublish(), Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      PublishedAssets(), // allowlist: images only, see publishedAssets.ts
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
