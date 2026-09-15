# site/ - Quartz install

Quartz v4 (https://quartz.jzhao.xyz), MIT, see LICENSE.txt. The vault root (`..`) is the
content directory; see the top-level README for the publishing rules and the feature list.

Never run `npx quartz update` here - `site/` is not its own git repo, so its
`git remote add upstream` / `git pull upstream v4` would run against the vault's repository,
and it stashes the content folder by copying and deleting it. Update by re-extracting a newer
tarball over `quartz/`, `package.json` and `package-lock.json`, keeping these files:

- `quartz.config.ts`, `quartz.layout.ts` - configuration, colours, which components go where
- `publishedAssets.ts` - image-only asset emitter (replaces built-in `Assets`)
- `components/` - my own components (`WeeklyBoard.tsx`, `RandomNote.tsx`), their
  `styles/*.scss` and `scripts/*.inline.ts`. They import from `../quartz/...`, so after an
  upgrade run `npx tsc --noEmit` to catch any upstream API change.

Everything under `quartz/` is upstream. Do not edit it; put overrides beside it.
