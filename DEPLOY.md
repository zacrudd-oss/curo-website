# Deployment Guide

## 1. Clone the repo
```
git clone https://github.com/zacrudd-oss/curo-website.git
cd curo-website
```

## 2. Install dependencies
```
npm install
```

## 3. Deploy to Vercel or Netlify
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite
- **Node version:** 20+

## 4. SPA Routing
All paths must redirect to `index.html`. Vercel and Netlify handle this automatically.  
If not auto-detected, add one of these:

**Vercel** — create `vercel.json` in root:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Netlify** — create `public/_redirects`:
```
/* /index.html 200
```

## 5. Domain
Point `curo.ltd` to the hosting platform. Zac will update DNS once deployment is confirmed.

## 6. Environment Variables
None. No backend, no secrets.

---

## Tech Stack
- React 19 + TypeScript
- Vite 8 (static SPA)
- Tailwind CSS 4
- React Router 7

## External Services
- Formspree (`mrevojje`) — contact/seller forms, already configured

## Pages
1. `/` — Home
2. `/about` — About
3. `/services` — Services
4. `/sellers` — Sellers
5. `/contact` — Contact

## Outstanding (not blocking deploy)
- Logo asset — placeholder for now
- Social links — currently `#`
- Privacy/Terms pages — not yet built
