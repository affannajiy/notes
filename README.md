# Notes

Plain Markdown notes, written in VS Code and published selectively to GitHub Pages with
[Quartz v4](https://quartz.jzhao.xyz).

A general knowledge hub with no schedule: Hub, Company, Take, Why, Case and Food notes, each
bite-sized. See `How I Use These Notes.md` for the cheat-sheet and the recall habit.

## Layout

| Path | Purpose | Published? |
| --- | --- | --- |
| `notes/` | every note, all kinds in one flat folder, named after the subject (`PETRONAS.md`, `Lemang.md`) | only with `publish: true` |
| `templates/` | `note.md`, the one copy-paste starting point for every kind | never |
| `rulebooks/` | engineering / security / UI-UX principles | only with `publish: true` |
| `site/` | Quartz install; content root is this folder (`-d ..`) | - |
| `site/components/` | my own Quartz components (latest board, random note, rabbit hole, head) | - |

The kind of a note lives in its frontmatter, not its folder. Every note carries `type:`
(`hub` `company` `take` `topic` `case` `food`), a matching kind tag (`hub` `company` `take`
`why` `case` `food`) and `date:`. The latest board on the home page picks the newest published
note of each type and links to that kind's tag page. The template starts `publish: false`.
Filenames must be unique across the repo: Quartz resolves `[[Name]]` by shortest path, so
two notes named the same collide. Link generously - the graph is built from links, not folders.

## Writing notes

To start a note, copy `templates/note.md` into `notes/`, rename it after the subject, and fill in
`title:`, `type:` and `date:` (`YYYY-MM-DD`). The skeleton is fixed (In one sentence, a few
middle sections, Sources, Related); the middle sections come from the per-kind menu in the
template's comment and bend to the topic. File name and title are just the subject (`Rally Cars`),
no kind label like "Primer" or "Company 1", unless I ask for one. Link other notes with `[[Note name]]`: the wikilink
syntax is parsed by Quartz itself, no app needed, and every link is an edge in the graph.

Every note is bite-sized: answer in the first line, one idea per section, 400 to 600 words of
body (sources not counted), so it reads in 2 to 3 minutes. Tables for lookups, short
paragraphs for arguments. Why that size:

- People read about 20 to 28% of the words on a web page and scan the top and left edge
  first ([NN/G](https://www.nngroup.com/articles/how-little-do-users-read/)), so the answer
  goes first.
- Learning chunks of 2 to 5 minutes on one idea hold attention best
  ([Compozer](https://www.compozer.com/post/how-long-should-microlearning-videos-be),
  [ACM eLearn](https://elearnmag.acm.org/archive.cfm?aid=3704731)).

Hubs are the one exception that may run a little longer, since they are mostly lookup tables.

Source material (slides, PDFs, annual reports, papers) is **not stored in the repo**. Every
note has a `## Sources` section for name + link instead. As a safety
net, any folder named `reference/` is still git-ignored and excluded from the build.

Editing in VS Code: the root `.prettierignore` skips `*.md` and `.vscode/settings.json` turns
off format-on-save for Markdown, so Prettier (a Quartz dev dependency) never pads the tables
or rewrites the frontmatter.

## Publishing rule

A note is published **only** if its frontmatter has `publish: true`. Everything else is dropped
by the `ExplicitPublish` filter in `site/quartz.config.ts`. `templates/` and any
`**/reference/` folder are excluded before the filter runs.

Images (`png jpg jpeg gif svg webp avif`) next to a note are copied to the site; every other
file type is never emitted. Put an image in an `attachments/` folder beside the note and embed
it as `![[image.png]]`: the `shortest` link strategy resolves a unique bare filename anywhere
in the repo, but a path such as `![](attachments/image.png)` (what VS Code writes when you
paste an image) is resolved from the repo root and 404s on the site.
See [SECURITY.md](SECURITY.md) for the full posture.

## The site

Warm cream / orange theme, system fonts, light and dark. The graph is the main feature.

| Feature | Where | Notes |
| --- | --- | --- |
| Graph view | `site/quartz.layout.ts` | Local graph two hops deep; global graph is every published note, radial layout. |
| Latest board | `site/components/LatestBoard.tsx` | Home only. One row per note kind, newest published note of that `type:`. The kind label links to its tag page (`tags/company` etc.) once a published note carries that tag. Edit `KINDS` there to add or drop a kind. |
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
| Content root is the repo root (`-d ..`) rather than `site/content` | One source of truth: notes are edited in place, no copy step. |
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
