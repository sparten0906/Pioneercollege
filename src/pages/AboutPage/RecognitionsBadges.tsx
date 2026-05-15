import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { getAboutImage } from '../../utils/asset-path-resolver'

interface Recognition {
  name:        string
  description: string
  logoKey:     string
  badgeText:   string
  badgeColor:  string
}

const recognitions: Recognition[] = [
  {
    name:        'UP Paramedical Council',
    description:
      'All 16 diploma programmes are fully approved and recognised by the UP Paramedical Council, Lucknow — the statutory body governing paramedical education in Uttar Pradesh.',
    logoKey:     'paramedical-council-logo.svg',
    badgeText:   'Approved',
    badgeColor:  'var(--color-success)',
  },
  {
    name:        'Ministry of Health & Family Welfare',
    description:
      'Recognised by the Ministry of Health & Family Welfare, Government of India — ensuring our graduates are eligible for central and state government paramedical recruitment.',
    logoKey:     'ministry-health-logo.svg',
    badgeText:   'Recognised',
    badgeColor:  'var(--color-primary)',
  },
  {
    name:        'Affiliated University',
    description:
      'Academic programmes affiliated with a recognised state university ensuring the academic credibility and portability of all diplomas awarded by BBS Institute.',
    logoKey:     'affiliated-university-logo.svg',
    badgeText:   'Affiliated',
    badgeColor:  'var(--color-accent)',
  },
]

const ShieldIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color: 'var(--color-text-light)' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const TickIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const RecognitionsBadges = () => {
  return (
    <div className="recognitions">
      <SectionTitleBlock
        title="Recognitions & Accreditations"
        subtitle="Our credentials that validate the quality and credibility of every diploma we award."
        align="center"
        accentWord="Accreditations"
      />

      {/* Recognition cards row */}
      <div className="recognitions__grid">
        {recognitions.map((rec) => (
          <div key={rec.name} className="recognition-card reveal-up">
            <div className="recognition-card__logo-wrap">
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldIcon />
              </div>
            </div>
            <h3 className="recognition-card__name">{rec.name}</h3>
            <p className="recognition-card__desc">{rec.description}</p>
            <div className="recognition-card__badge">
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-bold)',
                  background: `${rec.badgeColor}18`,
                  color: rec.badgeColor,
                  border: `1px solid ${rec.badgeColor}30`,
                }}
              >
                <TickIcon />
                {rec.badgeText}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate proof image */}
      <div
        className="reveal-up"
        style={{
          marginTop: 'var(--space-12)',
          borderRadius: 'var(--radius-2xl)',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}
      >
        {/* Left — Certificate image */}
        <div style={{ position: 'relative' }}>
          <img
            src={getAboutImage('accreditation-certificate.webp')}
            alt="BBS Institute Accreditation Certificate"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, transparent 60%, var(--color-bg-secondary))',
            }}
          />
        </div>

        {/* Right — Text */}
        <div
          style={{
            background: 'var(--color-bg-secondary)',
            padding: 'var(--space-8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-bold)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Official Documentation
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-3)',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            Accreditation Certificate — UP Paramedical Council
          </h3>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Our official recognition certificate issued by the UP Paramedical
            Council confirms that all diploma programmes offered at BBS
            Institute meet the statutory standards required under the UP
            Paramedical Education Act. This certification is renewed annually
            following inspection and compliance review.
          </p>
        </div>
      </div>

      {/* Responsive fix for certificate grid */}
      <style>{`
        @media (max-width: 768px) {
          .recognitions .reveal-up > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default RecognitionsBadges