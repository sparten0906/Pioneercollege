import type { DiplomaData } from '../../types/diploma.types'
import type { FilterTab } from '../../utils/diploma-filter'
import DiplomaCard from '../../components/card-components/DiplomaCard'
import DiplomaCardSkeleton from '../../components/card-components/DiplomaCardSkeleton'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface DiplomaCoursesGridProps {
  courses: DiplomaData[]
  activeTab: FilterTab
  onClearFilters: () => void
}

const GridIcon = () => (
  <svg className="diploma-grid-section__heading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const SearchXIcon = () => (
  <svg className="courses-no-results__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l6 6M14 8l-6 6" />
  </svg>
)

const DiplomaCoursesGrid = ({
  courses,
  activeTab,
  onClearFilters,
}: DiplomaCoursesGridProps) => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>({ deps: [courses, activeTab] })

  /* Heading label changes based on active filter */
  const headingMap: Record<FilterTab | string, string> = {
    all: 'All Diploma Programmes',
    'lab-technology': 'Lab Technology Courses',
    imaging: 'Medical Imaging Courses',
    ophthalmic: 'Ophthalmic Courses',
    'neuro-cardiac': 'Neuro & Cardiac Courses',
    'dental-ortho': 'Dental & Ortho Courses',
    'general-clinical': 'General Clinical Courses',
    counseling: 'Diploma Programmes',
  }

  const heading = headingMap[activeTab] ?? 'Diploma Programmes'

  /* Show skeleton when courses array is empty during initial load */
  const isInitialLoad = false // flip to `true` if you add async loading later

  return (
    <div className="diploma-grid-section" ref={sectionRef}>
      {/* Section header */}
      <div className="diploma-grid-section__header">
        <h2 className="diploma-grid-section__heading">
          <GridIcon />
          {heading}
          {courses.length > 0 && (
            <span className="diploma-grid-section__heading-count">
              ({courses.length})
            </span>
          )}
        </h2>
      </div>

      {/* Grid */}
      {isInitialLoad ? (
        /* Skeleton loading state */
        <div className="diploma-courses-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <DiplomaCardSkeleton key={i} />
          ))}
        </div>
      ) : courses.length > 0 ? (
        <div className="diploma-courses-grid">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`reveal-up stagger-${Math.min(index % 6 + 1, 8)}`}
            >
              <DiplomaCard course={course} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="diploma-courses-grid">
          <div className="courses-no-results">
            <SearchXIcon />
            <h3 className="courses-no-results__title">No courses found</h3>
            <p className="courses-no-results__desc">
              No diploma programmes match your current search or filter.
              Try adjusting your search term or selecting a different category.
            </p>
            <PrimaryBtn
              onClick={onClearFilters}
              size="md"
            >
              Clear Filters
            </PrimaryBtn>
          </div>
        </div>
      )}
    </div>
  )
}

export default DiplomaCoursesGrid