---
name: asi-puri-portal
description: >-
  Comprehensive guide and domain runbook for developing, maintaining, and updating the Archaeological Survey of India (ASI) Puri Circle official web portal. Use whenever adding or editing monuments, museums, sub-circles, entry ticket QR codes, acts and rules, application forms, or multilingual content (English, Hindi, Odia).
---

# ASI Puri Circle Web Portal Skill

This skill provides step-by-step procedures, domain context, conventions, and operational runbooks for developing and maintaining the official web portal of the **Archaeological Survey of India (ASI), Puri Circle**.

---

## Quick Reference & Key Project Facts

- **Official Name:** Archaeological Survey of India, Puri Circle
- **Creation Date:** November 9, 2022 (Notification No. `J-11014/3/2023-Planning`)
- **Parent Body:** Ministry of Culture, Government of India
- **Territory:** 15 districts of Odisha
- **Key Assets:**
  - 40 Centrally Protected Monuments (CPMs)
  - 1 UNESCO World Heritage Site: Sun Temple, Konark (Black Pagoda)
  - 1 Nationally Revered Shrine: Shri Jagannath Temple, Puri
  - 4 Sub-Circles (Strictly Alphabetical): **Cuttack**, **Dhenkanal**, **Konark**, **Puri**
  - 3 Site Museums (Strict Sequence): **Konark**, **Ratnagiri**, **Lalitagiri**
  - 5 Ticketed Sites with Fast-Track QR codes & Cashless Discounts (Save ₹5–₹50)
  - Children up to 15 years: **Free admission** across all sites

---

## Tech Stack & Architecture

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | React 19 + TypeScript 5 | Strict typing, client-side routing |
| **Bundler** | Vite 5 | Port `5180`, code splitting via `React.lazy` |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/vite`, theme in `src/index.css` |
| **Icons** | `lucide-react` | Tree-shakeable SVG icons |
| **Motion** | `framer-motion` | Page transitions, modals, tickers |
| **SEO** | `react-helmet-async` | Titles, descriptions, canonical tags |
| **Images** | `@unpic/react` | High-efficiency responsive image tags |
| **i18n** | `i18next` + `react-i18next` | English (`en`), Hindi (`hi`), Odia (`od`) |
| **Postbuild** | Node.js script | `generate-sitemap.js` builds `sitemap.xml` & `robots.txt` |

---

## Standard Runbooks

### Runbook 1: Managing Monuments & CPM Data

The master database of all 40 CPMs resides in [`src/data/monuments.json`](file:///Users/aarivpattnaik/Projects/Antigravity/asi-puri/src/data/monuments.json).

#### Data Schema
```typescript
interface Monument {
  id: number;                          // 1 through 40
  name: {
    en: string;
    hi: string;
    od: string;
  };
  district: string;                    // e.g. "Puri", "Jajpur", "Cuttack"
  location: string;                    // Locality or village name
  period: string;                      // e.g. "13th Century CE", "Ganga Dynasty"
  coordinates: string;                 // Latitude & Longitude
  protectedStatus: string;             // Central Protection Status
  notificationDate: string;            // Official Gazette Notification Date
  images: string[];                    // Paths relative to public/
  description: {
    en: string;
    hi: string;
    od: string;
  };
}
```

#### Steps to Update Monument Data:
1. Locate the monument by its `id` in `src/data/monuments.json`.
2. Keep all 3 language blocks (`en`, `hi`, `od`) in sync.
3. If new images are added, place them in `public/images/(ID) FolderName/` and reference them with leading forward slashes: `/images/...`.
4. Test that `src/pages/Monuments.tsx` and `src/pages/MonumentDetail.tsx` render without broken image links or undefined text.

---

### Runbook 2: Ticketing, Tariffs & Fast-Track QR Codes

Ticketing logic is implemented in [`src/pages/Tickets.tsx`](file:///Users/aarivpattnaik/Projects/Antigravity/asi-puri/src/pages/Tickets.tsx) and previewed in [`src/components/TicketBookingBanner.tsx`](file:///Users/aarivpattnaik/Projects/Antigravity/asi-puri/src/components/TicketBookingBanner.tsx).

#### 5 Ticketed Monuments & Gateways
| ID | Slug | Site Name | Counter Fee (Ind/For) | Online Fee (Ind/For) | Gateway |
| :-- | :--- | :--- | :--- | :--- | :--- |
| 1 | `sun-temple-konark` | Sun Temple, Konark | ₹40 / ₹600 | ₹35 / ₹550 | PayGov |
| 2 | `archaeological-museum-konark` | Archaeological Museum, Konark | ₹10 / ₹10 | ₹10 / ₹10 | PayGov |
| 3 | `buddhist-site-ratnagiri` | Buddhist Site, Ratnagiri | ₹25 / ₹300 | ₹20 / ₹250 | PayU |
| 4 | `archaeological-museum-ratnagiri`| Archaeological Museum, Ratnagiri | ₹5 / ₹5 | ₹5 / ₹5 | PayU |
| 5 | `buddhist-site-lalitagiri` | Buddhist Site, Lalitagiri | ₹25 / ₹300 | ₹20 / ₹250 | PayGov |

#### Updating or Adding QR Codes:
1. Store clean source image in `public/images/tickets/qr/<slug>.jpeg` and raw copies in `public/new update/Review_26thOct/Ticket_QR_Codes/`.
2. In `src/pages/Tickets.tsx`:
   - Point `qrCode` to the primary path (using `encodeURI()` if spaces exist).
   - Point `qrCodeClean` to `/images/tickets/qr/<slug>.jpeg`.
   - Update `bookingUrl` to the decoded gateway URL.
3. Keep `TicketBookingBanner.tsx` on the Home page synchronized with any slug or pricing changes.
4. Ensure hash anchor navigation works (e.g. `/tickets#sun-temple-konark`).

