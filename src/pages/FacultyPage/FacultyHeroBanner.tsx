import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'

interface FacultyHeroBannerProps {
  totalFaculty: number
}

const FacultyHeroBanner = ({ totalFaculty }: FacultyHeroBannerProps) => {
  return (
    <section className="faculty-hero">
      <div className="page-wrapper">
        <div style={{ marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
          <PageBreadcrumb items={[{ label: 'Faculty' }]} />
        </div>

        <div className="faculty-hero__inner">
          <p className="faculty-hero__label">
            <span className="faculty-hero__label-line" />
            Meet the Team
          </p>

          <h1 className="faculty-hero__title">
            Expert Faculty, <span>Real Clinical</span> Experience
          </h1>

          <p className="faculty-hero__desc">
            Our faculty are not just academics — they are practicing healthcare
            professionals who bring clinical expertise, research insights, and
            industry knowledge directly into the paramedical classroom.
          </p>

          <div className="faculty-hero__stats">
            <div className="faculty-hero__stat">
              <span className="faculty-hero__stat-value">{totalFaculty}+</span>
              <span className="faculty-hero__stat-label">Faculty Members</span>
            </div>
            <div className="faculty-hero__stat">
              <span className="faculty-hero__stat-value">15+</span>
              <span className="faculty-hero__stat-label">Avg. Years Experience</span>
            </div>
            <div className="faculty-hero__stat">
              <span className="faculty-hero__stat-value">MD / PhD</span>
              <span className="faculty-hero__stat-label">Qualified HODs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacultyHeroBanner