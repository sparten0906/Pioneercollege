import { useRef } from 'react'

interface CourseSearchInputProps {
  value: string
  onChange: (q: string) => void
  onClear: () => void
  hasActiveFilter: boolean
}

const SearchIcon = () => (
  <svg className="course-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
  </svg>
)

const XIcon = () => (
  <svg className="course-search__clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CourseSearchInput = ({
  value,
  onChange,
  onClear,
  hasActiveFilter,
}: CourseSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    onClear()
    inputRef.current?.focus()
  }

  return (
    <div className="course-search">
      <SearchIcon />
      <input
        ref={inputRef}
        type="search"
        className="course-search__input"
        placeholder="Search by course name or keyword…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search courses"
        autoComplete="off"
        spellCheck="false"
      />
      <button
        type="button"
        className={`course-search__clear${hasActiveFilter ? ' is-visible' : ''}`}
        onClick={handleClear}
        aria-label="Clear search and filters"
        tabIndex={hasActiveFilter ? 0 : -1}
      >
        <XIcon />
      </button>
    </div>
  )
}

export default CourseSearchInput