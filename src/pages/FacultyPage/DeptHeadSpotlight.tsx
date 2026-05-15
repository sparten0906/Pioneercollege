import type { FacultyMember } from '../../types/faculty.types'
import { FACULTY_DEPARTMENTS } from '../../constants/dept-categories.constants'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface DeptHeadSpotlightProps {
  hods:            FacultyMember[]
  onMemberClick:   (member: FacultyMember) => void
}

const StarIcon = () => (
  <svg
    className="dept-head-card__hod-badge-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg
    className="dept-head-card__exp-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
)

/* Resolve human-readable dept label from FACULTY_DEPARTMENTS constant */
const getDeptLabel = (dept: FacultyMember['department']): string => {
  const found = FACULTY_DEPARTMENTS.find((d) => d.value === dept)
  return found?.label ?? dept
}

const DeptHeadSpotlight = ({
  hods,
  onMemberClick,
}: DeptHeadSpotlightProps) => {
  /*
   * useRevealOnScroll — wraps the HOD grid container.
   * Each .dept-head-card carries .reveal-up + a stagger class
   * so they cascade in as the spotlight section enters the viewport.
   *
   * threshold: 0.12 — triggers when 12% of the section is visible
   * rootMargin: offset fires slightly before the element reaches
   *             the visible boundary for a smoother experience
   * once: true — animation only plays once per page load
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold:  0.12,
    rootMargin: '0px 0px -50px 0px',
    once:       true,
  })

  if (hods.length === 0) return null

  return (
    <div
      className="dept-head-spotlight"
      ref={sectionRef}
    >
      <div className="dept-heads-grid">
        {hods.map((hod, index) => (
          <div
            key={hod.id}
            className={`dept-head-card reveal-up stagger-${Math.min(index + 1, 8)}`}
            onClick={() => onMemberClick(hod)}
            role="button"
            tabIndex={0}
            aria-label={`View profile of ${hod.name}`}
            onKeyDown={(e) => e.key === 'Enter' && onMemberClick(hod)}
          >
            {/* Image */}
            <div className="dept-head-card__image-wrap">
              <img
                src={hod.photo}
                alt={`${hod.name} — ${hod.designation}`}
                className="dept-head-card__image"
                loading="lazy"
              />
              <div className="dept-head-card__image-overlay" />

              {/* HOD badge */}
              <span className="dept-head-card__hod-badge">
                <StarIcon />
                HOD
              </span>
            </div>

            {/* Body */}
            <div className="dept-head-card__body">
              <p className="dept-head-card__dept">
                {getDeptLabel(hod.department)}
              </p>
              <h3 className="dept-head-card__name">{hod.name}</h3>
              <p className="dept-head-card__designation">{hod.designation}</p>

              {/* Subject tags */}
              {hod.subjectsTaught.length > 0 && (
                <div className="dept-head-card__subjects">
                  {hod.subjectsTaught.slice(0, 2).map((subject) => (
                    <span key={subject} className="dept-head-card__subject-tag">
                      {subject}
                    </span>
                  ))}
                </div>
              )}

              <p className="dept-head-card__exp">
                <BriefcaseIcon />
                {hod.experience} years experience
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeptHeadSpotlight