# Caustic — The Toxic Trapper (Apex Legends Fan Dossier)

An unofficial, fan-made single-page dossier on **Caustic (Alexander Nox)** from Apex Legends. Built with **Next.js (App Router) + TypeScript + Tailwind CSS** in a dark-modern aesthetic with a toxic-green accent.

> ⚠️ Not affiliated with Respawn Entertainment or Electronic Arts. Apex Legends and all related characters are trademarks of their respective owners. Fan content only.

## Features

- Sticky blurred navbar with smooth-scroll sections
- Hero with toxic-green gradient title and animated gas-particle glow
- Quick-facts dossier grid (real name, age, homeworld, role)
- Ability cards: **Nox Vision** (Passive) / **Nox Gas Trap** (Tactical) / **Nox Gas Grenade** (Ultimate)
- Backstory timeline (Humbert Labs → faked death → Apex Games)
- Field-manual tips for real matches
- **Dynamically generated favicon and OpenGraph image** via `next/og` — no static assets needed

## Tech Stack

- Next.js 15.5.9 (App Router)
- React 19.1.0
- TypeScript 5.5
- Tailwind CSS 3.4

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Open Graph / SEO

`metadataBase` is resolved from the `NEXT_PUBLIC_SITE_URL` env var (defaults to `http://localhost:3000`). Set it to your deployed URL for correct social-share image URLs:

```
NEXT_PUBLIC_SITE_URL=https://your-deployment.vercel.app
```

The OG image (1200×630) and favicon (32×32) are generated at runtime by:

- `app/opengraph-image.tsx`
- `app/icon.tsx`

## Deploy on Vercel

1. Push this branch to GitHub.
2. In Vercel, **New Project → Import** the `trueisland0118/hello-world` repo.
3. Framework preset: **Next.js** (auto-detected). No build config needed.
4. (Optional) Add env var `NEXT_PUBLIC_SITE_URL` = your production URL.
5. **Deploy**. Preview deployments are created per PR; production tracks `main`.

## Project Structure

```
app/
  layout.tsx, page.tsx, globals.css
  icon.tsx, opengraph-image.tsx
  components/
    Navbar, Hero, QuickFacts, Abilities, Lore, Tips, Footer
```

---

© Dark Dossier · Built with Next.js
