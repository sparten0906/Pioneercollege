import type { DiplomaData } from '../../types/diploma.types'

interface CourseOverviewPanelProps {
  diploma: DiplomaData
}

const CheckCircleIcon = () => (
  <svg
    className="overview-panel__highlight-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CourseOverviewPanel = ({ diploma }: CourseOverviewPanelProps) => {
  return (
    <div className="overview-panel">
      <p className="overview-panel__desc">{diploma.description}</p>

      <h3 className="overview-panel__highlights-title">
        Course Highlights
      </h3>

      <div className="overview-panel__highlights">
        {diploma.highlights.map((highlight) => (
          <div key={highlight} className="overview-panel__highlight-item">
            <CheckCircleIcon />
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      {/* Recognised by */}
      {diploma.recognizedBy.length > 0 && (
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
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Recognised By
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
            }}
          >
            {diploma.recognizedBy.map((body) => (
              <span
                key={body}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: '4px 12px',
                  background: 'var(--color-primary-ghost)',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-semibold)',
                  border: '1px solid var(--color-primary-pale)',
                }}
              >
                {body}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseOverviewPanel