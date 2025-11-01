# The Journey of the Wounded Heart — Web App Skeleton

This is a minimal, deploy-ready starter for your project using **Next.js 14 + TailwindCSS + Three.js** and set up for **Azure Static Web Apps (Free tier)** to keep costs down.

## ✨ Features
- Static export (`next export`) for cheap + simple hosting
- TailwindCSS styling
- Three.js glowing orb as a placeholder for your Spirit–Soul–Body model
- Clean, minimal layout you can extend

## 🧑‍💻 Local Dev

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build static site (exports to ./out)
npm run build

# 4) Preview production build (optional)
npm run start
```

## ☁️ Deploy to Azure Static Web Apps (Free)

### Option A — GitHub Actions (recommended)
1. **Create a new GitHub repo** and push this project.
2. In the **Azure Portal**, create a **Static Web App** (Free tier). When asked:
   - **Source**: GitHub
   - **App location**: `/`
   - **Build command**: `npm run build`
   - **Output location**: `out`
3. Azure will auto-create the GitHub Action. On first run it will deploy your site.

> If Azure asks for a token-based workflow, set a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` in your repo and use the workflow included here.

### Option B — Manual workflow with token (included)
- Update `.github/workflows/azure-static-web-apps.yml` with your `app_location` and commit it.
- Add the repo secret: `AZURE_STATIC_WEB_APPS_API_TOKEN` from your Static Web App resource.
- Push to `main` to trigger deploy.

## 🔧 Customize
- Edit `src/components/ThreeScene.tsx` to change the 3D model or visuals.
- Add pages/sections within `src/app/` using the App Router.
- Tailwind styles are in `src/styles/globals.css`.

## 📦 Notes
- This skeleton uses static export so SSR/APIs are not enabled by default. When you need dynamic APIs or auth, consider moving to Azure Static Web Apps with an **API backend** (Azure Functions) or to **Azure App Service**.

Enjoy building! 🌿
