# AGENTS.md

## Cursor Cloud specific instructions

This is an **Astro + Tailwind CSS static landing page** for the LiveElectric product. No backend, database, or external services required.

### Running the dev environment

- Dev server: `npm run dev -- --host 0.0.0.0` (serves on `http://localhost:4321`)
- Type checking (lint equivalent): `npm run check`
- Build: `npm run build` (outputs static files to `dist/`)
- Preview production build: `npm run preview`

See `README.md` for full project structure and color palette details.

### Gotchas

- `npm run check` requires `@astrojs/check` to be installed. On first run it may prompt interactively to install it. Pre-install it with `npm install @astrojs/check typescript` to avoid the interactive prompt.
- There is no dedicated linter (ESLint) configured; `npm run check` (Astro's type checker) is the primary code quality check.
- The project has no `.env` files or secrets. All content is static.
- The `--host 0.0.0.0` flag is needed for the dev server to be accessible outside localhost in cloud/container environments.
