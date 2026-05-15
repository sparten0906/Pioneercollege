export {}
// ============================================================
// EMAILJS CONSTANTS — reads from environment variables
// Add all keys in Vercel Dashboard → Settings → Env Variables
// ============================================================

export const EMAILJS_CONFIG = {
  SERVICE_ID:           import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  TEMPLATE_CONTACT:     import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT as string,
  TEMPLATE_ADMISSION:   import.meta.env.VITE_EMAILJS_TEMPLATE_ADMISSION as string,
  TEMPLATE_DIPLOMA_ENQ: import.meta.env.VITE_EMAILJS_TEMPLATE_DIPLOMA_ENQUIRY as string,
  TEMPLATE_ALUMNI:      import.meta.env.VITE_EMAILJS_TEMPLATE_ALUMNI as string,
  PUBLIC_KEY:           import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
} as const

// Runtime guard — warns in dev if any key is missing
if (import.meta.env.DEV) {
  const missing = Object.entries(EMAILJS_CONFIG)
    .filter(([, v]) => !v)
    .map(([k]) => k)

  if (missing.length > 0) {
    console.warn(
      `[EmailJS] Missing environment variables: ${missing.join(', ')}\n` +
      'Add them to your .env file. See .env.example for reference.'
    )
  }
}