
import AdmissionEnquiryForm from '../../components/form-fields/AdmissionEnquiryForm'
import { DOWNLOAD_LINKS } from '../../constants/institute.constants'
import { getDocPath } from '../../utils/asset-path-resolver'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const PDFIcon = () => (
  <svg className="admission-form-section__download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6h6" />
  </svg>
)

const DownloadArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', flexShrink: 0, color: 'var(--color-text-muted)' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-primary)', flexShrink: 0 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const AdmissionFormSection = () => {
  /*
   * useRevealOnScroll — wraps the section container.
   * The sidebar (.reveal-left) and form card (.reveal-right)
   * animate in from opposite sides when this section enters
   * the viewport, creating a split-reveal effect.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  return (
    <div
      className="admission-form-section"
      id="admission-form-anchor"
      ref={sectionRef}
    >
      {/* Left — info + downloads */}
      <div className="admission-form-section__info reveal-left">
        <h2 className="admission-form-section__info-title">
          Submit Your Admission Enquiry
        </h2>
        <p className="admission-form-section__info-desc">
          Fill in the form and our admissions team will contact you within
          24 hours to guide you through the next steps. You can also call
          us directly or walk into the campus — no appointment needed.
        </p>

        {/* Downloadable documents */}
        <div className="admission-form-section__downloads">
          {DOWNLOAD_LINKS.map((link) => (
            <a
              key={link.fileName}
              href={getDocPath(link.fileName)}
              download={link.fileName}
              className="admission-form-section__download-item"
              aria-label={`Download ${link.label}`}
            >
              <div className="admission-form-section__download-icon-wrap">
                <PDFIcon />
              </div>
              <div className="admission-form-section__download-text">
                <p className="admission-form-section__download-name">
                  {link.label}
                </p>
                <p className="admission-form-section__download-meta">
                  PDF · {link.fileSizeLabel ?? 'Download'}
                </p>
              </div>
              <DownloadArrowIcon />
            </a>
          ))}
        </div>

        {/* Call us strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-3)',
            padding: 'var(--space-4) var(--space-5)',
            background: 'var(--color-primary-ghost)',
            border: '1px solid var(--color-primary-pale)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <PhoneIcon />
          <div>
            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-1)',
              }}
            >
              Prefer to call?
            </p>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              Our admissions counselors are available{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>
                Monday–Saturday, 9 AM to 5 PM
              </strong>
              . No appointment needed for walk-in visits to our campus.
            </p>
          </div>
        </div>
      </div>

      {/* Right — form card */}
      <div className="admission-form-section__form-wrap reveal-right">
        <div className="admission-form-section__form-header">
          <h3 className="admission-form-section__form-title">
            Admission Enquiry Form — 2025–26
          </h3>
          <p className="admission-form-section__form-sub">
            All fields marked with * are required. We do not share your
            information with third parties.
          </p>
        </div>
        <div className="admission-form-section__form-body">
          <AdmissionEnquiryForm />
        </div>
      </div>
    </div>
  )
}

export default AdmissionFormSection
