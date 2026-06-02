# Tatva Yoga Studio Website

Production-ready Next.js website for Tatva Yoga Studio, built with the App Router, Tailwind CSS, and secure form handling.

## Project structure

- `app/layout.jsx` — global layout, metadata, and shared shell
- `app/page.jsx` — home page
- `app/about/page.jsx` — about page
- `app/services/page.jsx` — services page
- `app/branches/page.jsx` — branch locations page
- `app/contact/page.jsx` — contact page with secure form
- `app/privacy-policy/page.jsx` — privacy policy page
- `app/terms/page.jsx` — terms page
- `app/disclaimer/page.jsx` — disclaimer page
- `app/api/contact/route.js` — secure contact form API route
- `components/` — reusable UI components
- `lib/` — shared site data and validation helpers
- `styles/globals.css` — Tailwind base styles

## Run locally

1. Open the folder in VS Code: `C:\Users\gouss\TatvaYogaWebsite`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start local development server:
   ```bash
   npm run dev
   ```

## Notes

The website follows modern security and performance practices:
- Next.js App Router
- SEO metadata and Open Graph details
- secure contact form validation
- rate limiting and honeypot spam protection
- mobile-first responsive design
- minimal, premium wellness styling
