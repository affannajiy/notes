# Notes vault

Obsidian vault published selectively to GitHub Pages with [Quartz v4](https://quartz.jzhao.xyz).

## Layout

| Path | Purpose | Published? |
| --- | --- | --- |
| `Courses/<Course>/notes/` | lecture notes (`templates/lecture-note.md`) | only with `publish: true` |
| `Courses/<Course>/reference/` | slides, handouts, PDFs | **never** — git-ignored too |
| `Articles/` | daily article logs (`templates/daily-article.md`) | only with `publish: true` |
| `Projects/` | project notes | only with `publish: true` |
| `templates/` | Obsidian templates | never |
| `rulebooks/` | engineering / security / UI-UX principles | only with `publish: true` |
| `site/` | Quartz install; content root is this folder (`-d ..`) | — |

## Publishing rule

A note is published **only** if its frontmatter has `publish: true`. Everything else is dropped
by the `ExplicitPublish` filter in `site/quartz.config.ts`. `**/reference/`, `templates/`, and
`.obsidian/` are excluded before the filter runs.

Images (`png jpg jpeg gif svg webp avif`) next to a note are copied to the site; every other
file type is never emitted. Obsidian saves pasted attachments to `./attachments` beside the note.
See [SECURITY.md](SECURITY.md) for the full posture.

## Local preview

```bash
cd site && npm ci && npm run serve
```

Push to `main` → `.github/workflows/deploy.yml` builds, checks the output, deploys to Pages.

## Decisions

| Decision | Why |
| --- | --- |
| Quartz from the v4 tarball, not `git clone` | A nested `.git` becomes a broken submodule in this repo. Update with `npx quartz update` or re-extract. |
| Content root is the vault (`-d ..`) rather than `site/content` | One source of truth: notes are edited in place, no copy step. |
| `ExplicitPublish` + image-only asset emitter | Default is private. Publishing takes a deliberate act per file. |
| System fonts, no analytics, no OG-image emitter | No runtime third-party requests; no build-time network fetch. |
| `ignore-scripts=true`, SHA-pinned actions, Dependabot | Supply-chain floor for a repo that runs on every push. |

## Known compromises

- `publish: true` is checked per file only. A published note that links to an unpublished one
  shows a dead link; Quartz does not warn.
- No CSP/HSTS: GitHub Pages does not allow custom headers.
