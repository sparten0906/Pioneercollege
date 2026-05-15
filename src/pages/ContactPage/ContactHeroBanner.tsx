import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import { CONTACT_DETAILS } from '../../constants/institute.constants'

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ContactHeroBanner = () => {
  return (
    <section className="contact-hero">
      <div className="page-wrapper">
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <PageBreadcrumb items={[{ label: 'Contact Us' }]} />
        </div>

        <div className="contact-hero__inner">
          <p className="contact-hero__label">
            <span className="contact-hero__label-line" />
            Get In Touch
          </p>

          <h1 className="contact-hero__title">
            We're Here to{' '}
            <span>Help You</span>
          </h1>

          <p className="contact-hero__desc">
            Have questions about admissions, courses, or fees? Our team is ready
            to assist you. Reach out through the form below, call us, or walk
            into our campus — we are always happy to meet prospective students
            and their families.
          </p>

          {/* Quick contact pills */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              flexWrap: 'wrap',
              marginTop: 'var(--space-6)',
            }}
          >
            <a
              href={`tel:${CONTACT_DETAILS.phone[0].replace(/\s/g, '')}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-4)',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 'var(--radius-full)',
                color: '#fff',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
                transition: 'background var(--transition-fast)',
              }}
            >
              <PhoneIcon />
              {CONTACT_DETAILS.phone[0]}
            </a>

            <a
              href={`mailto:${CONTACT_DETAILS.email[0]}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-4)',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 'var(--radius-full)',
                color: '#fff',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
                transition: 'background var(--transition-fast)',
              }}
            >
              <MailIcon />
              {CONTACT_DETAILS.email[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeroBanner