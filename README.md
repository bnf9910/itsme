# Cheongdam IT'S ME Clinic — Global PR Website

A premium English-language PR website for **Cheongdam IT'S ME Clinic**, designed for an international audience. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

> **Live target:** https://itsme1.kr (or chosen Vercel domain)

---

## ✨ Highlights

- **Editorial luxury aesthetic** — Cormorant Garamond display + Manrope sans, bone/ink palette inspired by the clinic's interior
- **Six fully-built pages** — Home / About / Treatments / Results / Pricing / Contact
- **USD-converted pricing** with KRW reference, single source of truth in `lib/data.ts`
- **Image-optimized** — all photos converted to WebP (149 MB → 3.2 MB, 97.8% reduction)
- **SEO-ready** — proper metadata, OpenGraph, semantic HTML, Next/Image optimization
- **Mobile-first** — works beautifully on phone, tablet, desktop

---

## 🛠 Local Development

### Prerequisites
- Node.js 18.17+ (recommended: 20 LTS or 22)
- npm 9+ (or pnpm / yarn)

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
itsme-clinic/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── treatments/page.tsx
│   ├── results/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
├── lib/
│   └── data.ts               # ⭐ All clinic content + USD conversion logic
├── public/
│   └── images/
│       ├── clinic/           # Interior photography
│       ├── doctor/           # Dr. Kim's photos
│       ├── treatments/       # Device logos (Onda, Thermage, etc.)
│       ├── results/          # Before/after gallery
│       └── logo/             # Clinic logo
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✏️ Editing Content

**All text content, treatment data, and pricing live in one file: `lib/data.ts`.**

To update prices, change the USD conversion rate, edit treatment descriptions, or modify Dr. Kim's bio — edit `lib/data.ts` and the changes propagate site-wide.

```ts
// Example: update USD rate
export const USD_RATE = 1400;  // Adjust as needed
```

---

## 🚀 Deploy to Vercel via GitHub

### Step 1: Create a GitHub repository

```bash
cd itsme-clinic
git init
git add .
git commit -m "Initial commit: IT'S ME Clinic global PR site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/itsme-clinic.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"**.
3. Select your `itsme-clinic` repository.
4. Vercel auto-detects Next.js — leave all settings as default.
5. Click **"Deploy"**.

Within ~2 minutes, your site is live at `https://itsme-clinic-xxxx.vercel.app`.

### Step 3 (Optional): Connect a custom domain

1. In Vercel, go to **Project → Settings → Domains**.
2. Add your domain (e.g. `itsme1.kr` or `itsmeclinic.com`).
3. Follow Vercel's DNS instructions to point your domain.

### Continuous Deployment

Every `git push` to `main` triggers an automatic redeploy. Pull request previews are also automatic.

---

## 📨 Contact Form Backend (TODO)

Currently the contact form is a UI-only stub that simulates success. To make it functional, integrate one of:

- **Formspree** (easiest, no code) — add `action="https://formspree.io/f/YOUR_ID"` to the form
- **Resend + Next.js API route** (recommended for control) — create `app/api/contact/route.ts` that sends an email via Resend
- **EmailJS** (frontend-only)
- **Direct integration** with the clinic's CRM if available

The `ContactForm.tsx` component has a clear `// TODO:` marker showing where to add the integration.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `bg-bone-50` | `#FCFAF7` | Page background |
| `bg-bone-100` | `#F8F5F0` | Section alt background |
| `text-ink` | `#0A0A0A` | Body text & headings |
| `text-ink-700` | `#3A3A3A` | Secondary text |
| `text-accent` | `#A88B5C` | Gold accent / CTAs |
| Display font | Cormorant Garamond | Headings (300 weight) |
| Sans font | Manrope | Body |
| Script font | Italianno | Brand wordmark accent |

---

## 📊 Content Inventory

- **6 pages** ready
- **17 clinic interior photos** — optimized to ~80–250 KB each
- **4 doctor photos** + credentials list
- **9 treatment device entries** (Onda, Thermage, Ulthera, Shrink, Volnewmer, Potra, Density, Trifill, Potenza)
- **13 before/after results** in the gallery
- **Full pricing tables** in 4 formats (signature packages, Onda tiers, Potra tiers, fillers/boosters/injections)

---

## 🔧 Maintenance

- **Update prices**: Edit `lib/data.ts` → `PRICING` object → push to GitHub → Vercel auto-redeploys.
- **Add a treatment**: Add to `TREATMENT_CATEGORIES` array in `lib/data.ts`.
- **New doctor info**: Update `DOCTOR` constant in `lib/data.ts`.
- **New photos**: Add to `public/images/[category]/` (use WebP for best performance).

---

## ⚖️ License & Attribution

Site content © Cheongdam IT'S ME Clinic. All clinic photography, doctor photos, before/after images, and clinical information remain the property of the clinic.

Built with Next.js, Tailwind CSS, and Vercel.
