# AGENTS.md — ASI Puri Circle Web Portal

## 1. Project Overview & Institutional Domain

This repository powers the official public web portal for the **Archaeological Survey of India (ASI), Puri Circle**, an attached office under the **Ministry of Culture, Government of India**.

- **Creation & Jurisdiction:** Puri Circle was established on **November 9, 2022** (Notification No. `J-11014/3/2023-Planning`) via bifurcation of the erstwhile Bhubaneswar Circle.
- **Geographic Coverage:** 15 districts of Odisha — Angul, Bhadrak, Balesore (Balasore), Cuttack, Deogarh, Dhenkanal, Jagatsinghpur, Jajpur, Jharsuguda, Kendrapada (Kendrapara), Keonjhar, Mayurbhanj, Puri, Sambalpur, and Sundargarh.
- **Key Monument Statistics:**
  - **40 Centrally Protected Monuments (CPMs)** across 15 districts (prehistoric sites, Buddhist complexes, rock-cut shrines, medieval forts, Kalingan rekha/pidha temples, and historical bridges).
  - **1 UNESCO World Heritage Site:** Sun Temple, Konark (Black Pagoda).
  - **World-Renowned Monument:** Shri Jagannath Temple, Puri.
- **Sub-Circles (Alphabetical Order):**
  1. **Cuttack Sub-Circle** (28 CPMs) — In-Charge: Sr. CA Siddhartha Sankar Garai (`9474627202`)
  2. **Dhenkanal Sub-Circle** (8 CPMs) — In-Charge: CA Jyoti Ranjan Pradhan (`9348549465`)
  3. **Konark Sub-Circle** (2 CPMs) — In-Charge: CA Trailokyanath Behera (`9801980199`)
  4. **Puri Sub-Circle** (2 CPMs) — In-Charge: Sr. CA Sourav Tewary (`7980703277`)
- **Site Museums (Fixed Order):**
  1. **Archaeological Museum, Konark** (Est. 1968, 262 displayed / 455 reserve)
  2. **Archaeological Museum, Ratnagiri** (Est. 1998, 252 displayed / 3288 reserve)
  3. **Archaeological Museum, Lalitagiri** (Inaugurated 2018 by Hon'ble PM, 50 displayed / 325 reserve, houses sacred relic caskets)

---

## 2. Technical Stack & Dependencies

- **Runtime & Framework:** React 19 (`react`, `react-dom`) with TypeScript 5 (`strict: true`).
- **Bundler & Build Tool:** Vite 5 (`@vitejs/plugin-react`). Local dev server defaults to port `5180` with `host: true`.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss` v4 alpha) with custom theme tokens defined in `src/index.css`.
- **Icons:** `lucide-react` (tree-shakeable SVG icons).
- **Routing & Splitting:** `react-router-dom` (v6.23.1) with client-side code splitting via `React.lazy` and `Suspense`. Page transitions powered by `framer-motion` (`AnimatePresence mode="wait"`).
- **SEO & Meta Management:** `react-helmet-async` (v3.0.0) managing page titles, descriptions, and OpenGraph/Twitter cards.
- **Images:** `@unpic/react` for high-performance responsive image rendering with layout preservation.
- **Internationalization (i18n):** `i18next` & `react-i18next` supporting 3 official languages:
  - English (`en` — default fallback)
  - Hindi (`hi`)
  - Odia (`od`)
- **Post-Build Script:** `generate-sitemap.js` runs automatically on `postbuild`, generating `public/sitemap.xml` and `public/robots.txt`.
- **Production Host:** Configured for AWS Lightsail (`nginx-asipuricircle.conf`) or Vercel static deployment.

---

## 3. Design System & Heritage Aesthetic

The portal employs a **Heritage Glassmorphism** design language inspired by Kalingan temple stone architecture, warm sandstone, and terracotta earth tones:

- **Background:** Fixed textured parchment background at `/BG.png` (`background-attachment: fixed; background-size: cover;`).
- **Core Palette Tokens (`src/index.css`):**
  - `--color-saffron` (`--color-primary`): `#E27A3F` (Primary temple saffron/amber)
  - `--color-muted-gold` (`--color-secondary`): `#C19A6B` (Warm brass/gold)
  - `--color-sandstone` (`--color-tertiary`): `#E6D8B8` (Soft sandstone)
  - `--color-ivory` (`--color-neutral`): `#F5F0E8` (Ivory background tint)
  - `--color-dark-stone`: `#2E2C29` / `#2D1810` (Deep charcoal/stone text)
  - `--color-indigo`: `#4A1C0A` (Deep terracotta for headings)
  - `--color-purple`: `#8C3310` (Warm heritage brown)
  - `--color-glass-surface`: `rgba(255, 255, 255, 0.6)` (Glass card surface)
  - `--color-glass-border`: `rgba(193, 154, 107, 0.3)` (Subtle gold border)
- **Typography:**
  - Serif headings: `"Playfair Display", Georgia, serif` (`font-serif`)
  - Sans body: `"Inter", "Noto Sans", sans-serif` (`font-sans`)
- **Micro-Interactions & Transitions:**
  - Glassmorphic card styling: `bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl`
  - Subtle saffron glows on hover: `hover:border-[var(--color-saffron)] hover:shadow-lg`
  - Respect `prefers-reduced-motion` for accessibility (configured in `index.css`).

---

## 4. Directory & File Organization

```text
asi-puri/
├── AGENTS.md                   # This project context & instructions file
├── .agents/                    # Customization root
│   └── skills/
│       └── asi-puri-portal/    # Project workflow skill
│           └── SKILL.md
├── public/                     # Static assets directly served by Vite
│   ├── BG.png                  # Background parchment texture
│   ├── asi_logo.jpg.jpeg       # Official ASI seal
│   ├── about-us/               # Official headshots (Dr. Milan Kumar Chauley, etc.)
│   ├── act-and-rules/          # Official PDFs for legislation and policies
│   ├── excavations/            # Excavation report PDFs (Barabati, Parabhadi, Ratnagiri)
│   ├── forms/                  # Word document (.docx) statutory forms (Forms I - IX)
│   ├── images/                 # CPM photography folders named '(ID) Name'
│   │   ├── representatives/    # Staff photographs
│   │   └── tickets/            # Monument thumbnails & tickets/qr/ clean QR images
│   ├── new update/             # Uploaded circulars, policy notifications, incoming reviews
│   │   └── Review_26thOct/     # Review assets (QR codes, Guide Policy, Photography Policy)
│   ├── robots.txt              # Generated postbuild
│   └── sitemap.xml             # Generated postbuild
├── src/
│   ├── App.tsx                 # Route mapping, Header/Footer wrap, Suspense loader
│   ├── main.tsx                # React root mount
│   ├── index.css               # Tailwind v4 import, CSS custom variables, keyframes
│   ├── i18n.ts                 # i18next configuration (en, hi, od)
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Nav links, mobile menu, language toggle
│   │   ├── Footer.tsx          # Quick links, office info, official emblem
│   │   ├── HeroCarousel.tsx    # Landing hero banner with Ken Burns animations
│   │   ├── HomeSearchBar.tsx   # Fast monument search filter
│   │   ├── KonarkLoader.tsx    # Animated Sun Temple wheel loading spinner
│   │   ├── LatestUpdates.tsx   # Marquee announcement ticker
│   │   ├── NewsSection.tsx     # Circulars and event cards
│   │   ├── SEO.tsx             # Helmet metadata wrapper
│   │   └── TicketBookingBanner.tsx # Homepage banner for ticketing & fast-track QR access
│   ├── data/
│   │   └── monuments.json      # Complete database of all 40 CPMs with trilingual data
│   ├── locales/                # UI translation dictionaries (en.json, hi.json, od.json)
│   └── pages/                  # Page routes
│       ├── Home.tsx            # Portal homepage
│       ├── Monuments.tsx       # 40 CPM directory with district & search filters
│       ├── MonumentDetail.tsx  # Dynamic CPM deep dive (/monuments/:id)
│       ├── AboutUs.tsx         # Circle history, administration, alphabetical sub-circles
│       ├── CircleMuseums.tsx   # 3 Site Museums: Konark, Ratnagiri, Lalitagiri
│       ├── Tickets.tsx         # Tariffs, fast-track QR ticketing, modal & guide
│       ├── ActsAndRules.tsx    # Statutory acts, rules, policies (year-wise filter)
│       ├── Forms.tsx           # Downloadable statutory Forms I-IX
│       ├── Excavations.tsx     # Excavation reports and discoveries
│       ├── Walkthrough.tsx     # 360 virtual walkthroughs
│       └── ContactUs.tsx       # Officer contact directory, office location, feedback form
├── extract_monuments.py        # Python script to ingest docx monument data
├── generate-sitemap.js         # Postbuild script for sitemap and robots.txt
├── nginx-asipuricircle.conf    # Production Nginx reverse-proxy config
└── vite.config.ts              # Vite server & build config
```

---

## 5. Domain Rules & Application Logic

### 5.1. Ticketing & Fast-Track QR Codes (`src/pages/Tickets.tsx`)
- The Circle has **5 ticketed properties**:
  1. `sun-temple-konark`: Sun Temple, Konark (₹40 offline / ₹35 online Indian; ₹600 offline / ₹550 online Foreigner) &rarr; PayGov QR
  2. `archaeological-museum-konark`: Archaeological Museum, Konark (₹10 / ₹10) &rarr; PayGov QR
  3. `buddhist-site-ratnagiri`: Buddhist Site, Ratnagiri (₹25 offline / ₹20 online Indian; ₹300 offline / ₹250 online Foreigner) &rarr; PayU QR
  4. `archaeological-museum-ratnagiri`: Archaeological Museum, Ratnagiri (₹5 / ₹5) &rarr; PayU QR
  5. `buddhist-site-lalitagiri`: Buddhist Site, Lalitagiri (₹25 offline / ₹20 online Indian; ₹300 offline / ₹250 online Foreigner) &rarr; PayGov QR
- **Advisory:** Children up to 15 years enter **free** at all sites.
- **QR Asset Sources:** Live QR codes reside in `public/new update/Review_26thOct/Ticket_QR_Codes/` and have clean fallback copies in `public/images/tickets/qr/`.
- **Card & Modal Actions:** Visitors can view the QR code in an enlarged modal, download the image (`Save QR`), or copy the direct official booking URL.
- **Home Banner Linking:** `TicketBookingBanner.tsx` links directly to each monument via hash anchors (e.g. `/tickets#sun-temple-konark`).

### 5.2. Site Museums Order (`src/pages/CircleMuseums.tsx`)
The 3 archaeological museums must always follow this strict sequence:
1. **Archaeological Museum, Konark** (`#konark-museum`)
2. **Archaeological Museum, Ratnagiri** (`#ratnagiri-museum`)
3. **Archaeological Museum, Lalitagiri** (`#lalitagiri-museum`)
All references in overview paragraphs across pages must reflect this order.

### 5.3. Sub-Circles Alphabetical Order (`src/pages/AboutUs.tsx`)
The 4 Sub-Circles must always be listed alphabetically:
1. **Cuttack Sub-Circle** (28 CPMs)
2. **Dhenkanal Sub-Circle** (8 CPMs)
3. **Konark Sub-Circle** (2 CPMs)
4. **Puri Sub-Circle** (2 CPMs)

### 5.4. Acts, Rules & Policies (`src/pages/ActsAndRules.tsx`)
- **Default Sort Order:** **Newest First** (`2018 → 1904`).
- Interactive toggle allows users to switch between newest first and oldest first.
- Filter pills support **All**, **Acts**, **Rules**, and **Policies & Guidelines**.
- Documents include:
  - *2017–2018:* Photography Policy (Gazette of India)
  - *2016:* Guidelines for Cultural Events at Protected Monuments
  - *2014:* Guide Policy 2014
  - *2011:* National Monuments Authority Rules & Amendments
  - *2010:* AMASR Act 2010 Gazette Notification
  - *1973:* Antiquities and Art Treasure Rules 1973
  - *1972:* Antiquities and Art Treasure Act 1972 (English only; Hindi copy deleted per requirements)
  - *1959:* Act Rules 1959 (AMASR Rules)
  - *1958:* AMASR Act 1958
  - *1904:* Ancient Monuments Rule 1904
  - *1904:* Ancient Monuments Preservation Act 1904

### 5.5. Monument Database (`src/data/monuments.json`)
- Array of 40 objects numbered `1` through `40`.
- Each entry contains: `id`, `name` (`en`, `hi`, `od`), `district`, `location`, `period`, `coordinates`, `protectedStatus`, `notificationDate`, `images` (array of public paths), and `description` (`en`, `hi`, `od`).
- Trilingual texts must be preserved without truncation when editing descriptions.

---

## 6. Coding & Component Conventions

1. **Naming:**
   - React components & files: **PascalCase** (`Header.tsx`, `TicketBookingBanner.tsx`, `MonumentDetail.tsx`).
   - Hooks & utilities: **camelCase** (`useTranslation`, `generate-sitemap.js`).
   - Static asset directories: lowercase or kebab-case (`public/images/tickets/qr/`).
2. **URL & Asset Safety:**
   - Always wrap file paths containing spaces or special characters in `encodeURI()` when binding to `src` or `href` (e.g. `encodeURI(doc.href)`).
   - Provide fallback `onError` handlers on image tags pointing to alternate paths if necessary.
3. **Responsive Design:**
   - Mobile-first approach using Tailwind classes (`p-4 sm:p-6 lg:p-8`).
   - Interactive elements must include accessible touch targets (`min-h-[44px]`), visible focus rings (`focus-visible:ring-2`), and descriptive `aria-label`s.
4. **State Management & Animation:**
   - Use local React state for modals and filter controls.
   - Guard modal scroll locks: set `document.body.style.overflow = 'hidden'` on open and restore on unmount/close.
   - Use `AnimatePresence` for exit animations on modals, routes, and dynamically filtered lists.

---

## 7. Verification & Build Workflow

Always test changes using the full production build pipeline:

```bash
# 1. Typecheck and build Vite application + sitemap generation
npm run build

# 2. Preview production build locally
npm run preview
```

> [!IMPORTANT]
> `npm run build` runs `tsc && vite build && node generate-sitemap.js`. Ensure TypeScript passes cleanly without any `any` casts or unhandled null checks.
