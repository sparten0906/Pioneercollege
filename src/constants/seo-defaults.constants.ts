export {}
// ============================================================
// SEO DEFAULTS — used by SeoMetaTags component
// ============================================================

import type { SeoMetaProps } from '../types/shared.types'
import { INSTITUTE } from './institute.constants'

export const SEO_DEFAULTS: SeoMetaProps = {
  title:       `${INSTITUTE.name} | Paramedical Courses in UP`,
  description: `${INSTITUTE.name} offers 16 paramedical diploma courses including Medical Lab Technician, Radiography, MRI, CT, Dialysis and more. Affiliated with UP Paramedical Council.`,
  keywords:    'paramedical courses UP, medical lab technician, radiology diploma, dialysis technician, BBS institute, nursing courses, ANM GNM',
  ogImage:     '/static-assets/images/open-graph/og-share-default.webp',
  canonical:   'https://bbsinstitute.ac.in',
}

export const SEO_PER_PAGE: Record<string, SeoMetaProps> = {
  home: {
    title:       `${INSTITUTE.name} | Best Paramedical Institute in UP`,
    description: 'Join BBS Group of Educational Institutes for world-class paramedical diploma courses. 16 courses, experienced faculty, and high placement record.',
    keywords:    'best paramedical institute UP, diploma in MLT, radiology diploma UP',
  },
  about: {
    title:       `About Us | ${INSTITUTE.shortName}`,
    description: `Learn about ${INSTITUTE.name} — our history, vision, mission, and leadership. Affiliated with UP Paramedical Council since ${INSTITUTE.established}.`,
    keywords:    'BBS institute about, paramedical college UP, NAAC accredited',
  },
  courses: {
    title:       `Paramedical Courses | ${INSTITUTE.shortName}`,
    description: 'Explore all 16 paramedical diploma courses at BBS Institute. Courses in lab technology, radiology, ophthalmic, dental, neuro and more.',
    keywords:    'paramedical diploma courses, MLT course, radiology course, dental hygiene diploma',
  },
  admissions: {
    title:       `Admissions 2024–25 | ${INSTITUTE.shortName}`,
    description: 'Apply for admission to BBS Institute paramedical courses. Check eligibility, fee structure, important dates and required documents.',
    keywords:    'paramedical admission 2024, BBS institute admission, medical diploma admission UP',
  },
  faculty: {
    title:       `Faculty | ${INSTITUTE.shortName}`,
    description: 'Meet the experienced faculty of BBS Group of Educational Institutes — qualified professors, clinical instructors and lab technicians.',
    keywords:    'BBS faculty, paramedical professors UP',
  },
  gallery: {
    title:       `Gallery | ${INSTITUTE.shortName}`,
    description: 'View photos from annual day, sports, cultural events, workshops and convocation at BBS Group of Educational Institutes.',
    keywords:    'BBS institute gallery, events photos, annual day',
  },
  contact: {
    title:       `Contact Us | ${INSTITUTE.shortName}`,
    description: `Get in touch with ${INSTITUTE.name}. Address, phone, email and Google Maps location.`,
    keywords:    'BBS institute contact, paramedical college address UP',
  },
  notifications: {
    title:       `Notifications & Notices | ${INSTITUTE.shortName}`,
    description: 'Latest announcements, exam notices, admission alerts and general notifications from BBS Group of Educational Institutes.',
    keywords:    'BBS institute notices, admission notification, exam schedule',
  },
  results: {
    title:       `Results | ${INSTITUTE.shortName}`,
    description: 'Check exam results and marksheets for BBS Institute paramedical courses. Links to UP Paramedical Council results portal.',
    keywords:    'BBS institute results, paramedical exam results UP',
  },
  alumni: {
    title:       `Alumni | ${INSTITUTE.shortName}`,
    description: 'Connect with BBS Institute alumni network. Read success stories and register as an alumnus.',
    keywords:    'BBS institute alumni, paramedical alumni network UP',
  },
}