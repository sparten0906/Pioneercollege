import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import FacultyHeroBanner from './FacultyHeroBanner'
import DeptHeadSpotlight from './DeptHeadSpotlight'
import FacultyDeptFilter from './FacultyDeptFilter'
import FacultyMembersGrid from './FacultyMembersGrid'
import FacultyExpandModal from './FacultyExpandModal'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import type { FacultyMember } from '../../types/faculty.types'
import useFacultyFilter from '../../hooks/useFacultyFilter'
import useModalControl from '../../hooks/useModalControl'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getHODs } from '../../data/faculty-members'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import { ROUTES } from '../../constants/route-paths.constants'
import '../../styles/pages/faculty-page.css'

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const FacultyPage = () => {
  const containerRef = useRevealOnScroll<HTMLDivElement>()

  const {
    activeFilter,
    searchQuery,
    filteredFaculty,
    totalCount,
    setActiveFilter,
    setSearchQuery,
    clearFilters,
    hasActiveFilter,
  } = useFacultyFilter()

  /*
   * useModalControl — generic modal state manager from Phase 5.
   * open(member) sets data + opens modal.
   * close() closes modal and clears data after 300ms (animation buffer).
   * FacultyProfileModal reads modal.data to render the faculty details.
   */
  const modal = useModalControl<FacultyMember>()

  /* HODs for the spotlight section — pre-filtered, always shown */
  const hods = getHODs()

  return (
    <div ref={containerRef}>
      <SeoMetaTags {...SEO_PER_PAGE.faculty} />

      {/* 1. Hero */}
      <FacultyHeroBanner totalFaculty={filteredFaculty.length + hods.length} />

      {/* 2. HOD spotlight — always shown above filter */}
      <section className="section section--white">
        <div className="page-wrapper">
          <SectionTitleBlock
            title="Department Heads"
            subtitle="Meet the senior faculty leading each clinical and science department at BBS Institute."
            align="center"
            accentWord="Department Heads"
          />
          <DeptHeadSpotlight hods={hods} onMemberClick={modal.open} />
        </div>
      </section>

      {/* 3. All faculty — filter + grid */}
      <section className="section section--gray">
        <div className="page-wrapper">

          {/* Toolbar */}
          <div className="faculty-toolbar">
            <div className="faculty-toolbar__top">
              <p className="faculty-toolbar__title">
                All Faculty Members
                <span className="faculty-toolbar__count">
                  {' '}— <strong>{totalCount}</strong>{' '}
                  {totalCount === 1 ? 'member' : 'members'} found
                </span>
              </p>

              {/* Inline search */}
              <div className="faculty-search">
                <svg className="faculty-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="search"
                  className="faculty-search__input"
                  placeholder="Search by name, subject, or designation…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search faculty members"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="faculty-toolbar__divider" />

            {/* Dept filter */}
            <FacultyDeptFilter
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          {/* Grid */}
          <FacultyMembersGrid
            faculty={filteredFaculty}
            onMemberClick={modal.open}
            onClearFilters={clearFilters}
            hasActiveFilter={hasActiveFilter}
          />

          {/* Join us CTA */}
          <div className="faculty-join-banner reveal-up">
            <div className="faculty-join-banner__content">
              <h2 className="faculty-join-banner__title">
                Join Our Academic Team
              </h2>
              <p className="faculty-join-banner__desc">
                BBS Institute is always looking for experienced paramedical
                professionals, clinical instructors, and academic faculty to
                join our team. If you are passionate about teaching and
                healthcare education, we would love to hear from you.
              </p>
            </div>
            <div className="faculty-join-banner__actions">
              <OutlineBtn
                href={ROUTES.CONTACT}
                variant="white"
                size="lg"
                icon={<MailIcon />}
              >
                Send Your CV
              </OutlineBtn>
            </div>
          </div>

        </div>
      </section>

      {/* Faculty profile modal — rendered at top level so it can portal to body */}
      <FacultyExpandModal
        member={modal.data}
        isOpen={modal.isOpen}
        onClose={modal.close}
      />
    </div>
  )
}

export default FacultyPage
