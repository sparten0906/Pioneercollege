import { useState, useMemo, useCallback } from 'react'
import type { DiplomaData } from '../types/diploma.types'
import type { CounselingProgram } from '../types/counseling.types'
import { ALL_DIPLOMAS } from '../data/paramedical-courses'
import { counselingPrograms } from '../data/counseling-programs/counseling.data'
import {
  applyFilters,
  type FilterTab,
} from '../utils/diploma-filter'

interface UseDiplomaFilterReturn {
  activeTab:          FilterTab
  searchQuery:        string
  filteredDiplomas:   DiplomaData[]
  filteredCounseling: CounselingProgram[]
  totalResults:       number
  setActiveTab:       (tab: FilterTab) => void
  setSearchQuery:     (q: string) => void
  clearFilters:       () => void
  hasActiveFilter:    boolean
}

/**
 * Manages the filter + search state for the Courses page.
 * Combines category tab filtering with live text search.
 * All filtering is pure and memoized — no API calls.
 *
 * Usage:
 *   const { filteredDiplomas, filteredCounseling, setActiveTab, setSearchQuery }
 *     = useDiplomaFilter()
 */
const useDiplomaFilter = (): UseDiplomaFilterReturn => {
  const [activeTab,    setActiveTab]    = useState<FilterTab>('all')
  const [searchQuery,  setSearchQuery]  = useState('')

  const { filteredDiplomas, filteredCounseling } = useMemo(
    () =>
      applyFilters(
        ALL_DIPLOMAS.filter((d) => d.isActive),
        counselingPrograms.filter((p) => p.isActive),
        activeTab,
        searchQuery,
      ),
    [activeTab, searchQuery],
  )

  const clearFilters = useCallback(() => {
    setActiveTab('all')
    setSearchQuery('')
  }, [])

  const hasActiveFilter = activeTab !== 'all' || searchQuery.trim().length > 0

  return {
    activeTab,
    searchQuery,
    filteredDiplomas,
    filteredCounseling,
    totalResults:    filteredDiplomas.length + filteredCounseling.length,
    setActiveTab,
    setSearchQuery:  useCallback((q: string) => setSearchQuery(q), []),
    clearFilters,
    hasActiveFilter,
  }
}

export default useDiplomaFilter