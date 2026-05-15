import { useState } from 'react'
import type { SemesterSyllabus } from '../../types/diploma.types'

interface SyllabusAccordionProps {
  syllabus: SemesterSyllabus[]
  duration: string
}

const ChevronDownIcon = () => (
  <svg
    className="syllabus-semester__chevron"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const SyllabusAccordion = ({ syllabus, duration }: SyllabusAccordionProps) => {
  /* Open first semester by default */
  const [openSemester, setOpenSemester] = useState<number>(1)

  const toggle = (sem: number) =>
    setOpenSemester((prev) => (prev === sem ? 0 : sem))

  return (
    <div className="syllabus-panel">
      <p className="syllabus-panel__intro">
        The{' '}
        <strong style={{ color: 'var(--color-primary)' }}>
          {duration}
        </strong>{' '}
        programme is structured across{' '}
        <strong style={{ color: 'var(--color-primary)' }}>
          {syllabus.length} semester{syllabus.length > 1 ? 's' : ''}
        </strong>
        . Each semester combines theoretical lectures, laboratory practicals,
        and clinical demonstrations to build progressive competency.
      </p>

      {syllabus.map((sem) => {
        const isOpen = openSemester === sem.semester

        return (
          <div
            key={sem.semester}
            className={`syllabus-semester${isOpen ? ' is-open' : ''}`}
          >
            <button
              type="button"
              className="syllabus-semester__trigger"
              onClick={() => toggle(sem.semester)}
              aria-expanded={isOpen}
              aria-controls={`sem-panel-${sem.semester}`}
              id={`sem-trigger-${sem.semester}`}
            >
              <div className="syllabus-semester__label">
                <span className="syllabus-semester__badge">
                  S{sem.semester}
                </span>
                <div>
                  <p className="syllabus-semester__title">
                    Semester {sem.semester}
                  </p>
                  <p className="syllabus-semester__subject-count">
                    {sem.subjects.length} subjects
                  </p>
                </div>
              </div>
              <ChevronDownIcon />
            </button>

            <div
              id={`sem-panel-${sem.semester}`}
              className={`syllabus-semester__panel${isOpen ? ' is-open' : ''}`}
              role="region"
              aria-labelledby={`sem-trigger-${sem.semester}`}
            >
              <ul className="syllabus-semester__subjects">
                {sem.subjects.map((subject, idx) => (
                  <li key={idx} className="syllabus-semester__subject-item">
                    <span className="syllabus-semester__subject-dot" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}

      <p
        style={{
          marginTop: 'var(--space-5)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        * Detailed semester-wise question papers and study materials are
        issued to enrolled students at the commencement of each semester.
        Curriculum subject to UP Paramedical Council guidelines.
      </p>
    </div>
  )
}

export default SyllabusAccordion