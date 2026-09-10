# site/ — Quartz install

Quartz v4 (https://quartz.jzhao.xyz), MIT, see LICENSE.txt. The vault root (`..`) is the
content directory; see the top-level README for the publishing rules.

Project-owned files (safe across `npx quartz update`):

- `quartz.config.ts`, `quartz.layout.ts` — configuration
- `publishedAssets.ts` — image-only asset emitter (replaces built-in `Assets`)

Everything under `quartz/` is upstream. Do not edit it; put overrides beside it.
