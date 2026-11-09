# Jayesh Sutar — Freelance Web Developer Portfolio

A modern, high-performance portfolio website crafted for Jayesh Sutar, a freelance web developer building bespoke digital experiences, responsive websites, and robust full-stack applications.

Designed with an editorial aesthetic featuring refined serif display typography, warm organic tones, and fluid micro-interactions.

---

## ✦ Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Featured Projects](#featured-projects)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment on Vercel](#deployment-on-vercel)
- [Contact & Connect](#contact--connect)

---

## ✦ Overview

This portfolio showcases selected client work, technical capabilities, structured delivery processes, and client testimonials. It provides potential clients with an intuitive and immersive view into high-quality digital craftmanship.

- **Design System:** Editorial aesthetic utilizing **Cormorant Garamond** and **Plus Jakarta Sans**, styled with earthy tones (Sand `#FBF9F5`, Charcoal `#1C1A17`, and Rust `#C85024`).
- **Performance:** Optimized bundle size, lightning-fast Vite build, zero unnecessary client bloat.

---

## ✦ Key Features

- **Hero Section:** Clear value proposition, availability badge, and direct call-to-actions.
- **Featured Work:** Interactive project cards with live project links, category badges, tech stack tags, and rich technical accomplishment detail modals.
- **Services Offered:** Breakdown of core offerings including Web Development, UI/UX Design, Brand Identity, and Scalable Full-Stack Architecture.
- **Process Roadmap:** Clear 4-step workflow covering Discovery, Planning, Development, and Launch.
- **Client Testimonials:** Real client endorsements highlighting communication, speed, and execution quality.
- **Interactive Contact Modal:** Modal for project inquiries with service selection, budget estimation, and direct contact options.
- **Legal Modals:** Integrated Privacy Policy, Terms of Service, and Cookie Policy modals.
- **Fully Responsive:** Flawless layout across mobile, tablet, and widescreen desktop devices.

---

## ✦ Featured Projects

1. **Omkar Arts**
   - *Category:* Web Design, UI/UX & React
   - *Highlights:* Artisanal woodworking landing page with fluid animations and responsive layout.
   - *Tech:* React, Tailwind CSS, Framer Motion

2. **Flowtime**
   - *Category:* Fullstack Platform & Productivity
   - *Highlights:* Smart flow states & cognitive rhythm focus tracker with telemetry.
   - *Tech:* Next.js, Django, PostgreSQL, Docker, Redis

3. **Aerovolt**
   - *Category:* Clean Energy & Machine Learning
   - *Highlights:* Renewable power market forecasting platform and interactive time-series dashboard.
   - *Tech:* FastAPI, React, Docker, Python

---

## ✦ Tech Stack

- **Framework / UI:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/)

---

## ✦ Project Structure

```text
freelance-portfolio/
├── public/                 # Static public assets
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── ContactCta.tsx
│   │   ├── ContactModal.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LegalModals.tsx
│   │   ├── Navbar.tsx
│   │   ├── Process.tsx
│   │   ├── ProjectDetailModal.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   └── portfolioData.ts # Data source for projects, testimonials & bio
│   ├── App.tsx             # Root application component
│   ├── index.css           # Tailwind CSS imports & theme definitions
│   ├── main.tsx            # Application entrypoint
│   └── types.ts            # TypeScript interfaces & types
├── index.html              # HTML template
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── vite.config.ts          # Vite build configuration
```

---

## ✦ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jayeshsutar92/my-freelance.git
   cd my-freelance
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## ✦ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server on port 3000 |
| `npm run build` | Compiles TypeScript and builds production-ready bundle into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |

---

## ✦ Deployment on Vercel

The project is pre-configured and ready for zero-config Vercel deployment:

1. Import your GitHub repository `my-freelance` into [Vercel](https://vercel.com).
2. Framework preset will automatically detect **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Single-Page Application (SPA) routing is handled automatically via [`vercel.json`](./vercel.json).

---

## ✦ Contact & Connect

- **Portfolio:** [jayeshsutar.com](https://github.com/jayeshsutar92)
- **Email:** [jayeshsutar312@gmail.com](mailto:jayeshsutar312@gmail.com)
- **GitHub:** [@jayeshsutar92](https://github.com/jayeshsutar92)
