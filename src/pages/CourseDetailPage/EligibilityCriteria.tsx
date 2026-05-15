import type { DiplomaData } from '../../types/diploma.types'

interface EligibilityCriteriaProps {
  diploma: DiplomaData
}

const GradCapIcon = () => (
  <svg className="eligibility-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const PercentIcon = () => (
  <svg className="eligibility-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="eligibility-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const UsersIcon = () => (
  <svg className="eligibility-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const InfoIcon = () => (
  <svg className="eligibility-panel__note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const EligibilityCriteria = ({ diploma }: EligibilityCriteriaProps) => {
  return (
    <div className="eligibility-panel">
      {/* Info cards grid */}
      <div className="eligibility-panel__cards">
        {/* Qualification */}
        <div className="eligibility-card eligibility-card--qual">
          <div className="eligibility-card__icon-wrap">
            <GradCapIcon />
          </div>
          <p className="eligibility-card__label">Qualification</p>
          <p className="eligibility-card__value">{diploma.eligibility}</p>
        </div>

        {/* Minimum marks */}
        <div className="eligibility-card eligibility-card--marks">
          <div className="eligibility-card__icon-wrap">
            <PercentIcon />
          </div>
          <p className="eligibility-card__label">Minimum Marks</p>
          <p className="eligibility-card__value">
            {diploma.minPercentage}% aggregate in qualifying examination
          </p>
        </div>

        {/* Age */}
        <div className="eligibility-card eligibility-card--age">
          <div className="eligibility-card__icon-wrap">
            <CalendarIcon />
          </div>
          <p className="eligibility-card__label">Age Limit</p>
          <p className="eligibility-card__value">
            17 to 30 years as on 1 August of admission year
          </p>
        </div>

        {/* Seats */}
        <div className="eligibility-card eligibility-card--seats">
          <div className="eligibility-card__icon-wrap">
            <UsersIcon />
          </div>
          <p className="eligibility-card__label">Available Seats</p>
          <p className="eligibility-card__value">
            {diploma.totalSeats} seats per academic session
          </p>
        </div>
      </div>

      {/* Important note */}
      <div className="eligibility-panel__note">
        <InfoIcon />
        <div>
          <strong style={{ display: 'block', marginBottom: 'var(--space-1)', color: 'var(--color-accent-darker)' }}>
            How admissions work:
          </strong>
          Admissions are based on merit — your 10+2 percentage. No
          entrance exam is required. A merit list is published on our
          website and notice board. Visit the Admissions page for important
          dates, required documents, and fee payment details.
        </div>
      </div>

      {/* Documents required */}
      <div
        style={{
          marginTop: 'var(--space-6)',
          paddingTop: 'var(--space-6)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-semibold)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Documents Required at Admission
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}
        >
          {[
            '10th (High School) Marksheet & Certificate — originals + 2 photocopies',
            '12th (Intermediate) Marksheet & Certificate — originals + 2 photocopies',
            '4 recent passport-size photographs (white background)',
            'Aadhaar Card — original + 2 photocopies',
            'Caste Certificate (if applicable — SC/ST/OBC/EWS)',
            'Transfer Certificate from last attended institution',
            'Medical Fitness Certificate from a registered doctor',
          ].map((doc) => (
            <div
              key={doc}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-3)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-normal)',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '1px' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {doc}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EligibilityCriteria