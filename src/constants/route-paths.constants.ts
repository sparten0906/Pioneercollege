
export const ROUTES = {

  HOME: '/',
  ABOUT: '/about',
  COURSES: '/courses',
  COURSE_DETAIL: '/courses/:slug',
  ADMISSIONS: '/admissions',
  FACULTY: '/faculty',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  NOTIFICATIONS: '/notifications',
  RESULTS: '/results',
  ALUMNI: '/alumni',
} as const
// ============================================================
// ROUTE PATHS — all URL strings as typed constants
// ============================================================


export type AppRoute = typeof ROUTES[keyof typeof ROUTES]

// Helper — build a real course detail URL from a slug
export const getCourseDetailPath = (slug: string): string =>
  `/courses/${slug}`