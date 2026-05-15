export {}
// ============================================================
// DEPARTMENT & CATEGORY CONSTANTS
// ============================================================

import type { DiplomaCategory } from '../types/diploma.types'
import type { FacultyDepartment } from '../types/faculty.types'
import type { GalleryEventCategory } from '../types/gallery.types'

// ---- Diploma course categories with display labels ----

export interface DiplomaCategoryMeta {
  value: DiplomaCategory
  label: string
  description: string
  color: string
}

export const DIPLOMA_CATEGORIES: DiplomaCategoryMeta[] = [
  {
    value:       'lab-technology',
    label:       'Lab Technology',
    description: 'MLT, Dialysis, CT, MRI, Cath Lab',
    color:       '#2E86C1',
  },
  {
    value:       'imaging',
    label:       'Medical Imaging',
    description: 'Radiography, X-Ray, ECG',
    color:       '#1B4F72',
  },
  {
    value:       'ophthalmic',
    label:       'Ophthalmic',
    description: 'Ophthalmic Assistant, Optometry, Contact Lens',
    color:       '#117A65',
  },
  {
    value:       'neuro-cardiac',
    label:       'Neuro & Cardiac',
    description: 'Clinical Neuro Technology, Cath Lab',
    color:       '#7D3C98',
  },
  {
    value:       'dental-ortho',
    label:       'Dental & Ortho',
    description: 'Dental Hygiene, Ortho Technician',
    color:       '#CB4335',
  },
  {
    value:       'general-clinical',
    label:       'General Clinical',
    description: 'CMS & ED, Medical Assistant, Critical Care',
    color:       '#E67E22',
  },
]

// ---- All 16 diploma course titles (for dropdowns/selects) ----

export const ALL_DIPLOMA_TITLES: string[] = [
  'Diploma in CMS & ED',
  'Diploma in Medical Lab Technician',
  'Diploma in Ophthalmic Assistant',
  'Diploma in Medical Radiography',
  'Diploma in Cath Lab Technology',
  'Diploma in Dental Hygiene',
  'Diploma in X-Ray and ECG Technician',
  'Diploma in Clinical Neuro Technology',
  'Diploma in Dialysis Technician',
  'Diploma in MRI Technician',
  'Diploma in CT Technician',
  'Diploma in Ortho Technician',
  'Diploma in Critical Care Technician',
  'Diploma in Medical Assistant',
  'Diploma in Optometry and Contact Lens Technician',
  'Diploma in Contact Lens Technician',
]

// ---- All 5 counseling course titles (for dropdowns/selects) ----

export const ALL_COUNSELING_TITLES: string[] = [
  'D. Pharma',
  'ANM',
  'GNM',
  'BSc. Nursing',
  'BAMS',
]

// ---- Combined for admission form course select ----

export const ALL_COURSE_OPTIONS = [
  { value: '', label: 'Select a Course', disabled: true },
  ...ALL_DIPLOMA_TITLES.map((t) => ({ value: t, label: t, disabled: false })),
  ...ALL_COUNSELING_TITLES.map((t) => ({
    value: t,
    label: `${t} (Counseling)`,
    disabled: false,
  })),
]

// ---- Faculty departments ----

export interface FacultyDeptMeta {
  value: FacultyDepartment
  label: string
}

export const FACULTY_DEPARTMENTS: FacultyDeptMeta[] = [
  { value: 'basic-science', label: 'Basic Science' },
  { value: 'clinical',      label: 'Clinical Departments' },
  { value: 'administration',label: 'Administration' },
]

// ---- Gallery categories ----

export interface GalleryCategoryMeta {
  value: GalleryEventCategory
  label: string
}

export const GALLERY_CATEGORIES: GalleryCategoryMeta[] = [
  { value: 'all',         label: 'All Events' },
  { value: 'annual-day',  label: 'Annual Day' },
  { value: 'sports',      label: 'Sports Day' },
  { value: 'cultural',    label: 'Cultural Fest' },
  { value: 'convocation', label: 'Convocation' },
  { value: 'workshop',    label: 'Workshops' },
]

// ---- Academic sessions ----

export const ACADEMIC_SESSIONS: string[] = [
  '2024–2025',
  '2025–2026',
]

// ---- Hear about us options ----

export const HEAR_ABOUT_OPTIONS = [
  { value: '',                label: 'How did you hear about us?', disabled: true },
  { value: 'friend',          label: 'Friend / Family',            disabled: false },
  { value: 'social-media',    label: 'Social Media',               disabled: false },
  { value: 'newspaper',       label: 'Newspaper',                  disabled: false },
  { value: 'poster-banner',   label: 'Poster / Banner',            disabled: false },
  { value: 'website',         label: 'Website / Google',           disabled: false },
  { value: 'counselor',       label: 'Education Counselor',        disabled: false },
  { value: 'other',           label: 'Other',                      disabled: false },
]