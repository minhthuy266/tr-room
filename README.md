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

Card artwork is loaded from the single Rider–Waite–Smith collection published at https://github.com/sixseeds/tarot-api (78-card canonical manifest). Images require internet connectivity. Run `npm run audit:cards` to check the upstream manifest for 78 distinct card names and image URLs. Tarot is for reflection, not proof of anyone’s thoughts or future.
