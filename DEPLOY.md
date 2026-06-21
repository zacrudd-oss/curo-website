# Deployment Guide — Azure Static Web Apps

## 1. Create Static Web App
- Azure Portal → Create Resource → Static Web App
- **Source:** GitHub
- **Repo:** `zacrudd-oss/curo-website`
- **Branch:** `main`
- **Build preset:** Vite
- **App location:** `/`
- **Output location:** `dist`

## 2. Build Settings (auto-detected, verify these)
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 20+

## 3. SPA Routing
Create `staticwebapp.config.json` in the repo root:
```json
{
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

## 4. Custom Domain (`curo.ltd`)
- In Azure Portal → Static Web App → Custom Domains → Add
- Add a CNAME record with your domain registrar pointing to the Azure-provided URL
- SSL certificate is provisioned automatically

## 5. Environment Variables
None. No backend, no secrets.

## 6. After Deploy
- Verify all 5 pages load correctly
- Test contact form submissions (Formspree)
- Confirm HTTPS is active on `curo.ltd`

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
