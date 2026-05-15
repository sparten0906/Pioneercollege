import type { ReactElement } from 'react'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { scholarships } from '../../data/scholarship-info'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

/* ---- Icons ---- */
const GovtIcon = () => (
  <svg className="scholarship-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const TrophyIcon = () => (
  <svg className="scholarship-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14M5 3a2 2 0 00-2 2v3a9 9 0 009 9 9 9 0 009-9V5a2 2 0 00-2-2M5 3H3M19 3h2M9 21h6M12 17v4" />
  </svg>
)

const GlobalIcon = () => (
  <svg className="scholarship-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)

const RupeeIcon = () => (
  <svg className="scholarship-card__amount-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 010 6h-1l4 4M9 8a3 3 0 000 6h1" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="scholarship-card__apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const iconMap: Record<string, ReactElement> = {
  government: <GovtIcon />,
  institute: <TrophyIcon />,
  external: <GlobalIcon />,
}

const cardClassMap: Record<string, string> = {
  government: 'scholarship-card--government',
  institute: 'scholarship-card--institute',
  external: 'scholarship-card--external',
}

const ScholarshipOptions = () => {
  /*
   * useRevealOnScroll — wraps the scholarships grid.
   * Each .scholarship-card carries .reveal-up + stagger class
   * for a cascading entrance animation.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  return (
    <div className="scholarships" ref={sectionRef}>
      <SectionTitleBlock
        title="Scholarships Available"
        subtitle="Multiple scholarship programmes are available to eligible students. Apply early — slots are limited."
        align="center"
        accentWord="Scholarships"
      />

      <div className="scholarships__grid">
        {scholarships.map((sch, index) => (
          <div
            key={sch.id}
            className={`scholarship-card ${cardClassMap[sch.offeredBy] ?? ''} reveal-up stagger-${Math.min(index + 1, 8)}`}
          >
            {/* Card header */}
            <div className="scholarship-card__header">
              <div className="scholarship-card__icon-wrap">
                {iconMap[sch.offeredBy] ?? <GovtIcon />}
              </div>
              <div>
                <h3 className="scholarship-card__name">{sch.name}</h3>
                <p className="scholarship-card__offered-by">
                  Offered by: {
                    sch.offeredBy === 'government' ? 'Government of India / UP Govt.' :
                      sch.offeredBy === 'institute' ? 'BBS Institute' :
                        'External Body'
                  }
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="scholarship-card__body">
              {/* Amount */}
              <span className="scholarship-card__amount">
                <RupeeIcon />
                {sch.amount}
              </span>

              {/* Eligibility list */}
              <div>
                <p className="scholarship-card__eligibility-title">
                  Eligibility Criteria
                </p>
                <ul className="scholarship-card__eligibility-list">
                  {sch.eligibility.map((criterion) => (
                    <li key={criterion} className="scholarship-card__eligibility-item">
                      <span className="scholarship-card__eligibility-dot" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to apply */}
              <div>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: 'var(--space-1)' }}>
                    How to Apply:
                  </strong>
                  {sch.applicationProcess}
                </p>

                {sch.website && (
                  <a
                    href={sch.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scholarship-card__apply-link"
                  >
                    Apply on official portal
                    <ExternalLinkIcon />
                  </a>
                )}

                {sch.deadline && (
                  <p
                    style={{
                      marginTop: 'var(--space-2)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-error)',
                      fontWeight: 'var(--font-semibold)',
                    }}
                  >
                    Deadline: {sch.deadline}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScholarshipOptions