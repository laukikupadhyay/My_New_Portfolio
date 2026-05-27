# Laukik Upadhyay — Portfolio

Personal portfolio website built with **ReactJS + Vite**.

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # All section components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── TechStack.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js   # ← Edit your info here
├── styles/
│   └── global.css
└── main.jsx
```

## Customisation

1. **Your photo** — Replace `src/assets/profile.jpg` with your photo
2. **Resume link** — Update `resumeUrl` in `src/data/portfolioData.js`
3. **GitHub links** — Update project `github` fields in portfolioData
4. **Deploy** — Push to GitHub → connect to Vercel → auto-deploy

## Deploy on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Vite** — click Deploy ✅