---

### Runbook 3: Acts, Rules, Policies & Gazette Notifications

Document registry is managed in [`src/pages/ActsAndRules.tsx`](file:///Users/aarivpattnaik/Projects/Antigravity/asi-puri/src/pages/ActsAndRules.tsx).

#### Requirements & Rules:
- **Default Sort Order:** **Newest First** (`2018 → 1904`).
- **Category Filter Pills:** All Documents, Acts, Rules, Policies & Guidelines.
- **Language Policy:** Keep English/Bilingual official acts. The Hindi translation of the 1972 Act has been removed as per editorial direction.
- **Asset Storage:** Store PDF copies in `public/act-and-rules/` and link to them with clean, lowercase filenames. If files are uploaded with spaces in `public/new update/`, always use `encodeURI()` for links.

#### Adding a New Policy or Rule Letter:
```typescript
{
  id: "my-policy-2024",
  title: "Title of Gazette / Policy",
  subtitle: "Brief explanatory summary of the regulation or circular.",
  href: "/new update/.../filename.pdf",
  fallbackHref: "/act-and-rules/filename.pdf",
  category: "Policy", // 'Act' | 'Rule' | 'Policy'
  year: "2024",
  yearValue: 2024,
  size: "1.2 MB",
  isNew: true
}
```

---

### Runbook 4: Museums & Sub-Circles Ordering

#### Site Museums (`src/pages/CircleMuseums.tsx`):
Must strictly preserve the following order:
1. **Archaeological Museum, Konark** (`#konark-museum`)
2. **Archaeological Museum, Ratnagiri** (`#ratnagiri-museum`)
3. **Archaeological Museum, Lalitagiri** (`#lalitagiri-museum`)

#### Sub-Circles (`src/pages/AboutUs.tsx`):
Must strictly preserve **alphabetical order**:
1. **Cuttack Sub-Circle** (28 CPMs)
2. **Dhenkanal Sub-Circle** (8 CPMs)
3. **Konark Sub-Circle** (2 CPMs)
4. **Puri Sub-Circle** (2 CPMs)

---

### Runbook 5: Internationalization (i18n)

Localization files are in `src/locales/`:
- `en.json` (English)
- `hi.json` (Hindi)
- `od.json` (Odia)

#### Rules:
1. When adding a new UI string, add the key in **all three files** (`en.json`, `hi.json`, `od.json`).
2. Maintain natural Odia and Hindi phrasing appropriate for Government cultural publications.
3. Access translations in components using:
   ```typescript
   const { t } = useTranslation();
   return <h1>{t('section.key_name')}</h1>;
   ```

---

## Build, Test & Verification Commands

```bash
# Install dependencies
npm install

# Start development server on port 5180
npm run dev

# Full production build (tsc + vite build + sitemap generator)
npm run build

# Preview production build locally
npm run preview
```

### Verification Checklist:
- [ ] `npm run build` succeeds with **0 errors**.
- [ ] `public/sitemap.xml` and `public/robots.txt` are re-generated.
- [ ] No unencoded spaces in image/file paths.
- [ ] Mobile navigation and focus rings operate cleanly.
- [ ] All modals handle keyboard `Escape` and backdrop clicks.
