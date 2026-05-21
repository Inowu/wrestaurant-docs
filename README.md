# wrestaurant-docs

Public API documentation site for [W Restaurant API](https://wrestaurant-api.inowu.store).

Live at **https://docs.wrestaurantapi.com**.

## Architecture

- **Engine:** [Zudoku](https://zudoku.dev) — OpenAPI reference + MDX guides.
- **Spec source:** `apis/openapi.json`. Auto-synced from [Inowu/wrestaurant-api](https://github.com/Inowu/wrestaurant-api) by the `sync-docs.yml` workflow there. **Never hand-edit** — it's overwritten on every spec change.
- **Guides:** Spanish MDX pages in `pages/`. Hand-authored.
- **Deploy:** Dokploy compose service on the Inowu Swarm cluster (2 replicas, nginx serving static `dist/`).

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:9000
pnpm build    # produces dist/
pnpm preview  # serve the built site locally
```

## Authoring guides

Add or edit MDX files in `pages/`. Register new pages in `zudoku.config.tsx` under `navigation`. Open a PR — `spec-merge-check.yml` builds the site as a sanity check.

## Spec changes

You don't change the spec here. Spec changes happen in `Inowu/wrestaurant-api` — see the docs pipeline plan in that repo. Merging a spec change there opens an auto-merge PR in this repo within a minute.

## Branding

Colors and fonts match [`wrestaurant-landing`](https://github.com/Inowu/wrestaurant-landing) — see `zudoku.config.tsx` `theme:` block.
