import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import ResultsSearchBlock from './ResultLinksBlock'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import { ROUTES } from '../../constants/route-paths.constants'
import '../../styles/pages/results-page.css'

/* ---- Portal card data ---- */
interface PortalLink {
  name: string
  desc: string
  url: string
  btnText: string
}

const portalLinks: PortalLink[] = [
  {
    name: 'UP Paramedical Council — Official Results',
    desc: 'Check your semester exam result directly on the UP Paramedical Council (UPPC) official website. Results are published within 45 days of the examination date. You will need your roll number and date of birth to access your result.',
    url: 'https://www.upparamedicalcouncil.gov.in',
    btnText: 'Go to UPPC Website',
  },
  {
    name: 'UPSMF — Nursing & Pharmacy Results',
    desc: 'Students of D. Pharma, ANM, GNM, and BSc Nursing programmes can check their results on the UP State Medical Faculty (UPSMF) official portal. Roll number is required.',
    url: 'https://www.upsmfac.org',
    btnText: 'Go to UPSMF Website',
  },
]

/* ---- How to check steps ---- */
const steps = [
  {
    title: 'Visit the official results portal',
    desc: "Go to the UP Paramedical Council website or the relevant state examination body's portal using the links below.",
  },
  {
    title: 'Click on "Student Results" or "Result Declaration"',
    desc: 'Look for the results section on the homepage. Results are usually listed by examination batch and semester.',
  },
  {
    title: 'Enter your roll number and date of birth',
    desc: 'Type your examination roll number (as printed on your admit card) and your date of birth in DD/MM/YYYY format.',
  },
  {
    title: 'Download and save your marksheet',
    desc: 'View your result and download the official marksheet PDF. Keep a printed copy for your records and for any future verification.',
  },
  {
    title: 'Contact institute if result not found',
    desc: 'If your result is not available on the portal, contact the BBS Institute exam office with your admit card for assistance.',
  },
]

const GlobeIcon = () => (
  <svg className="results-portal-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const ResultsPage = () => {
  /*
   * useRevealOnScroll — wraps the portal links section.
   * Cards animate in with stagger as the section enters the viewport.
   */
  const portalRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  /*
   * useRevealOnScroll — wraps the how-to-check steps section.
   */
  const stepsRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  return (
    <>
      <SeoMetaTags {...SEO_PER_PAGE.results} />

      {/* ---- HERO ---- */}
      <section className="results-hero">
        <div className="page-wrapper">
          <div style={{ marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
            <PageBreadcrumb items={[{ label: 'Results' }]} />
          </div>

          <div className="results-hero__inner">
            <p className="results-hero__label">
              <span className="results-hero__label-line" />
              Examination Results
            </p>

            <h1 className="results-hero__title">
              Check Your <span>Exam Results</span>
            </h1>

            <p className="results-hero__desc">
              Results for all paramedical diploma programmes are declared by
              the UP Paramedical Council and affiliated examining bodies.
              Use the search tool below or visit the official portal directly.
            </p>
          </div>
        </div>
      </section>

      {/* ---- SEARCH / ROLL NUMBER TOOL ---- */}
      <section className="section section--gray" style={{ paddingTop: 'var(--space-16)' }}>
        <div className="page-wrapper">
          <ResultsSearchBlock />
        </div>
      </section>

      {/* ---- OFFICIAL PORTAL LINKS ---- */}
      <section className="section section--white">
        <div className="page-wrapper">
          <SectionTitleBlock
            title="Official Results Portals"
            subtitle="Results are published directly on government examination body websites. Use the links below to access your result."
            align="center"
            accentWord="Official"
          />

          <div className="results-portal-grid" ref={portalRef}>
            {portalLinks.map((portal, index) => (
              <div
                key={portal.name}
                className={`results-portal-card reveal-up stagger-${index + 1}`}
              >
                <div className="results-portal-card__icon-wrap">
                  <GlobeIcon />
                </div>
                <div>
                  <h3 className="results-portal-card__name">{portal.name}</h3>
                  <p className="results-portal-card__desc">{portal.desc}</p>
                </div>
                <div>
                  <PrimaryBtn
                    href={portal.url}
                    external
                    size="md"
                    icon={<ExternalIcon />}
                    iconPosition="right"
                  >
                    {portal.btnText}
                  </PrimaryBtn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- HOW TO CHECK YOUR RESULT ---- */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-12)',
              alignItems: 'start',
            }}
            ref={stepsRef}
          >
            {/* Left — steps */}
            <div className="reveal-left">
              <SectionTitleBlock
                title="How to Check Your Result"
                subtitle="Follow these steps to find your examination result on the official portal."
                align="left"
                accentWord="How to Check"
              />
              <div className="results-steps">
                {steps.map((step, index) => (
                  <div key={step.title} className="results-step-item">
                    <div className="results-step-item__number">{index + 1}</div>
                    <div className="results-step-item__content">
                      <p className="results-step-item__title">{step.title}</p>
                      <p className="results-step-item__desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — help box */}
            <div className="reveal-right">
              {/* Roll number help */}
              <div
                style={{
                  background: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-8)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-5)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-bold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    📋 Where is My Roll Number?
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    Your roll number is printed on your examination admit card,
                    which was issued by the institute before the examination.
                    It is also visible on your previous semester marksheet.
                    If you have lost your admit card, contact the institute
                    exam office with your Aadhaar and admission receipt.
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--color-primary-ghost)',
                    border: '1px solid var(--color-primary-pale)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4) var(--space-5)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-primary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
                    Results not yet declared?
                  </strong>
                  Results are typically declared 45–60 days after the examination
                  date. If the expected date has passed, check the institute
                  notice board or contact the exam cell.
                </div>
              </div>

              {/* Need help CTA */}
              <div
                style={{
                  background: 'var(--color-primary)',
                  borderRadius: '3px',
                  padding: '7px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-bold)',
                    color: '#fff',
                  }}
                >
                  Need Help with Your Result?
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255,255,255,0.80)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  For result-related queries, exam re-checking requests,
                  or marksheet corrections, contact the institute examination
                  cell during office hours — Monday to Saturday, 9 AM to 5 PM.
                </p>
                <OutlineBtn
                  href={ROUTES.CONTACT}
                  variant="white"
                  size="md"
                >
                  Contact Exam Cell
                </OutlineBtn>
              </div>
            </div>
          </div>

          {/* Responsive fix for the two-column grid */}
          <style>{`
            @media (max-width: 768px) {
              .results-how-to-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ---- RECHECK / MARKSHEET REQUEST ---- */}
      <section className="section section--white">
        <div className="page-wrapper">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-primary-ghost) 100%)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-10)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-8)',
              flexWrap: 'wrap',
            }}
            className="reveal-up"
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Marksheet Collection & Re-checking Requests
              </p>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  maxWidth: '580px',
                }}
              >
                Original marksheets and certificates are issued by the institute
                after result declaration. Students can apply for re-checking
                or supplementary examination through the institute exam office.
                Visit the Notifications page for latest updates on marksheet
                distribution schedules.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', flexShrink: 0 }}>
              <PrimaryBtn href={ROUTES.NOTIFICATIONS} size="md">
                View Notices
              </PrimaryBtn>
              <OutlineBtn href={ROUTES.CONTACT} size="md">
                Contact Us
              </OutlineBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResultsPage