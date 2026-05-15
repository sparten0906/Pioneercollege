import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import { INSTITUTE } from '../../constants/institute.constants'

const BookIcon = () => (
  <svg className="courses-hero__pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const ClockIcon = () => (
  <svg className="courses-hero__pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="courses-hero__pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="courses-hero__pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
)

const CoursesHeroBanner = () => {
  return (
    <section className="courses-hero">
      <div className="page-wrapper">
        {/* Breadcrumb */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <PageBreadcrumb items={[{ label: 'Courses' }]} />
        </div>

        <div className="courses-hero__inner">
          <p className="courses-hero__label reveal-up">
            <span className="courses-hero__label-line" />
            Paramedical Programmes
          </p>

          <h1 className="courses-hero__title reveal-up stagger-1">
            <span>{INSTITUTE.totalCourses}</span> Diploma Courses
            in Paramedical Sciences
          </h1>

          <p className="courses-hero__desc reveal-up stagger-2">
            All programmes are approved by the UP Paramedical Council and
            recognised by the Ministry of Health &amp; Family Welfare,
            Government of India. Choose a course that matches your interests
            and build a career in healthcare.
          </p>

          {/* Highlight pills */}
          <div className="courses-hero__pills reveal-up stagger-3">
            <span className="courses-hero__pill">
              <BookIcon />
              1 &amp; 2 Year Diplomas
            </span>
            <span className="courses-hero__pill">
              <ClockIcon />
              Morning &amp; Evening Batches
            </span>
            <span className="courses-hero__pill">
              <ShieldIcon />
              UP Paramedical Council Approved
            </span>
            <span className="courses-hero__pill">
              <BriefcaseIcon />
              92% Placement Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesHeroBanner