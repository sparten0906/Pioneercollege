import DiplomaCard from '../../components/card-components/DiplomaCard'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getFeatured } from '../../data/paramedical-courses'
import { ROUTES } from '../../constants/route-paths.constants'

const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
)

const FeaturedDiplomas = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>()
  const featured   = getFeatured(6)

  return (
    <section className="section featured-courses" aria-labelledby="featured-courses-heading">
      <div className="page-wrapper">
        <div className="featured-courses__header">
          <SectionTitleBlock
            title="Featured Diploma Courses"
            subtitle="Government-recognised paramedical diplomas with direct hospital placement support"
            align="left"
            accentWord="Diploma"
          />
          <OutlineBtn href={ROUTES.COURSES} icon={<GridIcon />}>View All 16 Courses</OutlineBtn>
        </div>
        <div ref={sectionRef} className="featured-courses__grid">
          {featured.map((course, i) => (
            <div key={course.id} className={`reveal-up stagger-${Math.min(i + 1, 6)}`}>
              <DiplomaCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDiplomas