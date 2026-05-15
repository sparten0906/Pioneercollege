export {}
// ============================================================
// SLUGIFY — converts course title to URL slug
// "Diploma in Medical Lab Technician" → "diploma-in-medical-lab-technician"
// ============================================================

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')        // spaces and underscores → hyphens
    .replace(/[^a-z0-9-]/g, '')     // remove non-alphanumeric except hyphens
    .replace(/--+/g, '-')           // collapse multiple hyphens
    .replace(/^-+|-+$/g, '')        // strip leading/trailing hyphens
}

// Reverse a slug back to a readable title (best-effort, for display)
export const deslugify = (slug: string): string => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Build a course detail URL from a full title
export const courseTitleToSlug = (title: string): string =>
  slugify(title)

// Example outputs:
// slugify("Diploma in CMS & ED")                        → "diploma-in-cms-ed"
// slugify("Diploma in X-Ray and ECG Technician")        → "diploma-in-x-ray-and-ecg-technician"
// slugify("Diploma in Optometry and Contact Lens Tech.") → "diploma-in-optometry-and-contact-lens-tech"