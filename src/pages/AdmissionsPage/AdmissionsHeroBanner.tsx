import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import { admissionDates } from '../../data/admission-deadlines'
import { formatDay, formatMonthShort } from '../../utils/date-formatter'
import { getDocPath } from '../../utils/asset-path-resolver'

/* Scroll down to form anchor */
const scrollToForm = () => {
  const el = document.getElementById('admission-form-anchor')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const AdmissionsHeroBanner = () => {
  /* Find the last date for form submission from data */
  const lastDateEntry = admissionDates.find((d) => d.id === 'date-002')
  const lastDate = lastDateEntry?.date ?? '2025-07-15'

  return (
    <section className="admissions-hero">
      <div className="page-wrapper">
        <div style={{ marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
          <PageBreadcrumb items={[{ label: 'Admissions' }]} />
        </div>

        <div className="admissions-hero__inner">
          {/* Left — main content */}
          <div className="admissions-hero__content">
            <p className="admissions-hero__label">
              <span className="admissions-hero__label-line" />
              Session 2025–26
            </p>

            <h1 className="admissions-hero__title">
              Admissions Open for <span>All 16</span> Paramedical Diploma Programmes
            </h1>

            <p className="admissions-hero__desc">
              Begin your healthcare career with a recognised paramedical diploma
              from BBS Institute. Merit-based admissions, affordable fees, and
              strong placement support — no entrance exam required.
            </p>

            <div className="admissions-hero__actions">
              <PrimaryBtn
                onClick={scrollToForm}
                size="lg"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              >
                Submit Admission Enquiry
              </PrimaryBtn>
              <OutlineBtn
                href={getDocPath('admission-form-blank.pdf')}
                variant="white"
                size="lg"
                icon={<DownloadIcon />}
                external
              >
                Download Form
              </OutlineBtn>
            </div>
          </div>

          {/* Right — deadline card */}
          <div className="admissions-hero__deadline-card">
            <p className="admissions-hero__deadline-label">Last Date</p>
            <p className="admissions-hero__deadline-date">
              {formatDay(lastDate)}
            </p>
            <p className="admissions-hero__deadline-month">
              {formatMonthShort(lastDate)} 2025
            </p>
            <div className="admissions-hero__deadline-divider" />
            <p className="admissions-hero__deadline-sub">
              Last date for admission form submission for session 2025–26
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsHeroBanner
