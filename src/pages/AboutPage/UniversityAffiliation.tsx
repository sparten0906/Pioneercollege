import { getLogo, getAboutImage } from '../../utils/asset-path-resolver'
import { INSTITUTE } from '../../constants/institute.constants'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import { ROUTES } from '../../constants/route-paths.constants'

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const DocumentIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    style={{ color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const UniversityAffiliation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

      {/* Main affiliation CTA block */}
      <div className="affiliation-block reveal-up">
        {/* Logo */}
        <div className="affiliation-block__logo-wrap">
          <img
            src={getLogo('affiliated-university-logo.svg')}
            alt="Affiliated University logo"
            className="affiliation-block__logo"
            width="70"
            height="70"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="affiliation-block__content">
          <p className="affiliation-block__label">University Affiliation</p>
          <h2 className="affiliation-block__name">{INSTITUTE.affiliation}</h2>
          <p className="affiliation-block__desc">
            All diploma programmes at {INSTITUTE.name} are conducted under the
            affiliation of the UP Paramedical Council, Lucknow — the statutory
            body constituted by the Government of Uttar Pradesh. This
            affiliation ensures that our diplomas are recognised across all
            government and private healthcare institutions in India.
          </p>
        </div>

        {/* CTA */}
        <div className="affiliation-block__cta">
          <OutlineBtn
            href={ROUTES.ADMISSIONS}
            variant="white"
            icon={<ExternalLinkIcon />}
            size="lg"
          >
            Apply Now
          </OutlineBtn>
        </div>
      </div>

      {/* Affiliation document visual strip */}
      <div
        className="reveal-up"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 0,
          borderRadius: 'var(--radius-2xl)',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {/* Left — text side */}
        <div
          style={{
            background: 'var(--color-primary-ghost)',
            padding: 'var(--space-8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'var(--space-4)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-bold)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}
          >
            Affiliation Document
          </p>

          <h3
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            Official Affiliation Letter — UP Paramedical Council
          </h3>

          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            The official affiliation document issued by the UP Paramedical
            Council confirms BBS Institute's authorisation to conduct
            paramedical diploma programmes. Students can request a verified
            copy from the institute registrar for admission or employment
            purposes.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              width: 'fit-content',
            }}
          >
            <DocumentIcon />
            <span
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)',
                color: '#fff',
              }}
            >
              Affiliation renewed annually
            </span>
          </div>
        </div>

        {/* Right — document image */}
        <div style={{ position: 'relative', minHeight: '280px' }}>
          <img
            src={getAboutImage('affiliation-document.webp')}
            alt="BBS Institute affiliation document from UP Paramedical Council"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Responsive fix */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default UniversityAffiliation