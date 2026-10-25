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

Card artwork comes from the documented 78-image directory at https://github.com/seven102161/elaine-tarot-cards. Images require access to raw.githubusercontent.com. Run `npm run audit:cards` on an Internet-connected computer to verify all 78 image responses.
