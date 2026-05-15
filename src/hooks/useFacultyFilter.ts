import { useState, useMemo, useCallback } from 'react'
import type { FacultyMember } from '../types/faculty.types'
import type { FacultyDepartment } from '../types/faculty.types'
import { ALL_FACULTY } from '../data/faculty-members'

type FacultyFilter = 'all' | FacultyDepartment

interface UseFacultyFilterReturn {
  activeFilter:     FacultyFilter
  searchQuery:      string
  filteredFaculty:  FacultyMember[]
  totalCount:       number
  setActiveFilter:  (f: FacultyFilter) => void
  setSearchQuery:   (q: string) => void
  clearFilters:     () => void
  hasActiveFilter:  boolean
}

/**
 * Manages filter + search state for the Faculty page.
 * Filters by department tab and searches by name,
 * designation, or subject taught.
 *
 * Usage:
 *   const { filteredFaculty, setActiveFilter, setSearchQuery }
 *     = useFacultyFilter()
 */
const useFacultyFilter = (): UseFacultyFilterReturn => {
  const [activeFilter, setActiveFilter] = useState<FacultyFilter>('all')
  const [searchQuery,  setSearchQuery]  = useState('')

  const filteredFaculty = useMemo(() => {
    let result = ALL_FACULTY.filter((f) => f.isActive)

    // Department filter
    if (activeFilter !== 'all') {
      result = result.filter((f) => f.department === activeFilter)
    }

    // Text search across name, designation, subjects
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.designation.toLowerCase().includes(q) ||
          f.subjectsTaught.some((s) => s.toLowerCase().includes(q)),
      )
    }

    // HODs first, then alphabetical by name
    return [...result].sort((a, b) => {
      if (a.isHOD && !b.isHOD) return -1
      if (!a.isHOD && b.isHOD) return 1
      return a.name.localeCompare(b.name)
    })
  }, [activeFilter, searchQuery])

  const clearFilters = useCallback(() => {
    setActiveFilter('all')
    setSearchQuery('')
  }, [])

  return {
    activeFilter,
    searchQuery,
    filteredFaculty,
    totalCount:      filteredFaculty.length,
    setActiveFilter,
    setSearchQuery:  useCallback((q: string) => setSearchQuery(q), []),
    clearFilters,
    hasActiveFilter: activeFilter !== 'all' || searchQuery.trim().length > 0,
  }
}

export default useFacultyFilter