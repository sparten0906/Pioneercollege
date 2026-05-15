import type { ReactElement } from 'react'
import type { FacultyDepartment } from '../../types/faculty.types'
import { FACULTY_DEPARTMENTS } from '../../constants/dept-categories.constants'

type FacultyFilter = 'all' | FacultyDepartment

interface FacultyDeptFilterProps {
  activeFilter: FacultyFilter
  onChange:     (filter: FacultyFilter) => void
}

/* Per-department icons */
const iconMap: Record<FacultyFilter, ReactElement> = {
  all: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  'basic-science': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
    </svg>
  ),
  clinical: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  administration: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
}

const tabs: { value: FacultyFilter; label: string }[] = [
  { value: 'all',           label: 'All Members' },
  ...FACULTY_DEPARTMENTS.map((d) => ({
    value: d.value as FacultyFilter,
    label: d.label,
  })),
]

const FacultyDeptFilter = ({
  activeFilter,
  onChange,
}: FacultyDeptFilterProps) => {
  return (
    <div
      className="faculty-dept-filter"
      role="tablist"
      aria-label="Filter faculty by department"
    >
      <span className="faculty-dept-filter__label">Department:</span>

      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          role="tab"
          aria-selected={activeFilter === tab.value}
          className={`pill-tabs__item${activeFilter === tab.value ? ' is-active' : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {iconMap[tab.value] && (
            <span className="pill-tabs__icon">
              {iconMap[tab.value]}
            </span>
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default FacultyDeptFilter