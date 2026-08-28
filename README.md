# resume

Developer portfolio — Next.js (App Router) static export, deployed to GitHub Pages.

- English (default): `/`
- Korean: `/ko`

## Develop

```bash
npm run dev
```

Because `next.config.ts` sets `basePath: "/resume"`, the dev site is at
`http://localhost:3000/resume/` (the bare `/` returns 404 — that's expected).

## Build (static export → `out/`)

```bash
npm run build
```