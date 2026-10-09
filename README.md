# ⚡ AetherFlow — Modern SaaS Landing Page

A modern, high-converting, and fully responsive landing page built with **React.js** (pure JavaScript/JSX, zero TypeScript) and **Tailwind CSS**.

---

## 🌟 Overview of 8 Core Sections

1. **Navbar (`src/components/Navbar.jsx`)**:
   - Sticky backdrop-blur glassmorphic header with scroll reactivity.
   - Pulse brand emblem with live version badge.
   - Smooth anchor navigation links to all key sections.
   - Action buttons: "Watch Demo" & "Get Started" with hover gradient shifts.
   - Fully responsive animated mobile drawer menu.

2. **Hero Section (`src/components/Hero.jsx`)**:
   - Next-Gen announcement pill badge with glowing ping indicator.
   - High-impact headline with multi-tone gradient typography.
   - Persuasive conversion copy and dual CTA buttons.
   - Trust highlights (SOC2 Type II, no credit card, 2-minute setup).
   - **Interactive Live Dashboard Preview**:
     - Dynamic tabs: Active Pipeline, Agents (4 Online), and Throughput.
     - Live execution stream with status chips, latency telemetry, and simulated counter.
   - Social proof client trust logo marquee.

3. **About / Introduction (`src/components/About.jsx`)**:
   - Comprehensive overview of the problem and autonomous AI solution.
   - 4 Interactive Key Performance Metrics (3.8x velocity, 99.98% uptime, 14M+ executions, <45ms latency).
   - Side-by-side comparison table: Legacy manual bottlenecks vs. PulseAI automated pipelines.

4. **Features Section (`src/components/Features.jsx`)**:
   - Bento-style responsive grid featuring 6 core capabilities:
     1. Autonomous Multi-Agent Swarm
     2. Predictive Bottleneck Discovery
     3. Zero-Trust Data Isolation
     4. Universal 200+ Stack Connectors
     5. Natural Language Workflow Canvas
     6. Self-Healing Runbooks & Auto-Rollback
   - Dynamic category filter buttons: *All Capabilities*, *Autonomous Agents*, *Deep Intelligence*, *Enterprise Security*.

5. **How It Works (`src/components/HowItWorks.jsx`)**:
   - Step-by-step interactive workflow:
     - **Step 01**: Connect Your Stack in 60 Seconds
     - **Step 02**: Define Guardrails & Operational Goals
     - **Step 03**: Autonomous Agents Coordinate & Execute
     - **Step 04**: Analyze Velocity & Scale Confidently
   - Interactive step switcher updating live simulation cards (OAuth stack, policy engine, execution logs, sprint ROI).

6. **Testimonials (`src/components/Testimonials.jsx`)**:
   - Verified feedback cards from engineering leaders, CTOs, and product ops leads.
   - 5-Star ratings, customer quotes, role tags, and quantified impact indicators.
   - Filter tabs by role (*All Stories*, *Engineering*, *Founders & CTOs*, *Product & Ops*).

7. **Pricing Section (`src/components/Pricing.jsx`)**:
   - Monthly vs. Annual billing switcher with "Save 20%" discount badge.
   - 3 transparent tiers: Starter ($0), Pro ($29/mo or $23/mo), Enterprise ($99/mo or $79/mo).
   - Feature checklists and distinct CTA buttons opening the interactive workspace modal.
   - Embedded FAQ accordion addressing common questions.

8. **Footer (`src/components/Footer.jsx`)**:
   - Interactive newsletter subscription form with instant client validation and toast feedback.
   - 4-column structured link directory (Product, Solutions, Resources, Company).
   - Direct contact channels (Email, Phone, Headquarters, Live Status indicator 🟢).
   - Social media links (Twitter/X, GitHub, LinkedIn, Discord, YouTube).

---

## 🛠️ Tech Stack & Architecture

- **React 19** (`.jsx`, pure JavaScript, strictly no TypeScript)
- **Tailwind CSS v4** (Modern utility-first styling with `@tailwindcss/vite`)
- **Vite 8** (High-speed build tool and dev server)
- **Lucide React** (Clean, modern iconography)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in `dist/`.

---

## 🌐 Deploy to Vercel or Netlify

### Deploy with Vercel:
1. Push code to your GitHub / GitLab repository:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new).
3. Import your repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build` (or `vite build`).
6. Output Directory: `dist`.
7. Click **Deploy**.

### Deploy with Netlify:
1. Push code to your Git remote.
2. Go to [Netlify](https://app.netlify.com/start).
3. Connect your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy Site**.
