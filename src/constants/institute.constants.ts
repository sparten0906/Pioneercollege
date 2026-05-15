
// ============================================================
// INSTITUTE CONSTANTS — PIONEER COLLEGE
// ============================================================

import type { ContactDetails, SocialLink } from '../types/shared.types'

export const INSTITUTE = {
  name: 'PIONEER COLLEGE',
  shortName: 'PIONEER COLLEGE',
  abbreviation: 'PIONEER',
  tagline: 'Shaping Paramedical Professionals for a Healthier Nation',
  established: 2005,
  type: 'Paramedical',
  affiliation: 'UP Paramedical Council, Lucknow',
  recognition: 'Ministry of Health & Family Welfare, Govt. of India',
  chairman: 'Shri Chandra Shekhar ',
  director: 'Dr. Arpana Singh',
  principal: 'Dr. S.K. Srivastava',
  totalCourses: 16,
  counselingCourses: 5,
  naacGrade: 'A',
} as const

export const CONTACT_DETAILS: ContactDetails = {
  address: 'Bahraich, Uttar Pradesh, India',
  phone: ['+91-6394729329'],
  email: ['admissions@pioneercollege.edu.pl', 'info@pioneercollege.edu.pl'],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=YOUR_EMBED_URL',
  workingHours: 'Monday – Saturday: 9:00 AM – 5:00 PM',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/bbsinstitute',
    label: 'Follow us on Facebook',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/bbsinstitute',
    label: 'Follow us on Instagram',
  },
  {
    platform: 'youtube',
    url: 'https://www.youtube.com/@bbsinstitute',
    label: 'Subscribe on YouTube',
  },
]

export const INSTITUTE_STATS = [
  { label: 'Years of Excellence', value: new Date().getFullYear() - INSTITUTE.established },
  { label: 'Diploma Courses', value: INSTITUTE.totalCourses },
  { label: 'Students Enrolled', value: 2000 },
  { label: 'Placement Rate', value: '86%' },
] as const

export const DOWNLOAD_LINKS = [
  {
    label: 'Download Prospectus 2024–25',
    fileName: 'bbs-prospectus-2024-25.pdf',
    filePath: '/static-assets/downloadable-docs/bbs-prospectus-2024-25.pdf',
    fileType: 'pdf' as const,
    fileSizeLabel: '2.4 MB',
  },
  {
    label: 'Download Admission Form',
    fileName: 'admission-form-blank.pdf',
    filePath: '/static-assets/downloadable-docs/admission-form-blank.pdf',
    fileType: 'pdf' as const,
    fileSizeLabel: '0.8 MB',
  },
  {
    label: 'Download Fee Structure',
    fileName: 'fee-structure-2024-25.pdf',
    filePath: '/static-assets/downloadable-docs/fee-structure-2024-25.pdf',
    fileType: 'pdf' as const,
    fileSizeLabel: '0.5 MB',
  },
]