# My Portfolio - Nikhil Deshmukh

This repository contains a responsive, recruiter-ready portfolio built with React and Tailwind CSS. It is scaffolded with Vite for fast local development.

What you get:
- A clean single-page portfolio (Hero, About, Skills, Projects, Experience, Contact)
- Tailwind CSS setup
- A `resume.md` containing your resume content for download/view

Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Notes & deployment
- This is a static React app and can be deployed to Vercel, Netlify, or any static host. For Vercel, simply connect the repo and set the build command to `npm run build` and the output directory to `dist`.
- Replace placeholder links and add screenshots or images under `public/` for a more visual portfolio.

Next steps (recommended):
- Add real project images / GIFs in `public/` and reference them in the components.
- Replace `resume.md` with a PDF (`public/resume.pdf`) after you provide it.
- Add simple analytics (Vercel/GA) and SEO meta tags.
