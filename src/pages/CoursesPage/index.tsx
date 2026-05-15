import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import CoursesHeroBanner from './CoursesHeroBanner'
import CourseSearchInput from './CourseSearchInput'
import DiplomaCourseFilter from './DiplomaCourseFilter'
import DiplomaCoursesGrid from './DiplomaCoursesGrid'
import CounselingServicesGrid from './CounselingServicesGrid'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import useDiplomaFilter from '../../hooks/useDiplomaFilter'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import { ROUTES } from '../../constants/route-paths.constants'
import '../../styles/pages/courses-page.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'



const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const CoursesPage = () => {
  const {
    activeTab,
    searchQuery,
    filteredDiplomas,
    filteredCounseling,
    totalResults,
    setActiveTab,
    setSearchQuery,
    clearFilters,
    hasActiveFilter,
  } = useDiplomaFilter()

  const revealRef = useRevealOnScroll<HTMLDivElement>({
    deps: [filteredDiplomas, filteredCounseling, activeTab, searchQuery]
  })

  return (
    <div ref={revealRef}>
      <SeoMetaTags {...SEO_PER_PAGE.courses} />

      {/* 1. Hero */}
      <div className="reveal-up">
        <CoursesHeroBanner />
      </div>

      {/* 2. Main content */}
      <section className="section section--gray">
        <div className="page-wrapper">

          {/* Toolbar: search + filter */}
          <div className="courses-toolbar">
            <div className="courses-toolbar__top">
              <p className="courses-toolbar__title">
                Browse Courses{' '}
                <span className="courses-toolbar__count">
                  — <strong>{totalResults}</strong>{' '}
                  {totalResults === 1 ? 'programme' : 'programmes'} found
                </span>
              </p>
              <CourseSearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={clearFilters}
                hasActiveFilter={hasActiveFilter}
              />
            </div>

            <div className="courses-toolbar__divider" />

            <DiplomaCourseFilter
              activeTab={activeTab}
              onChange={setActiveTab}
              diplomaCount={filteredDiplomas.length}
              counselingCount={filteredCounseling.length}
            />
          </div>

          {/* 3. Diploma courses grid — hidden when Counseling tab is active */}
          {activeTab !== 'counseling' && (
            <DiplomaCoursesGrid
              courses={filteredDiplomas}
              activeTab={activeTab}
              onClearFilters={clearFilters}
            />
          )}

          {/* 4. Counseling section — only shown when relevant */}
          {(activeTab === 'all' || activeTab === 'counseling') && (
            <CounselingServicesGrid programs={filteredCounseling} />
          )}

          {/* 5. Bottom CTA banner */}
          <div className="courses-cta-banner reveal-up">
            <div className="courses-cta-banner__content">
              <h2 className="courses-cta-banner__title">
                Not sure which course is right for you?
              </h2>
              <p className="courses-cta-banner__desc">
                Our admissions counselors are available Monday to Saturday,
                9 AM to 5 PM. Call us or fill out the admission enquiry form
                and we will guide you to the best programme based on your
                background and career goals.
              </p>
            </div>
            <div className="courses-cta-banner__actions">
              <PrimaryBtn
                href={ROUTES.ADMISSIONS}
                size="lg"
                variant="accent"
              >
                Apply Now
              </PrimaryBtn>
              <OutlineBtn
                href={ROUTES.CONTACT}
                size="lg"
                variant="white"
                icon={<PhoneIcon />}
              >
                Talk to Us
              </OutlineBtn>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default CoursesPage