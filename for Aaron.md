# CURO Website — Deployment Handoff

## Project
CURO Bespoke Investments — property deal sourcing brokerage website.

## Tech Stack
- React 19 + TypeScript
- Vite 8 (static SPA, no SSR)
- Tailwind CSS 4
- React Router 7

## Build & Run
```
npm install
npm run build      # outputs to dist/
npm run dev        # local dev server (port 5173)
```

## Environment Variables
None required. The Formspree contact form ID (`mrevojje`) is hardcoded.

## Pages
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Sellers (`/sellers`)
- Contact (`/contact`)

## Routing
Client-side SPA routing via React Router. The hosting platform needs to redirect all paths to `index.html` (Vercel and Netlify handle this automatically with their SPA config).

## Domain
Target domain: `curo.ltd`

## Fonts (loaded via Google Fonts in index.html)
- Playfair Display (headings)
- Inter (body)

## External Services
- Formspree (`mrevojje`) — handles Contact and Sellers form submissions
- No backend / no database

## Deployment Notes
- Static site — just serve the `dist/` folder
- Recommended: Vercel or Netlify
  - Set build command: `npm run build`
  - Set output directory: `dist`
  - Framework preset: Vite
- Add a `_redirects` file (Netlify) or `vercel.json` (Vercel) for SPA fallback if not auto-detected

## Outstanding Items (not blocking deploy)
- CURO logo asset (gold emblem) — to be added
- Social media URLs (Instagram, LinkedIn, Facebook) — currently placeholder `#`
- Privacy Policy / Terms of Service pages — not yet built

Any questions, reach out to Zac.
