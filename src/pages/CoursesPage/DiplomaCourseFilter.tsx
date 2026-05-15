import type { ReactElement } from 'react'
import type { FilterTab } from '../../utils/diploma-filter'
import { DIPLOMA_CATEGORIES } from '../../constants/dept-categories.constants'

interface DiplomaCourseFilterProps {
  activeTab: FilterTab
  onChange: (tab: FilterTab) => void
  diplomaCount: number
  counselingCount: number
}

/* Small inline icons per category */
const categoryIcons: Record<string, ReactElement> = {
  'all': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  'lab-technology': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
    </svg>
  ),
  'imaging': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
    </svg>
  ),
  'ophthalmic': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'neuro-cardiac': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  'dental-ortho': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    </svg>
  ),
  'general-clinical': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'counseling': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
}

const DiplomaCourseFilter = ({
  activeTab,
  onChange,
  diplomaCount,
  counselingCount,
}: DiplomaCourseFilterProps) => {
  /* Build tab list: All + 6 categories + Counseling */
  const tabs: { value: FilterTab; label: string; count: number }[] = [
    {
      value: 'all',
      label: 'All Programmes',
      count: diplomaCount + counselingCount,
    },
    ...DIPLOMA_CATEGORIES.map((cat) => ({
      value: cat.value as FilterTab,
      label: cat.label,
      count: 0, /* count filled live by filteredDiplomas — kept 0 here for simplicity */
    })),
    {
      value: 'counseling',
      label: 'Counseling',
      count: counselingCount,
    },
  ]

  return (
    <div className="diploma-filter-wrap" role="tablist" aria-label="Filter courses by category">
      <span className="diploma-filter-label">Filter:</span>

      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.value}
          className={`pill-tabs__item${activeTab === tab.value ? ' is-active' : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {categoryIcons[tab.value] && (
            <span className="pill-tabs__icon">
              {categoryIcons[tab.value]}
            </span>
          )}
          {tab.label}
          {tab.count > 0 && (
            <span className="pill-tabs__count">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}

export default DiplomaCourseFilter