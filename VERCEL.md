# Put EXCEL ATELIER online with Vercel

Your project is already configured for Vercel (`vercel.json`, static Next.js build, Node 20).

## Step 1 — Push code to GitHub

Your repo: **https://github.com/Kartikey1078/excel-atekier**

From the project folder:

```bash
cd zha-replica
git add .
git commit -m "Prepare site for Vercel deployment"
git push origin main
```

(Skip `commit` if everything is already pushed.)

## Step 2 — Import on Vercel

1. Open [https://vercel.com](https://vercel.com) and sign in (use **Continue with GitHub**).
2. Click **Add New… → Project**.
3. Find **excel-atekier** and click **Import**.
4. **Root Directory:** leave as `.` (repo root is this Next.js app).  
   If the app lived in a subfolder, you would set **Root Directory** to that folder.
5. **Framework Preset:** Next.js (auto-detected).
6. **Build Command:** `npm run build` (default).
7. **Install Command:** `npm install` (default).
8. Click **Deploy** and wait ~2–3 minutes.

You will get a live URL like: `https://excel-atekier.vercel.app`

## Step 3 — Environment variable (recommended)

After the first deploy:

1. Vercel → your project → **Settings** → **Environment Variables**.
2. Add:

| Name | Value | Environments |
|------|--------|----------------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` or your custom domain | Production |

3. **Redeploy:** Deployments → … on latest → **Redeploy**.

This fixes sitemap, Open Graph, and canonical URLs for SEO.

(Vercel also sets `VERCEL_URL` automatically; production URL is used when possible.)

## Step 4 — Custom domain (optional)

1. **Settings** → **Domains** → add e.g. `www.yourstudio.com`.
2. Follow DNS instructions at your domain registrar.
3. Update `NEXT_PUBLIC_SITE_URL` to that domain and redeploy.

## What works without a backend

- Homepage, architecture pages (`/architecture`, `/architecture/...`)
- Contact form (success message only — no email sent until you add a service later)
- **Enquire now** → phone call `+91 87085 33636`
- Images in `public/` and optimized Unsplash images

## Troubleshooting

| Issue | Fix |
|--------|-----|
| Build fails on Vercel | Check **Deployments → Build Logs**; run `npm run build` locally |
| Old site after push | Vercel redeploys on each push to `main`; or trigger **Redeploy** |
| Wrong links in sitemap | Set `NEXT_PUBLIC_SITE_URL` and redeploy |

## Deploy from terminal (optional)

```bash
npm i -g vercel
cd zha-replica
vercel login
vercel        # preview
vercel --prod # production
```
