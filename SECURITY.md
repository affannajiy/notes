# Security posture

What *this* project does. General principles live in `rulebooks/SECURITY_Rulebook.md`.

## What is protected

| Class | Where | Control |
| --- | --- | --- |
| Source material (slides, PDFs, annual reports) | not in the vault - notes link to it | Safety net: any `**/reference/` folder is git-ignored and in Quartz `ignorePatterns`, so a file dropped there is never committed or built. |
| Draft notes | any `.md` without `publish: true` | Dropped by `ExplicitPublish` filter. Default is unpublished. |
| Non-image files next to notes (PDF, PPTX, ZIP…) | anywhere under the vault | Never emitted: `site/publishedAssets.ts` allowlists image extensions only. |
| Obsidian workspace state | `.obsidian/workspace*` | Git-ignored. |

Anything in `public/` after a build is public. The deploy workflow fails if a non-image,
non-site file or any `reference/` path appears there.

These controls decide what reaches the *site*. The repository itself is public, so anything
committed - draft notes, a PDF dropped into `attachments/`, this file - is readable on GitHub
regardless of `publish:`. If drafts must stay private, make the repository private (GitHub
Pages on a private repo needs GitHub Pro).

## Invariants (a change that breaks one is a security bug)

1. `site/quartz.config.ts` keeps `Plugin.ExplicitPublish()` in `filters`.
2. `site/quartz.config.ts` uses `PublishedAssets()` and not `Plugin.Assets()`.
3. `.gitignore` and `ignorePatterns` both exclude `**/reference/`.
4. The site makes no runtime request to a third party: no analytics, no CDN fonts, no
   Latex plugin (KaTeX loads from jsdelivr), `mermaid: false` (it imports from cdnjs), and
   `site/components/Head.tsx` drops the cdnjs preconnect upstream's Head hard-codes. The
   browser scripts in `site/components/scripts/` only read the site's own
   `static/contentIndex.json`. Check: `grep -rl "jsdelivr\|cdnjs" site/public` after a build
   should match only `index.css` (upstream selector names, no URLs).

## Supply chain

- `site/package-lock.json` is committed; CI installs with `npm ci`.
- `site/.npmrc` sets `ignore-scripts=true` - no package runs code at install time.
- GitHub Actions are pinned by commit SHA. Dependabot watches npm and actions weekly.
- Workflow token permissions are empty by default; `build` gets `contents: read`,
  `deploy` gets `pages: write` + `id-token: write`.

## Not applicable

No authentication, sessions, forms, database, uploads, or server code. GitHub Pages sets
response headers; CSP/HSTS cannot be configured here.

## Reporting

Open an issue on the repository.
