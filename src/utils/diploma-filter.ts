export {}
// ============================================================
// DIPLOMA FILTER — pure filter + search functions
// Used by useDiplomaFilter hook
// ============================================================

import type { DiplomaData, DiplomaCategory } from '../types/diploma.types'
import type { CounselingProgram } from '../types/counseling.types'

export type FilterTab = 'all' | DiplomaCategory | 'counseling'

// Filter diploma courses by category tab
export const filterDiplomasByCategory = (
  diplomas: DiplomaData[],
  activeTab: FilterTab,
): DiplomaData[] => {
  if (activeTab === 'all') return diplomas
  if (activeTab === 'counseling') return []
  return diplomas.filter((d) => d.category === activeTab)
}

// Search diplomas by title or description
export const searchDiplomas = (
  diplomas: DiplomaData[],
  query: string,
): DiplomaData[] => {
  if (!query.trim()) return diplomas
  const q = query.toLowerCase().trim()
  return diplomas.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.shortTitle.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q),
  )
}

// Search counseling programs
export const searchCounseling = (
  programs: CounselingProgram[],
  query: string,
): CounselingProgram[] => {
  if (!query.trim()) return programs
  const q = query.toLowerCase().trim()
  return programs.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.fullTitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q),
  )
}

// Combined filter: category + search applied together
export const applyFilters = (
  diplomas: DiplomaData[],
  counseling: CounselingProgram[],
  activeTab: FilterTab,
  searchQuery: string,
): {
  filteredDiplomas: DiplomaData[]
  filteredCounseling: CounselingProgram[]
} => {
  const byCategory = filterDiplomasByCategory(diplomas, activeTab)
  const bySearch   = searchDiplomas(byCategory, searchQuery)

  const showCounseling = activeTab === 'all' || activeTab === 'counseling'
  const filteredCounseling = showCounseling
    ? searchCounseling(counseling, searchQuery)
    : []

  return {
    filteredDiplomas:   bySearch,
    filteredCounseling: filteredCounseling,
  }
}

// Get featured diplomas for HomePage
export const getFeaturedDiplomas = (
  diplomas: DiplomaData[],
  limit = 6,
): DiplomaData[] =>
  diplomas.filter((d) => d.isFeatured && d.isActive).slice(0, limit)

// Get related diplomas for CourseDetail page
export const getRelatedDiplomas = (
  diplomas: DiplomaData[],
  currentSlug: string,
  currentCategory: DiplomaCategory,
  limit = 3,
): DiplomaData[] =>
  diplomas
    .filter((d) => d.slug !== currentSlug && d.category === currentCategory && d.isActive)
    .slice(0, limit)

// Find a single diploma by slug
export const findDiplomaBySlug = (
  diplomas: DiplomaData[],
  slug: string,
): DiplomaData | undefined =>
  diplomas.find((d) => d.slug === slug)