# EXCEL ATELIER — Marketing Site

Next.js marketing site for **EXCEL ATELIER** (App Router, TypeScript, Tailwind CSS v4, Framer Motion).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

This repo is ready for [Vercel](https://vercel.com) with zero extra env vars for the current static/contact UI.

### Option A — Import from Git

1. Push this project to GitHub (or GitLab / Bitbucket).
2. In Vercel: **Add New Project** → import the repository.
3. **Root Directory:** leave as `.` if the repo root is this folder (`zha-replica`). If the repo is a parent monorepo, set **Root Directory** to `zha-replica`.
4. **Framework Preset:** Next.js (auto-detected).
5. **Build Command:** `npm run build` (default).
6. **Output:** handled by Next.js (do not set a custom output directory).
7. **Install Command:** `npm install` (default).
8. **Node.js:** 20.x (from `.nvmrc` / `engines` in `package.json`).
9. Deploy.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd zha-replica
vercel
```

Follow prompts; use `vercel --prod` for production.

### Configuration files

| File | Purpose |
|------|---------|
| `vercel.json` | Next.js framework hint, install/build commands, cache headers for `public/` media |
| `next.config.ts` | `images.remotePatterns` for `images.unsplash.com` (expertise / editorial images) |
| `.nvmrc` | Node 20 for consistent builds on Vercel |

### Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Recommended in production** | Canonical URL for sitemap, Open Graph, and JSON-LD (e.g. `https://your-app.vercel.app`) |

Copy `.env.example` to `.env.local` for local overrides. In Vercel: **Project → Settings → Environment Variables** → add for **Production** (and Preview if you use custom domains).

### Caching & performance (static + Vercel CDN only)

No backend, Redis, or server-side data cache — only static generation and HTTP/CDN headers.

| Asset | Policy |
|-------|--------|
| `/_next/static/*` (hashed JS/CSS/chunks) | `max-age=31536000, immutable` |
| `/_next/image` (optimized images) | 1 year, immutable |
| `public/*` (images, video, fonts) | 1 year, immutable |
| `/` HTML | Browser `must-revalidate`; Vercel edge `s-maxage=1y` + SWR |
| `sitemap.xml` / `robots.txt` | 1h browser / 1d edge SWR |

- **`export const dynamic = "force-static"`** on layout, page, sitemap, robots.
- **`next.config.ts`**: `compress`, AVIF/WebP, `minimumCacheTTL` 1 year for the image optimizer.
- **`src/lib/cache-control.ts`**: shared cache header constants.
- **Hero video**: `preload="metadata"`; fonts via `next/font` (`display: swap`).

### SEO

- `metadata` (title template, description, Open Graph, Twitter, robots).
- `/sitemap.xml` and `/robots.txt` (auto-generated).
- JSON-LD (`ProfessionalService`) with name, phone, and logo.
- Set `NEXT_PUBLIC_SITE_URL` so canonical and social URLs are correct (not `*.vercel.app` unless that is your live URL).

**After deploy, check:**

1. [PageSpeed Insights](https://pagespeed.web.dev/) on your production URL.
2. View source → confirm `<meta property="og:...">` and JSON-LD.
3. Visit `/sitemap.xml` and `/robots.txt`.

### After deploy

- Confirm hero video: `/banner.mp4`
- Confirm images in **News** and **Expertise** load (local `/news/*` + remote Unsplash where used)
- Test **Enquire now** (`tel:+918708533636`) on a phone
- Test footer contact form (client-side success modal only until a backend is connected)
