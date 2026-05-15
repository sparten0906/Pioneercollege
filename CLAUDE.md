# PIONEER COLLEGE — Project Guide

## Project Overview

A React + TypeScript single-page application for **PIONEER COLLEGE**, a paramedical institute in Uttar Pradesh. Built with Vite, React Router, and EmailJS for form submissions.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Routing**: React Router DOM v7
- **Forms**: EmailJS (`@emailjs/browser`) — no backend required
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier

## Common Commands

```bash
npm run dev          # Start dev server
npm run build        # TypeScript check + production build
npm run lint         # ESLint
npm run test         # Run tests once
npm run test:watch   # Watch mode
npm run preview      # Preview production build locally
```

## Project Structure

```
src/
├── components/         # Shared reusable components
│   ├── form-fields/    # All form components (AdmissionEnquiryForm, AlumniSignupForm, DiplomaEnquiryForm, MainContactForm)
│   ├── layout-shell/   # TopNavbar, SiteFooter, SiteLayout
│   └── ...             # Cards, badges, modals, etc.
├── constants/
│   ├── institute.constants.ts   # PRIMARY: College name, contact details, social links
│   ├── seo-defaults.constants.ts
│   └── dept-categories.constants.ts
├── data/               # Static content (courses, faculty, alumni, events, gallery)
├── pages/              # Page-level components (one folder per route)
├── hooks/              # Custom React hooks
├── utils/              # Validators, asset path helpers
├── styles/             # Global CSS and per-component/page CSS
├── types/              # Shared TypeScript types
└── context/            # React context (Theme, Notice)
```

## College Name — Single Source of Truth

All institute name references flow from **`src/constants/institute.constants.ts`**:

```ts
export const INSTITUTE = {
  name: 'PIONEER COLLEGE',
  shortName: 'PIONEER COLLEGE',
  abbreviation: 'PIONEER',
  ...
}
```

When changing the college name, update `institute.constants.ts` first. Then grep for any hardcoded strings (e.g. `"BBS"`, `"B.B.S."`) that are not driven by the constant.

## Forms

There are four main forms:

| Form | File | Purpose |
|------|------|---------|
| Admission Enquiry | `src/components/form-fields/AdmissionEnquiryForm.tsx` | Student admission enquiry |
| Alumni Signup | `src/components/form-fields/AlumniSignupForm.tsx` | Alumni registration (simple) |
| Diploma Enquiry | `src/components/form-fields/DiplomaEnquiryForm.tsx` | Course-specific enquiry modal |
| Main Contact | `src/components/form-fields/MainContactForm.tsx` | General contact page form |
| Alumni Connect | `src/pages/AlumniPage/AlumniConnectForm.tsx` | Full alumni registration on Alumni page |

All forms submit via EmailJS. Configuration is in `src/constants/emailjs.constants.ts`.

## Key Data Files

- `src/data/paramedical-courses/` — 16 diploma course definitions
- `src/data/counseling-programs/` — 5 counseling programme definitions
- `src/data/faculty-members/` — Faculty split by department
- `src/data/alumni-testimonials.ts` — Alumni quotes
- `src/data/site-announcements.ts` — Notice board content
- `src/data/upcoming-events.ts` — Event cards on homepage

## Routing

Routes are defined in `src/constants/route-paths.constants.ts` and wired in `src/App.tsx`.

## Assets

All static images and documents live under `public/static-assets/`. Use the helpers in `src/utils/asset-path-resolver.ts` to build paths — do not hardcode `/static-assets/` URLs directly in components.

## SEO

Page titles and meta descriptions are set per-route in `src/constants/seo-defaults.constants.ts` using the `INSTITUTE` constant plus some hardcoded strings. Update both when rebranding.

## Notes

- No backend — all form submissions go through EmailJS.
- The `WhyChooseBBS` component (`src/pages/HomePage/WhyChooseBBS.tsx`) is named after the original college; the display text has been updated to PIONEER COLLEGE but the file/component name was preserved to avoid breaking imports.
