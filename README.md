# B.B.S. GROUP OF EDUCATIONAL INSTITUTES — College Website

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=flat&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=flat&logo=vite) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

## Project Description
This is the official website for B.B.S. Group of Educational Institutes, a premier institution offering 16 paramedical diploma courses, 5 counseling programs, and comprehensive educational services. The site showcases courses, faculty, admissions, events, and more, built as a modern React multi-page application.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd test2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
- Development server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Preview production build:
  ```bash
  npm run preview
  ```

### Testing
- Run tests:
  ```bash
  npm test
  ```
- Run tests with coverage:
  ```bash
  npm run test:coverage
  ```

## Usage
Navigate through the website to explore courses, faculty, admissions, and contact information. The site is responsive and optimized for both desktop and mobile devices.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
This project is private and proprietary to B.B.S. Group of Educational Institutes.

## Complete Project Folder Structure
### Tech Stack: React.js · TypeScript · EmailJS · Hardcoded CSS · Google Fonts · Vercel Deployment

---

> **Notes before reading:**
> - No two folders share the same name anywhere in the tree
> - Deployment target: **Vercel** (BrowserRouter used, no HashRouter needed)
> - Fonts loaded via **Google Fonts** link tag in `index.html` (Poppins + Merriweather)
> - All styling via **hardcoded CSS files** — no Tailwind, no CSS-in-JS
> - 16 Paramedical Diploma courses + 5 Counseling courses

---
# B.B.S. Group of Educational Institutes — Paramedical College Website

