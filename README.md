# Laukik Upadhyay — Portfolio

Personal portfolio for a **Software Development Engineer (SDE)** and **Software
Development Engineer in Test (SDET)**.

Built with React 18 + Vite and plain CSS Modules. No UI framework, no animation
library, no component library — the motion system, icon set and design tokens are
all hand-written, which keeps the shipped bundle small and gives the site something
to actually talk about in an interview.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production bundle into `dist/` |
| `npm run preview` | Serve the built bundle locally |
| `npm run optimize:images` | Regenerate responsive portrait variants (see below) |

---

## The dual-track idea

The whole site is organised around two colour-coded tracks, because the pitch is
that both are true at once:

| Track | Colour | Covers |
|---|---|---|
| **Development** | indigo → violet | Java, Spring Boot, Hibernate/JPA, PostgreSQL, ReactJS, the ReportPortal platform |
| **Testing** | cyan → teal | Appium, Playwright, REST Assured, Postman, manual QA, CI/CD reporting |

Any element with `data-track="dev"` or `data-track="test"` re-points the `--accent*`
custom properties for its whole subtree, so a component inherits its track colour
without needing track-specific classes. That's defined at the bottom of
`src/styles/tokens.css`.

Experience and Projects both carry a **track filter**, so a backend hiring manager
can read only Development and an SDET manager only Testing.

---

## Project structure

```
src/
├── data/                  # ← all content lives here; components hold no copy
│   ├── index.js           #   barrel + SECTIONS registry (order, nav, numbering)
│   ├── profile.js         #   identity, contact, hero facts, auto-computed tenure
│   ├── skills.js          #   devStack + testStack, split deliberately
│   ├── experience.js      #   roles modelled as parallel tracks per employer
│   ├── projects.js        #   professional case studies + personal projects
│   ├── testing.js         #   pyramid, surfaces, defect types, code snippets
│   └── credentials.js     #   education + certifications
├── hooks/
│   ├── useReveal.js         # one IntersectionObserver for the page, auto-staggered
│   ├── useActiveSection.js  # nav highlighting, measured against a reading line
│   ├── useScrollProgress.js # rAF-throttled 0–1 scroll position
│   └── useMagnetic.js       # cursor-follow on CTAs (fine pointer only)
├── components/
│   ├── ui/                  # Section shell, Icon set, TrackToggle
│   ├── HeroCanvas.jsx       # hand-written 2D constellation field
│   ├── StackSection.jsx     # rendered twice: dev stack and test stack
│   ├── TestingShowcase.jsx  # pyramid, surfaces, code samples, reporting
│   └── …                    # one file per section
└── styles/
    ├── tokens.css         # primitives → semantic aliases → track scoping
    └── global.css         # reset, layout helpers, shared atoms
```

**To change content, edit `src/data/`.** Components read from the barrel and
contain no hard-coded copy.

---

## Editing the content

| What | Where |
|---|---|
| Name, contact, headline, availability | `data/profile.js` |
| Development skills | `data/skills.js` → `devStack` |
| Testing skills | `data/skills.js` → `testStack` |
| Jobs and role tracks | `data/experience.js` |
| BestQ case studies | `data/projects.js` → `professional` |
| Personal projects | `data/projects.js` → `personal` |
| Test pyramid, code samples | `data/testing.js` |
| Degrees and certificates | `data/credentials.js` |
| Section order and numbering | `data/index.js` → `SECTIONS` |

Tenure is computed from `CAREER_START` in `profile.js`, so "2 yr 2 mo" never goes
stale and never needs editing.

---

## Images

`src/assets/profilePhoto.png` is the 1.9 MB master and **is not shipped**. The build
uses generated AVIF / WebP / JPEG variants at 400 w and 800 w, served through a
`<picture>` element — about 21 KB in practice instead of 1.9 MB.

After replacing the master photo:

```bash
npm run optimize:images
```

---

## Accessibility & motion

- Every animation is gated on `prefers-reduced-motion`, in CSS and in JS.
- The hero canvas stops rendering when it scrolls out of view or the tab is hidden.
- Skip link, focus-visible rings, `aria-expanded` on every disclosure, real
  `role="tablist"` semantics on the tabbed panels.

---

## Deploying

Push to GitHub, import the repo at [vercel.com](https://vercel.com), framework
preset **Vite**, deploy. No environment variables required.
