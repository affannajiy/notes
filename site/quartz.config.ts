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
        // Warm cream + orange accent. Light mode uses the two darker oranges so
        // link text (secondary) and hover / active text (tertiary) both clear
        // WCAG AA 4.5:1 on the cream; the bright orange only tints highlights.
        // Dark mode can afford the bright ones.
        lightMode: {
          light: "#faf8f5",
          lightgray: "#e8e2d8",
          gray: "#756a5a",
          darkgray: "#2d2416",
          dark: "#111010",
          secondary: "#96410a",
          tertiary: "#bd4d0e",
          highlight: "rgba(249, 115, 22, 0.15)",
          textHighlight: "#fed7aa88",
        },
        darkMode: {
          light: "#0f0e0d",
          lightgray: "#2a2520",
          gray: "#9c8f80",
          darkgray: "#e8ddd0",
          dark: "#f3ece2",
          secondary: "#fb9a52",
          tertiary: "#f97316",
          highlight: "rgba(249, 115, 22, 0.15)",
          textHighlight: "#c2500f88",
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
      // No Latex plugin: KaTeX would load its CSS and JS from jsdelivr on every
      // page (SECURITY.md invariant 4) and its parser turns "$700 to $166" into
      // maths. mermaid is off for the same reason: it imports from cdnjs.
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false, mermaid: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
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
