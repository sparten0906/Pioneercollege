
// ============================================================
// ASSET PATH RESOLVER
// Prepends the Vite base URL to every image/asset path.
// Critical for Vercel deployment — without this all images 404.
// ============================================================

// Vite exposes import.meta.env.BASE_URL
// On Vercel it is '/' — on local dev it is also '/'
const BASE = import.meta.env.BASE_URL ?? '/'

const normaliseBase = (base: string): string =>
  base.endsWith('/') ? base.slice(0, -1) : base

const RESOLVED_BASE = normaliseBase(BASE)

// Resolve any static asset path
export const resolveAsset = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${RESOLVED_BASE}${cleanPath}`
}

// ---- Specific resolvers for each image folder ----

export const getHeroImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/hero-slides/${filename}`)

export const getAboutImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/about-page/${filename}`)

export const getCourseImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/paramedical-courses/${filename}`)

export const getCounselingImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/counseling-courses/${filename}`)

export const getFacultyImage = (
  dept: 'faculty-science-dept' | 'faculty-clinical-dept' | 'faculty-admin-dept',
  filename: string,
): string =>
  resolveAsset(`/static-assets/images/${dept}/${filename}`)

export const getGalleryImage = (
  category: 'annual-day-event' | 'sports-event' | 'cultural-event' | 'convocation-event' | 'workshop-event',
  filename: string,
): string =>
  resolveAsset(`/static-assets/images/photo-gallery/${category}/${filename}`)

export const getCampusImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/campus-infrastructure/${filename}`)

export const getAchievementImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/achievements-section/${filename}`)

export const getAlumniImage = (filename: string): string =>
  resolveAsset(`/static-assets/images/alumni-testimonials/${filename}`)

export const getLogo = (filename: string): string =>
  resolveAsset(`/static-assets/brand-logos/${filename}`)

export const getDocPath = (filename: string): string =>
  resolveAsset(`/static-assets/downloadable-docs/${filename}`)