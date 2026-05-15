// ============================================================
// ANALYTICS SERVICE
// Wraps Vercel Analytics and optional GA4 event calls.
// All functions are no-ops if analytics is not configured.
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined

// ---- Page View ----
export const trackPageView = (path: string, title: string): void => {
  if (typeof window === 'undefined') return

  if (GA_ID && window.gtag) {
    window.gtag('config', GA_ID, { page_path: path, page_title: title })
  }
}

// ---- Custom Events ----
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void => {
  if (typeof window === 'undefined') return

  if (GA_ID && window.gtag) {
    window.gtag('event', eventName, params ?? {})
  }
}

// ---- Pre-defined events used across the site ----

export const trackFormSubmit = (formName: string): void =>
  trackEvent('form_submit', { form_name: formName })

export const trackFormError = (formName: string, field: string): void =>
  trackEvent('form_error', { form_name: formName, field })

export const trackCourseView = (courseSlug: string, courseTitle: string): void =>
  trackEvent('course_view', { course_slug: courseSlug, course_title: courseTitle })

export const trackDownload = (fileName: string): void =>
  trackEvent('file_download', { file_name: fileName })

export const trackEnquiryClick = (source: string): void =>
  trackEvent('enquiry_click', { source })

export const trackWhatsAppClick = (): void =>
  trackEvent('whatsapp_click')

export const trackPhoneClick = (): void =>
  trackEvent('phone_click')