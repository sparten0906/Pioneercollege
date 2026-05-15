import { useState } from 'react'
import { ALL_DIPLOMAS } from '../../data/paramedical-courses'

const SESSIONS = ['2024-25', '2023-24', '2022-23', '2021-22', '2020-21']

const SEMESTER_OPTIONS = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4']

const courseOptions = [
  { value: '', label: 'Select Programme' },
  ...ALL_DIPLOMAS.map((d) => ({
    value: d.shortTitle,
    label: d.title,
  })),
]

const sessionOptions = [
  { value: '', label: 'Select Session' },
  ...SESSIONS.map((s) => ({ value: s, label: s })),
]

const semesterOptions = [
  { value: '', label: 'Select Semester' },
  ...SEMESTER_OPTIONS.map((s) => ({ value: s, label: s })),
]

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
  </svg>
)

const ExternalIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const ResultsSearchBlock = () => {
  const [course,   setCourse]   = useState('')
  const [session,  setSession]  = useState('')
  const [semester, setSemester] = useState('')

  /*
   * Since BBS results are on the official UPPC website,
   * we build a Google search URL as a helper for students
   * who cannot find the direct link. A real result lookup
   * would require an API from the examining body.
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = [
      'UP Paramedical Council result',
      course,
      session,
      semester,
    ]
      .filter(Boolean)
      .join(' ')
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="results-search-block">
      <h2 className="results-search-block__title">
        Search Your Result
      </h2>
      <p className="results-search-block__sub">
        Select your programme, session, and semester to search for your
        result on the UP Paramedical Council portal. Results are officially
        published on the UPPC website — not stored on this website.
      </p>

      <form onSubmit={handleSearch} noValidate>
        <div className="results-search-block__form">
          {/* Course selector */}
          <div>
            <label
              htmlFor="result-course"
              style={{
                display: 'block',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              Programme
            </label>
            <select
              id="result-course"
              className="form-select"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              aria-label="Select programme"
            >
              {courseOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Session selector */}
          <div>
            <label
              htmlFor="result-session"
              style={{
                display: 'block',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              Session
            </label>
            <select
              id="result-session"
              className="form-select"
              value={session}
              onChange={(e) => setSession(e.target.value)}
              aria-label="Select session"
            >
              {sessionOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Semester selector */}
          <div>
            <label
              htmlFor="result-semester"
              style={{
                display: 'block',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              Semester
            </label>
            <select
              id="result-semester"
              className="form-select"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              aria-label="Select semester"
            >
              {semesterOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="btn btn--primary btn--lg"
            style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <SearchIcon className="btn__icon" />
            Search Result
            <ExternalIcon style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </form>

      <p
        style={{
          marginTop: 'var(--space-5)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
        }}
      >
        * This tool opens the UP Paramedical Council website in a new tab
        with your search pre-filled. Results are not stored on this website.
        For official result verification, always use the UPPC portal directly.
      </p>
    </div>
  )
}

export default ResultsSearchBlock