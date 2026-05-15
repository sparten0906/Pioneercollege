import type { CounselingProgram } from '../../types/counseling.types'
import CounselingCard from '../../components/card-components/CounselingCard'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface CounselingServicesGridProps {
  programs: CounselingProgram[]
}

const InfoIcon = () => (
  <svg className="counseling-section__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const HandshakeIcon = () => (
  <svg className="counseling-section__eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const CounselingServicesGrid = ({ programs }: CounselingServicesGridProps) => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>({ deps: [programs] })

  if (programs.length === 0) return null

  return (
    <div className="counseling-section" ref={sectionRef}>
      {/* Section header */}
      <div className="counseling-section__header">
        <div className="counseling-section__title-wrap">
          <div className="counseling-section__eyebrow">
            <HandshakeIcon />
            Courses Offered for Counseling
          </div>

          <h2 className="counseling-section__heading">
            Guided Admissions for Nursing &amp; Pharmacy Programmes
          </h2>

          <p className="counseling-section__desc">
            The following programmes are not directly taught at BBS Institute —
            instead, our experienced counselors provide end-to-end guidance for
            admission through the official state and national counseling
            processes. We assist with form filling, document preparation, choice
            locking, and college reporting.
          </p>
        </div>

        {/* Info pill */}
        <div className="counseling-section__info-pill">
          <InfoIcon />
          <p className="counseling-section__info-text">
            Admission via{' '}
            <strong>UP State Counseling</strong>
            <br />
            BBS provides full guidance support
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="counseling-courses-grid">
        {programs.map((program, index) => (
          <div
            key={program.id}
            className={`reveal-up stagger-${Math.min(index + 1, 8)}`}
          >
            <CounselingCard program={program} />
          </div>
        ))}
      </div>

      {/* Disclaimer note */}
      <p
        style={{
          marginTop: 'var(--space-6)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        * D. Pharma, ANM, GNM, BSc. Nursing and BAMS admissions are conducted
        through state counseling bodies (UPSMF, UP Pharmacy Council, UP AYUSH).
        BBS Institute provides counseling assistance and does not conduct these
        programmes directly on campus.
      </p>
    </div>
  )
}

export default CounselingServicesGrid