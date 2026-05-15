import { Link } from 'react-router-dom'
import { getAboutImage } from '../../utils/asset-path-resolver'
import { INSTITUTE } from '../../constants/institute.constants'
import { ROUTES } from '../../constants/route-paths.constants'
import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const AboutHeroBanner = () => {
  const yearsRunning = new Date().getFullYear() - INSTITUTE.established

  return (
    <section className="about-hero">
      <div className="page-wrapper">
        {/* Breadcrumb */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <PageBreadcrumb
            items={[{ label: 'About Us' }]}
          />
        </div>

        <div className="about-hero__inner">
          {/* Left content */}
          <div>
            <p className="about-hero__label">
              <span className="about-hero__label-line" />
              Who We Are
            </p>

            <h1 className="about-hero__title">
              Shaping India's{' '}
              <span>Paramedical</span>{' '}
              Professionals
            </h1>

            <p className="about-hero__desc">
              {INSTITUTE.name} has been a trusted name in paramedical education
              since {INSTITUTE.established}. We offer 16 diploma programmes
              recognised by the UP Paramedical Council and the Ministry of
              Health & Family Welfare.
            </p>

            <div className="about-hero__stats">
              <div className="about-hero__stat">
                <span className="about-hero__stat-value">{yearsRunning}+</span>
                <span className="about-hero__stat-label">Years of Excellence</span>
              </div>
              <div className="about-hero__stat">
                <span className="about-hero__stat-value">16</span>
                <span className="about-hero__stat-label">Diploma Courses</span>
              </div>
              <div className="about-hero__stat">
                <span className="about-hero__stat-value">2000+</span>
                <span className="about-hero__stat-label">Students Trained</span>
              </div>
            </div>

            <div className="about-hero__actions">
              <Link to={ROUTES.COURSES} className="btn btn--white btn--lg">
                Explore Courses
                <span className="btn__icon" aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="about-hero__image-wrap">
            <div className="about-hero__image-card">
              <img
                src={getAboutImage('college-building-front.webp')}
                alt="BBS Institute campus building"
                className="about-hero__image"
                loading="eager"
              />
            </div>
            <div className="about-hero__image-badge">
              <span className="about-hero__image-badge-value">92%</span>
              <span className="about-hero__image-badge-label">Placement Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroBanner
