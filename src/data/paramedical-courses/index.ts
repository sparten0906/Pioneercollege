import { labTechnologyCourses } from './lab-technology.data'
import { imagingCourses } from './imaging-courses.data'
import { ophthalmicCourses } from './ophthalmic-courses.data'
import { neuroCardiacCourses } from './neuro-cardiac.data'
import { dentalOrthoCourses } from './dental-ortho.data'
import { generalClinicalCourses } from './general-clinical.data'
import type { DiplomaData, DiplomaCategory } from '../../types/diploma.types'

// All 16 diploma courses combined
export const ALL_DIPLOMAS: DiplomaData[] = [
  ...labTechnologyCourses,
  ...imagingCourses,
  ...ophthalmicCourses,
  ...neuroCardiacCourses,
  ...dentalOrthoCourses,
  ...generalClinicalCourses,
]

// Named re-exports for granular use
export {
  labTechnologyCourses,
  imagingCourses,
  ophthalmicCourses,
  neuroCardiacCourses,
  dentalOrthoCourses,
  generalClinicalCourses,
}

// Helper — get diplomas by category
export const getDiplomasByCategory = (
  category: DiplomaCategory,
): DiplomaData[] =>
  ALL_DIPLOMAS.filter((d) => d.category === category)

// Helper — get featured diplomas
export const getFeatured = (limit = 6): DiplomaData[] =>
  ALL_DIPLOMAS.filter((d) => d.isFeatured && d.isActive).slice(0, limit)

// Helper — find by slug
export const findBySlug = (slug: string): DiplomaData | undefined =>
  ALL_DIPLOMAS.find((d) => d.slug === slug)
// Helper — get related diplomas
export const getRelatedDiplomas = (
  courses: DiplomaData[],
  currentSlug: string,
  category: DiplomaCategory,
  limit = 3,
): DiplomaData[] =>
  courses
    .filter((d) => d.category === category && d.slug !== currentSlug)
    .slice(0, limit)
