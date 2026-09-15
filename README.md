# Notes vault

Obsidian vault published selectively to GitHub Pages with [Quartz v4](https://quartz.jzhao.xyz).

The vault runs on a 5-weekday writing routine, one short note per day: Company, Take, Why,
Case, Food. See `Weekly Routine.md` (bookmarked in Obsidian) for the cheat-sheet and the
weekend recall routine. `templates/lecture-note.md` is kept but unused; class notes are on paper.

## Layout

| Path | Purpose | Published? |
| --- | --- | --- |
| `Companies/` | Monday: one company profile (`templates/company.md`) | only with `publish: true` |
| `Takes/` | Tuesday: one claim people disagree on, both sides + my take (`templates/take.md`) | only with `publish: true` |
| `Topics/` | Wednesday: one "why" question, one idea per note (`templates/topic.md`, Feynman-style); the hub nodes of the graph | only with `publish: true` |
| `Cases/` | Thursday: one real event, analysed (`templates/case-study.md`, optional SWOT / 5 Forces / PESTEL) | only with `publish: true` |
| `Food/` | Friday: one food subject and the story behind it (`templates/food.md`) | only with `publish: true` |
| `templates/` | Obsidian templates | never |
| `rulebooks/` | engineering / security / UI-UX principles | only with `publish: true` |
| `site/` | Quartz install; content root is this folder (`-d ..`) | - |
| `site/components/` | my own Quartz components (weekly board, random note, rabbit hole, head) | - |

Every template carries `type:` (`company` `take` `topic` `case` `food`; `media` `article`
`project` `lecture` templates are kept but have no folder yet) and `date:`. Obsidian Bases can
list notes by kind, and the weekly board on the home page picks the newest published note of
each type. Templates start `publish: false`.
Filenames must be unique across the vault: Quartz resolves `[[Name]]` by shortest path, so
two notes named the same collide. Link generously - the graph is built from links, not folders.

Source material (slides, PDFs, annual reports, papers) is **not stored in the vault**. Each
template has a `## Sources` section (or a `url:` field) for name + link instead. As a safety
net, any folder named `reference/` is still git-ignored and excluded from the build.

Editing in VS Code: the root `.prettierignore` skips `*.md` and `.vscode/settings.json` turns
off format-on-save for Markdown. Prettier (a Quartz dev dependency) would rewrite `{{date}}`
in frontmatter to `{ { date } }` and break the Obsidian template placeholders.

## Publishing rule

A note is published **only** if its frontmatter has `publish: true`. Everything else is dropped
by the `ExplicitPublish` filter in `site/quartz.config.ts`. `templates/`, `.obsidian/` and any
`**/reference/` folder are excluded before the filter runs.

Images (`png jpg jpeg gif svg webp avif`) next to a note are copied to the site; every other
file type is never emitted. Obsidian saves pasted attachments to `./attachments` beside the note.
Embed them the way Obsidian does, `![[image.png]]`: the `shortest` link strategy resolves a
unique bare filename anywhere in the vault, but a hand-written path such as
`![](attachments/image.png)` is resolved from the vault root and 404s on the site.
See [SECURITY.md](SECURITY.md) for the full posture.

## The site

Warm cream / orange theme, system fonts, light and dark. The graph is the main feature.

| Feature | Where | Notes |
| --- | --- | --- |
| Graph view | `site/quartz.layout.ts` | Local graph two hops deep; global graph is the whole vault, radial layout, one cluster per folder. |
| Weekly board | `site/components/WeeklyBoard.tsx` | Home only. One row per weekday, newest published note of that `type:`. Folder label links to the folder page once it has a published note. Edit `ROUTINE` there to change the routine. |
| Recently written | `site/quartz.layout.ts` | Home only, latest 5 notes, Quartz's `RecentNotes`. |
| Random note | `site/components/RandomNote.tsx` | Dice button beside dark mode. Any published note except folder, tag and home pages. |
| Rabbit hole | `site/components/RandomNote.tsx` | Button under every note: follows one of the note's outgoing links at random, or any note if it has none. |
| Explorer, search, backlinks, TOC, breadcrumbs, RSS, sitemap | upstream Quartz | Explorer is folder-first, collapsed. |
| Head | `site/components/Head.tsx` | Wraps upstream Head and drops its cdnjs preconnect. No Latex or mermaid plugin: both load from a CDN, and `$700 to $166` in a note would otherwise render as maths. Write a currency sign as `\$` anyway. |

Components live in `site/components/` with their styles in `styles/` and browser scripts in
`scripts/*.inline.ts`, next to the config, so re-extracting a newer Quartz tarball over
`site/quartz/` cannot touch them. Colours are the nine slots in `site/quartz.config.ts`; the
light palette uses the two darker oranges for link and hover text so both clear WCAG AA
4.5:1 on the cream background.

## Local preview

```bash
cd site && npm ci && npm run serve
```

Push to `main` → `.github/workflows/deploy.yml` builds, checks the output, deploys to Pages.

## Decisions

| Decision | Why |
| --- | --- |
| Quartz from the v4 tarball, not `git clone` | A nested `.git` becomes a broken submodule in this repo. Update by re-extracting a newer tarball over `site/quartz/`, `site/package.json` and `site/package-lock.json`, then `npm ci`. **Never run `npx quartz update` here**: `site/` is not its own git repo, so its `git remote add upstream` / `git pull upstream v4` run against *this* repository, and it stashes the content folder by copying and deleting it. |
| Content root is the vault (`-d ..`) rather than `site/content` | One source of truth: notes are edited in place, no copy step. |
| `ExplicitPublish` + image-only asset emitter | Default is private. Publishing takes a deliberate act per file. |
| System fonts, no analytics, no OG-image emitter | No runtime third-party requests; no build-time network fetch. |
| Custom components beside `site/quartz/`, never inside it | Upstream stays pristine and replaceable; everything of mine is in `site/components/`, `site/quartz.config.ts`, `site/quartz.layout.ts`, `site/publishedAssets.ts`. |
| `ignore-scripts=true`, SHA-pinned actions, Dependabot | Supply-chain floor for a repo that runs on every push. |

## Known compromises

- `publish: true` is checked per file only. A published note that links to an unpublished one
  shows a dead link; Quartz does not warn. The dead link still carries the target's path
  (`href` and `data-slug`), so the *name* of a private note or attachment is visible in the
  page source even though the file never ships.
- The repository is public. `publish: false` keeps a note off the site, not off GitHub.
  See [SECURITY.md](SECURITY.md).
- No CSP/HSTS: GitHub Pages does not allow custom headers.
- The random note and rabbit hole buttons read `static/contentIndex.json`, which Quartz
  already ships for search and the graph. They need JavaScript; without it they do nothing.
