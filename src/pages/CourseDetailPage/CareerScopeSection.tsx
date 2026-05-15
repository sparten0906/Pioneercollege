import type { CareerOpportunity } from '../../types/diploma.types'

interface CareerScopeSectionProps {
  opportunities: CareerOpportunity[]
  courseTitle: string
}

const sectorLabel: Record<CareerOpportunity['sector'], string> = {
  government: 'Govt.',
  private: 'Private',
  both: 'Govt. & Pvt.',
}

const BuildingIcon = () => (
  <svg
    className="career-panel__govt-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const CareerScopeSection = ({
  opportunities,
  courseTitle,
}: CareerScopeSectionProps) => {
  return (
    <div className="career-panel">
      <p className="career-panel__intro">
        Graduates of <strong style={{ color: 'var(--color-primary)' }}>{courseTitle}</strong> are
        equipped to work across a wide range of healthcare settings — from
        government hospitals and primary health centres to private
        diagnostic labs, nursing homes, and super-speciality hospitals.
      </p>

      {/* Career roles grid */}
      <div className="career-roles-grid">
        {opportunities.map((opp) => (
          <div key={opp.role} className="career-role-card">
            <div className="career-role-card__header">
              <h4 className="career-role-card__title">{opp.role}</h4>
              <span
                className={`career-role-card__sector-badge career-role-card__sector-badge--${opp.sector}`}
              >
                {sectorLabel[opp.sector]}
              </span>
            </div>
            <p className="career-role-card__desc">{opp.description}</p>
          </div>
        ))}
      </div>

      {/* Govt recruitment note */}
      <div className="career-panel__govt-note">
        <BuildingIcon />
        <div>
          <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
            Government Jobs Available
          </strong>
          Graduates with a registered diploma from UP Paramedical Council are
          eligible for government recruitment through UPSSSC (Uttar Pradesh
          Subordinate Services Selection Commission) and NHM (National Health
          Mission) for posts in government hospitals, PHCs, and CHCs. Many
          central government departments including ESIC and Railways also
          recruit paramedical technicians.
        </div>
      </div>
    </div>
  )
}

export default CareerScopeSection