> **A production-grade, multi-page paramedical college website built with React.js, TypeScript, EmailJS, and hardcoded CSS. Deployed on Vercel.**

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Live Demo](#live-demo)
3. [Tech Stack](#tech-stack)
4. [Key Features](#key-features)
5. [Design System](#design-system)
6. [Navbar — Desktop Design Plan](#navbar--desktop-design-plan)
7. [Pages Overview](#pages-overview)
8. [Project Structure](#project-structure)
9. [Getting Started](#getting-started)
10. [Environment Variables](#environment-variables)
11. [Available Scripts](#available-scripts)
12. [EmailJS Setup](#emailjs-setup)
13. [Deployment — Vercel](#deployment--vercel)
14. [Image & Asset Guide](#image--asset-guide)
15. [CSS Architecture](#css-architecture)
16. [Data Layer](#data-layer)
17. [Custom Hooks](#custom-hooks)
18. [Form System](#form-system)
19. [Testing](#testing)
20. [Important Constants to Update Before Go-Live](#important-constants-to-update-before-go-live)
21. [Known Limitations](#known-limitations)
22. [Contributing](#contributing)
23. [License](#license)

---

## About the Project

This is the official website for **B.B.S. Group of Educational Institutes**, a paramedical college in Uttar Pradesh, India affiliated with the **UP Paramedical Council, Lucknow** and recognised by the **Ministry of Health & Family Welfare, Government of India**.

The website serves as the primary digital presence for the institute, covering:

- Information about all **16 paramedical diploma courses** offered directly by the institute
- Admission guidance for **5 counseling-based courses** (D.Pharma, ANM, GNM, BSc Nursing, BAMS)
- Online enquiry and admission forms powered by **EmailJS**
- Faculty directory, campus gallery, notice board, results links, and alumni network
- Full **SEO meta tags** per page using `react-helmet-async`
- **Scroll-triggered animations** using `IntersectionObserver` via custom hooks
- **Animated stat counters** that count up when they scroll into view
- Responsive layout that works on mobile, tablet, and desktop

---

## Live Demo

> **Production URL:** `(https://college-eight-lovat.vercel.app/)` 

---

## Tech Stack

| Category | Technology |
|---|---|
| **UI Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **Routing** | React Router DOM v6 (BrowserRouter) |
| **Styling** | Hardcoded CSS — no Tailwind, no CSS-in-JS |
| **Fonts** | Google Fonts — Poppins, Merriweather, Roboto Condensed |
| **Email / Forms** | EmailJS (`@emailjs/browser`) |
| **SEO** | `react-helmet-async` |
| **Testing** | Vitest + `@testing-library/react` |
| **Deployment** | Vercel (with SPA rewrite rule) |
| **Analytics** | Google Analytics 4 (optional) + Vercel Analytics |
| **Linting** | ESLint + Prettier |

### Why Hardcoded CSS?

This project deliberately avoids utility-first CSS frameworks (Tailwind) and CSS-in-JS libraries. Every page and component has its own scoped CSS file located in `src/styles/`. This approach was chosen because:

- The institute's IT staff should be able to edit styles without learning a framework
- CSS files are human-readable and easy to maintain
- Zero dependency on third-party CSS tooling — the project will not break if a package is deprecated
- Full control over every pixel, animation, and responsive breakpoint

---

## Key Features

### Courses

- **16 Paramedical Diploma Courses** — each with a dedicated detail page at `/courses/:slug`
- Dynamic routing — each course has a unique slug generated from its title (e.g. `/courses/diploma-in-medical-lab-technician`)
- Per-course: overview, semester-wise syllabus accordion, eligibility criteria, fee table, career scope, related courses, and an inline enquiry form
- **5 Counseling Programs** — displayed with distinct card styling to differentiate from direct-admission courses

### Admissions

- Step-by-step admission process guide
- Eligibility criteria table per stream
- Important dates calendar
- Documents checklist
- Complete fee structure table for all 16 courses
- Scholarship information (UP Government + institute merit)
- Downloadable PDF links (prospectus, admission form, fee structure)
- EmailJS-powered admission enquiry form

### Faculty

- Full faculty directory split by department (Basic Science / Clinical / Administration)
- Filter tabs: All / Basic Science / Clinical / Admin
- HOD spotlight row at the top
- Click-to-expand faculty profile modal with qualifications, experience, and bio

### Gallery

- Masonry photo grid with category filter tabs
- Categories: All / Annual Day / Sports / Cultural / Convocation / Workshops
- Fullscreen lightbox with previous/next navigation
- Embedded YouTube video section

### Notifications & Results

- Notice board with pinned notices, NEW badges, category tags, and expiry date logic
- Results page with redirect links to UP Paramedical Council results portal

### Alumni

- Stat counter highlights (years, courses, students, placement rate)
- Alumni testimonial cards
- Alumni registration form (EmailJS-powered)

### Contact

- Contact info cards (address, phone, email, hours)
- Full EmailJS contact form
- Google Maps iframe embed
- Social media links (Facebook, Instagram, YouTube, WhatsApp)

### Performance & UX

- All images use `.webp` format for optimal size
- `LazyLoadImage` component with blur-up placeholder using `IntersectionObserver`
- `useRevealOnScroll` hook for scroll-triggered section reveal animations
- `useCountUpOnView` hook for animated stat counters
- `RouteScrollReset` resets scroll position on every route change
- `GlobalErrorBoundary` catches runtime errors gracefully
- Cookie consent bar (GDPR-lite)
- Back-to-top floating action button

---

## Design System

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--color-primary` | `#1B4F72` | Navy blue — headings, buttons, links |
| `--color-accent` | `#E67E22` | Saffron orange — highlights, badges, CTAs |
| `--color-navy` | `#0D2137` | Deep navy — hero text, footers |
| `--color-white` | `#FFFFFF` | Card backgrounds, navbar |
| `--color-bg-alt` | `#F7F9FC` | Section alternating background |
| `--color-text` | `#2D3748` | Body text |
| `--color-text-muted` | `#718096` | Secondary text, subtitles |
| `--color-border` | `#E2E8F0` | Card borders, dividers |

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-primary` | `Poppins` | Headings, nav links, buttons, labels |
| `--font-body` | `Roboto Condensed` | Body text, paragraphs, form fields |
| `--font-serif` | `Merriweather` | Quotes, principal/chairman messages |

### Spacing Scale

```
--spacing-xs:  0.25rem   (4px)
--spacing-sm:  0.5rem    (8px)
--spacing-md:  1rem      (16px)
--spacing-lg:  1.5rem    (24px)
--spacing-xl:  2rem      (32px)
--spacing-2xl: 3rem      (48px)
```

### Border Radius

```
--radius-sm:  4px
--radius-md:  8px
--radius-lg:  12px
--radius-xl:  16px
```

---

## Navbar — Desktop Design Plan

The desktop navigation bar (`TopNavbar`) was designed with the following visual and functional specification:

### Layout

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  [BBS Logo]  B.B.S. Group of Educational Institutes     Home  About  Courses ▾  │
│              Paramedical College · UP                   Admissions  Faculty      │
│                                                         Gallery  Contact  [Apply]│
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Sticky Behaviour

- The navbar is **sticky** (`position: sticky; top: 0`) so it stays visible while scrolling
- On scroll down past **80px**, a **soft box-shadow** appears beneath the navbar (`--shadow-md`) via the `useNavbarShadow` hook, creating a floating effect without changing the navbar's height or background
- Background is solid white at all times — no transparency or blur on desktop

### Brand (Left Side)

- **BBS logo SVG** — colored version (`bbs-logo-colored.svg`) — 48×48px, links to `/`
- Next to the logo: two lines of text
  - Line 1: `B.B.S. Group of Educational Institutes` — Poppins SemiBold 15px, `--color-navy`
  - Line 2: `Paramedical College · Uttar Pradesh` — Roboto Condensed Regular 12px, `--color-text-muted`

### Navigation Links (Center-Right)

Seven nav links displayed horizontally with `gap: 2rem`:

```
Home   About   Courses ▾   Admissions   Faculty   Gallery   Contact
```

- Font: Poppins Medium 14px
- Color: `--color-text` by default
- On hover: color changes to `--color-primary` (navy) with a `0.2s` transition
- **Active link** (current page): color `--color-primary` + a 2px bottom border in `--color-accent` (saffron orange)
- No underlines — the bottom border accent is the only active indicator

### Courses Dropdown (`NavDropdownMenu`)

The **Courses** link has a chevron `▾` and opens a **hover dropdown** on desktop:

```
┌─────────────────────────────────────────────────────────┐
│  🔬 Lab Technology      🩻 Medical Imaging              │
│  👁 Ophthalmic          ⚡ Neuro & Cardiac              │
│  🦷 Dental & Ortho      🏥 General Clinical             │
│                                                          │
│  ── Counseling Courses ──────────────────────────────── │
│  D.Pharma · ANM · GNM · BSc Nursing · BAMS             │
│                                                          │
│  → View All Courses                                      │
└─────────────────────────────────────────────────────────┘
```

- The dropdown appears on `mouseenter` with a `0.2s` fade-in + 4px upward slide animation
- It disappears on `mouseleave` with a small delay (`150ms`) so the user can move their cursor into the dropdown without it closing
- Two columns of diploma categories, each linking to `/courses` with the appropriate filter pre-selected
- A separator line then lists the 5 counseling program names as small text links
- A "View All Courses" link at the bottom in `--color-accent`
- Dropdown has `border-radius: 12px`, `box-shadow: --shadow-lg`, and a subtle 1px `--color-border` border
- An arrow/notch at the top of the dropdown pointing to the "Courses" link

### Apply Now Button (Far Right)

A **filled CTA button** at the far right of the navbar:

- Text: `Apply Now`
- Background: `--color-accent` (saffron `#E67E22`)
- Text color: white
- Border radius: `--radius-md` (8px)
- Padding: `0.5rem 1.25rem`
- Font: Poppins SemiBold 13px
- On hover: background darkens to `#D35400`, slight `transform: translateY(-1px)` lift
- Links to `/admissions`

### Mobile Behaviour (below 768px)

- All nav links are hidden
- A **hamburger icon button** appears at the far right (3 horizontal lines, `--color-navy`)
- Clicking the hamburger slides in a **full-height off-canvas drawer** from the right side
- The drawer has a dark overlay (`rgba(0,0,0,0.5)`) behind it
- Inside the drawer: logo, all nav links stacked vertically with 1px border separators, and the Apply Now button at the bottom
- The Courses section in mobile shows all course categories as an accordion expand/collapse
- Clicking any link closes the drawer automatically

### Announcement Strip (Below Navbar)

Just below the navbar on certain pages there is a **marquee announcement ticker** (`MarqueeAnnouncement`) — a thin strip in `--color-primary` background showing pinned notices scrolling from right to left. It has a "🔔 Latest:" prefix label and the scrolling text contains the current pinned notices from `site-announcements.ts`.

---

## Pages Overview

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Hero slider, stats, featured courses, why choose us, campus preview, testimonials, events, admission CTA |
| `/about` | AboutPage | Institute overview, vision/mission, timeline, chairman message, principal message, governing body, recognitions, infrastructure, affiliation |
| `/courses` | CoursesPage | Filter bar + all 16 diploma cards + 5 counseling cards |
| `/courses/:slug` | CourseDetailPage | Full course detail — syllabus, fees, eligibility, career scope, enquiry form |
| `/admissions` | AdmissionsPage | Process steps, eligibility, key dates, documents checklist, fee structure, scholarships, FAQ, enquiry form |
| `/faculty` | FacultyPage | HOD spotlight + faculty grid with filter + profile modal |
| `/gallery` | GalleryPage | Photo masonry grid with filter + lightbox + YouTube videos |
| `/contact` | ContactPage | Info cards, contact form, Google Maps embed, social links |
| `/notifications` | NotificationsPage | Full notice board archive |
| `/results` | ResultsPage | Links to UP Paramedical Council results portal |
| `/alumni` | AlumniPage | Stat highlights, testimonial stories, alumni registration form |
| `*` | NotFoundPage | Custom 404 with back-home button |

---

## Project Structure

> *(Add your folder tree here)*

---

## Getting Started

### Prerequisites

- Node.js **18+** (LTS recommended)
- npm 9+ or yarn 1.22+
- A free [EmailJS](https://emailjs.com) account
- A free [Vercel](https://vercel.com) account (for deployment)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/bbs-college-website.git
cd bbs-college-website

# 2. Install dependencies
npm install

# 3. Copy the example environment file
cp .env.example .env

# 4. Fill in your EmailJS keys in .env (see Environment Variables section)

# 5. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### First-Time Setup Checklist

- [ ] Fill in all `.env` variables (see [Environment Variables](#environment-variables))
- [ ] Replace placeholder institute details in `src/constants/institute.constants.ts`
- [ ] Replace `[Chairman Name]`, `[Director Name]`, `[Principal Name]` in constants and data files
- [ ] Replace phone numbers and address in `src/constants/institute.constants.ts`
- [ ] Add the Google Maps embed URL in `CONTACT_DETAILS.mapEmbedUrl`
- [ ] Replace YouTube video IDs in `src/pages/GalleryPage/YoutubeVideosBlock.tsx`
- [ ] Add all `.webp` image files to the correct folders under `public/static-assets/images/`
- [ ] Add your SVG logo files under `public/static-assets/brand-logos/`

---

## Environment Variables

Create a `.env` file in the project root by copying `.env.example`:

```bash
cp .env.example .env
```

Then fill in the values:

```env
# EmailJS — get these from https://dashboard.emailjs.com
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_CONTACT=your_contact_form_template_id
VITE_EMAILJS_TEMPLATE_ADMISSION=your_admission_form_template_id
VITE_EMAILJS_TEMPLATE_DIPLOMA_ENQUIRY=your_diploma_enquiry_template_id
VITE_EMAILJS_TEMPLATE_ALUMNI=your_alumni_registration_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Google Maps — get from Google Cloud Console
VITE_GOOGLE_MAPS_EMBED_KEY=your_google_maps_api_key

# Google Analytics 4 (optional)
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Important:** Never commit your `.env` file to Git. It is already listed in `.gitignore`. On Vercel, add all these variables under **Project → Settings → Environment Variables**.

---

## Available Scripts

```bash
# Start development server (hot module reload)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run coverage

# Lint the codebase
npm run lint

# Fix lint errors automatically
npm run lint:fix

# Type-check without emitting files
npm run typecheck
```

---

## EmailJS Setup

This project uses [EmailJS](https://www.emailjs.com/) to send form submissions directly from the browser — no backend server required.

### Step 1 — Create an EmailJS Account

Sign up at [emailjs.com](https://www.emailjs.com/) (free tier allows 200 emails/month).

### Step 2 — Add an Email Service

In the EmailJS dashboard → **Email Services** → **Add New Service**. Connect your Gmail, Outlook, or any SMTP provider. Note down the **Service ID**.

### Step 3 — Create Four Email Templates

You need four templates — one for each form:

| Template | Form | Key Variables |
|---|---|---|
| Contact Form | `MainContactForm` | `from_name`, `from_email`, `phone`, `subject`, `message` |
| Admission Enquiry | `AdmissionFormSection` | `student_name`, `email`, `phone`, `course_interested`, `session`, `qualification`, `percentage` |
| Diploma Enquiry | `DiplomaEnquiryWidget` | `from_name`, `from_email`, `phone`, `course_title`, `message` |
| Alumni Registration | `AlumniConnectForm` | `full_name`, `email`, `phone`, `course_completed`, `pass_out_year`, `current_organisation`, `city` |

For each template, use `{{variable_name}}` syntax in the EmailJS template editor.

### Step 4 — Get Your Public Key

In the EmailJS dashboard → **Account** → **Public Key**. Copy it to `VITE_EMAILJS_PUBLIC_KEY`.

### Step 5 — Add All IDs to `.env`

Fill in all `VITE_EMAILJS_*` values in your `.env` file and in Vercel environment variables.

---

## Deployment — Vercel

This project is configured for **Vercel** deployment with a single `vercel.json` config file at the project root.

### vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This single rule ensures all routes (e.g. `/courses/diploma-in-mlt`) serve `index.html` and let React Router handle client-side routing. Without this, refreshing any page other than `/` would return a 404 from Vercel.

### Deploying

**Option 1 — Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel --prod
```

**Option 2 — GitHub Integration (Recommended):**

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo
3. Vercel auto-detects Vite — no build settings need to be changed
4. Add all environment variables under **Project → Settings → Environment Variables**
5. Every push to `main` will trigger an automatic deployment

### GitHub Actions (CI/CD)

The `.github/workflows/vercel-deploy.yml` workflow automatically deploys to Vercel on every push to `main`. The `.github/workflows/lint-typecheck.yml` workflow runs ESLint and TypeScript checks on every pull request.

---

## Image & Asset Guide

All static images live under `public/static-assets/images/`. They are served at runtime from the root URL.

**All images must be in `.webp` format** for optimal performance. You can convert existing JPG/PNG files using:

```bash
# Using cwebp (install via: brew install webp / apt install webp)
cwebp input.jpg -o output.webp -q 80
```

### Image Folder Map

| Folder | Images | Count |
|---|---|---|
| `hero-slides/` | Slider images for homepage hero | 5 |
| `about-page/` | Building, chairman, director, principal, history | 10 |
| `paramedical-courses/` | Thumbnail for each of the 16 diploma courses | 16 |
| `counseling-courses/` | Thumbnail for each of the 5 counseling programs | 5 |
| `faculty-science-dept/` | Faculty photos — basic science department | 6 |
| `faculty-clinical-dept/` | Faculty photos — clinical departments | 8 |
| `faculty-admin-dept/` | Admin staff photos | 4 |
| `photo-gallery/annual-day-event/` | Annual day event photos | 4 |
| `photo-gallery/sports-event/` | Sports day photos | 3 |
| `photo-gallery/cultural-event/` | Cultural fest photos | 3 |
| `photo-gallery/convocation-event/` | Convocation ceremony photos | 2 |
| `photo-gallery/workshop-event/` | Workshop photos | 3 |
| `campus-infrastructure/` | Labs, library, auditorium, ground | 11 |
| `achievements-section/` | Award and topper photos | 4 |
| `alumni-testimonials/` | Alumni portrait photos | 4 |
| `open-graph/` | Social share preview image | 1 |

**Total: 89 `.webp` images + 6 `.svg` logos + 2 `.png` PWA icons = 97 assets**

### Asset Path Helper

All image paths are resolved through `src/utils/asset-path-resolver.ts`. Never hardcode image paths directly in components — always use the resolver functions:

```ts
import { getCourseImage, getFacultyImage, getAlumniImage } from '@/utils/asset-path-resolver'

// Correct
const src = getCourseImage('diploma-mlt.webp')

// Wrong — do not do this
const src = '/static-assets/images/paramedical-courses/diploma-mlt.webp'
```

This ensures paths work correctly on both local development and Vercel deployment.

---

## CSS Architecture

Styles are split into four categories under `src/styles/`:

```
src/styles/
├── base/
│   ├── reset.css             ← Browser reset, box-sizing
│   ├── root-variables.css    ← All CSS custom properties (:root)
│   └── typography-base.css   ← Font families, sizes, line-heights
├── layout/
│   ├── navbar.css            ← TopNavbar and scroll shadow
│   ├── footer-layout.css     ← SiteFooter grid
│   ├── page-wrapper.css      ← .page-wrapper max-width and centering
│   └── grid-system.css       ← Reusable .grid-2, .grid-3, .grid-4 classes
├── pages/                    ← One CSS file per page
│   ├── home-page.css
│   ├── about-page.css
│   └── ... (12 files total)
├── components/               ← One CSS file per component category
│   ├── cards.css
│   ├── buttons.css
│   ├── forms.css
│   └── ... (16 files total)
└── animations/
    ├── keyframes.css          ← @keyframes: fadeIn, slideUp, pulse, spin
    ├── reveal-transitions.css ← .reveal-up, .reveal-left, .reveal-right classes
    └── hover-effects.css      ← Card hover lift, button hover states
```

### CSS Import Order in `main.tsx`

Base styles are imported globally in `main.tsx`. Page and component CSS files are imported directly inside their respective component files.

```tsx
// main.tsx — global imports
import './styles/base/reset.css'
import './styles/base/root-variables.css'
import './styles/base/typography-base.css'
import './styles/animations/keyframes.css'
import './styles/animations/reveal-transitions.css'
import './styles/animations/hover-effects.css'
```

```tsx
// src/pages/AboutPage/index.tsx — page-specific import
import '../../styles/pages/about-page.css'
```

---

## Data Layer

All content data lives in `src/data/` as typed TypeScript objects. Nothing is fetched from an API — all data is bundled at build time.

### Course Data

The 16 diploma courses are split across 6 files by clinical specialty:

| File | Courses |
|---|---|
| `lab-technology.data.ts` | MLT, Dialysis, MRI, CT, Cath Lab (5) |
| `imaging-courses.data.ts` | Radiography, X-Ray & ECG (2) |
| `ophthalmic-courses.data.ts` | Ophthalmic, Optometry & CL, Contact Lens (3) |
| `neuro-cardiac.data.ts` | Clinical Neuro Technology (1) |
| `dental-ortho.data.ts` | Dental Hygiene, Ortho Technician (2) |
| `general-clinical.data.ts` | CMS & ED, Critical Care, Medical Assistant (3) |

All 16 are combined and exported from `src/data/paramedical-courses/index.ts` as `ALL_DIPLOMAS`.

### Updating Content

To update any content, edit the relevant data file — no code changes needed in components.

- **Add a new notice:** Edit `src/data/site-announcements.ts`
- **Update fee structure:** Edit the relevant course file in `src/data/paramedical-courses/`
- **Add a faculty member:** Edit `src/data/faculty-members/basic-science.faculty.ts` or `clinical-dept.faculty.ts`
- **Add gallery images:** Add the `.webp` file and add an entry in the relevant `src/data/gallery-media/` file

---

## Custom Hooks

| Hook | Purpose |
|---|---|
| `useRevealOnScroll` | Returns a `ref` and `className` — attaches an `IntersectionObserver` that adds `.revealed` class when element enters viewport. Child elements with `.reveal-up`, `.reveal-left`, `.reveal-right` classes animate in. |
| `useNavbarShadow` | Returns `hasShadow` boolean — true when page is scrolled more than 80px. Used to toggle the navbar's box-shadow. |
| `useCountUpOnView` | Attaches to a `<span>` ref — counts up from 0 to the target value over a given duration when the element enters the viewport. Used in stat counter sections. |
| `useModalControl<T>` | Generic hook for open/close modal state + selected item. Locks body scroll when modal is open. |
| `useDiplomaFilter` | Manages `activeTab` and `searchQuery` state. Returns `filteredDiplomas` and `filteredCounseling` arrays. |
| `useFacultyFilter` | Manages `activeDept` state. Returns filtered `FacultyMember[]` array. |
| `useGalleryFilter` | Manages `activeCategory` state. Returns filtered `GalleryImage[]` array. |
| `useBreakpoint` | Returns `isMobile` and `isTablet` booleans based on window width using `matchMedia`. |
| `useEmailSubmit` | Wraps any `sendXxx` function from `emailjs-service.ts`. Returns `{ status, submit }` — handles `idle → submitting → success/error` state transitions. |

---

## Form System

All four forms use the same pattern:

1. **Local state** holds form field values
2. **Manual validation** via `src/utils/form-validators.ts` runs on submit
3. **`useEmailSubmit`** hook calls the relevant `sendXxx` function from `src/services/emailjs-service.ts`
4. **Success/error state** is shown inline — no page navigation

### Forms in the Project

| Form | Location | EmailJS Template |
|---|---|---|
| Contact Form | `ContactPage/MainContactForm.tsx` | `TEMPLATE_CONTACT` |
| Admission Enquiry | `AdmissionsPage/AdmissionFormSection.tsx` | `TEMPLATE_ADMISSION` |
| Course Enquiry | `CourseDetailPage/DiplomaEnquiryWidget.tsx` | `TEMPLATE_DIPLOMA_ENQ` |
| Alumni Registration | `AlumniPage/AlumniConnectForm.tsx` | `TEMPLATE_ALUMNI` |

---

## Testing

Tests are written using **Vitest** and **@testing-library/react**.

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage report (output in /coverage)
npm run coverage
```

### Test Structure

```
src/__tests__/
├── component-tests/      ← DiplomaCard, MainContactForm, TopNavbar
├── hook-tests/           ← useDiplomaFilter, useEmailSubmit
├── util-tests/           ← slugify, diploma-filter
└── page-tests/           ← HomePage, CourseDetailPage
```

### Testing Philosophy

- **Component tests** focus on what the user sees and interacts with — not implementation details
- **Hook tests** use `renderHook` to test state transitions in isolation
- **Util tests** are pure unit tests — input in, expected output out
- **Page tests** mock all child sections and verify the composition is correct
- No snapshot tests — they break too often and add noise without value

---

## Important Constants to Update Before Go-Live

The following placeholders **must be replaced** with real values before the site goes live:

### `src/constants/institute.constants.ts`

```ts
chairman:  'Shri [Chairman Name]',   // ← Replace
director:  'Dr. [Director Name]',    // ← Replace
principal: 'Dr. [Principal Name]',   // ← Replace
```

```ts
export const CONTACT_DETAILS = {
  address:     '[Full Address], Uttar Pradesh, India',  // ← Replace
  phone:       ['+91-XXXXXXXXXX', '+91-XXXXXXXXXX'],    // ← Replace
  email:       ['admissions@bbsinstitute.ac.in', ...],  // ← Replace
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=YOUR_EMBED_URL', // ← Replace
}
```

### `src/pages/GalleryPage/YoutubeVideosBlock.tsx`

```ts
const VIDEO_IDS = ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2']  // ← Replace
```

### `src/pages/AboutPage/GoverningBody.tsx`

Replace all `'Shri [Member Name]'` placeholder strings with actual governing body member names.

### `.env`

All `VITE_EMAILJS_*` variables must be set. See [Environment Variables](#environment-variables).

### Social Media Links — `src/data/social-media-links.ts`

```ts
{ platform: 'facebook',  url: 'https://www.facebook.com/bbsinstitute' }  // ← Replace
{ platform: 'instagram', url: 'https://www.instagram.com/bbsinstitute' } // ← Replace
{ platform: 'youtube',   url: 'https://www.youtube.com/@bbsinstitute' }  // ← Replace
{ platform: 'whatsapp',  url: 'https://wa.me/91XXXXXXXXXX' }             // ← Replace
```

---

## Known Limitations

- **No backend or CMS** — all content is hardcoded in TypeScript data files. Adding a new course or notice requires editing a `.ts` file and redeploying.
- **EmailJS free tier** allows 200 emails/month. If form submissions exceed this, upgrade to a paid EmailJS plan or switch to a serverless backend (Vercel Functions + Nodemailer).
- **No authentication** — the site is entirely public. There is no admin panel.
- **No hostel data** — the institute does not have on-campus hostel facilities, so no hostel section is included.
- **Images must be manually optimised** — there is no image CDN. All `.webp` files must be optimised before being placed in the `public/` directory.
- **Results page links externally** — actual exam results are hosted on the UP Paramedical Council website. The results page only provides redirect links.

---

## Contributing

This project was built for B.B.S. Group of Educational Institutes. External contributions are not currently accepted. For bug reports or feature requests, please contact the institute's IT team directly.

If you are a developer working on this project:

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run lint and tests: `npm run lint && npm run test`
4. Run type check: `npm run typecheck`
5. Commit with a clear message: `git commit -m "feat: add scholarship filter to admissions page"`
6. Push and open a pull request against `main`

### Commit Message Convention

```
feat:     New feature
fix:      Bug fix
style:    CSS/style changes only
refactor: Code restructure, no feature/fix
data:     Update to data files (courses, faculty, etc.)
docs:     README or comment updates
test:     Test additions or changes
chore:    Build scripts, dependency updates
```

---

## License

This project is proprietary software developed for **B.B.S. Group of Educational Institutes**. All rights reserved. Unauthorised copying, modification, or distribution of this code is prohibited.

---

*Built with React.js · TypeScript · EmailJS · Hardcoded CSS · Deployed on Vercel*

*B.B.S. Group of Educational Institutes — Shaping Paramedical Professionals for a Healthier Nation*
