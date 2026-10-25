# TR ROOM — The Tarot Sanctuary

Interactive Rider–Waite–Smith tarot room built with React, TypeScript and Vite. Shuffle animation, 78-card interactive fan, 1–78 card draws, upright-only readings, history stored locally, and copyable interpretation prompts.

## Local

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

Repository: `minhthuy266/tr-room`. The Vite base is `/tr-room/`. Go to **Settings → Pages → Build and deployment → GitHub Actions**; pushes to `main` trigger the deploy workflow.

All 78 card JPEG files are stored in `public/cards/` and served by GitHub Pages locally (no third-party image host needed). Source: seven102161/elaine-tarot-cards. Run `npm run audit:cards` to validate all files.
