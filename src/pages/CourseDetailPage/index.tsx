import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import DiplomaDetailHero from './DiplomaDetailHero'
import CourseOverviewPanel from './CourseOverviewPanel'
import SyllabusAccordion from './SyllabusAccordion'
import EligibilityCriteria from './EligibilityCriteria'
import DurationFeesBlock from './DurationFeesBlock'
import CareerScopeSection from './CareerScopeSection'
import RelatedDiplomas from './RelatedDiplomas'
import DiplomaEnquiryWidget from './DiplomaEnquiryWidget'
import ContentPanelTabs from '../../components/tab-elements/ContentPanelTabs'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import { findBySlug, getRelatedDiplomas, ALL_DIPLOMAS } from '../../data/paramedical-courses'
import { counselingPrograms } from '../../data/counseling-programs/counseling.data'
import { ROUTES } from '../../constants/route-paths.constants'
import { trackCourseView } from '../../services/analytics-service'
import '../../styles/pages/course-detail-page.css'

/* ---- Icons for content tabs ---- */
const OverviewIcon = () => (
  <svg className="detail-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const SyllabusIcon = () => (
  <svg className="detail-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
)

const EligibilityIcon = () => (
  <svg className="detail-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const FeesIcon = () => (
  <svg className="detail-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const CareerIcon = () => (
  <svg className="detail-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
)

const NotFoundIcon = () => (
  <svg className="course-not-found__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l6 6M14 8l-6 6" />
  </svg>
)

const CourseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()


  /* ---- Find the diploma by slug ---- */
  const diploma = slug ? findBySlug(slug) : undefined

  /* Also check if it's a counseling programme slug */
  const counselingProgram = !diploma && slug
    ? counselingPrograms.find((p) => p.slug === slug)
    : undefined

  /* Track page view */
  useEffect(() => {
    if (diploma) {
      trackCourseView(diploma.slug, diploma.title)
    }
  }, [diploma])

  /* ---- Not found state ---- */
  if (!diploma && !counselingProgram) {
    return (
      <>
        <SeoMetaTags
          title="Course Not Found | BBS Institute"
          description="The course you are looking for could not be found."
        />
        <div className="course-not-found" style={{ paddingTop: 'calc(var(--navbar-height) + var(--space-8))' }}>
          <NotFoundIcon />
          <h1 className="course-not-found__title">Course Not Found</h1>
          <p className="course-not-found__desc">
            The diploma programme you are looking for does not exist or
            may have been removed. Browse all our courses below.
          </p>
          <PrimaryBtn href={ROUTES.COURSES} size="lg">
            Browse All Courses
          </PrimaryBtn>
        </div>
      </>
    )
  }

  /* ---- Counseling programme redirect to a simple detail view ---- */
  if (counselingProgram) {
    return (
      <>
        <SeoMetaTags
          title={`${counselingProgram.fullTitle} | BBS Institute`}
          description={counselingProgram.description}
        />
        <div style={{ paddingTop: 'var(--navbar-height)' }}>
          <section className="section section--white">
            <div className="page-wrapper">
              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>
                {counselingProgram.fullTitle}
              </h1>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)', maxWidth: '680px' }}>
                {counselingProgram.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                {[
                  { label: 'Duration', value: counselingProgram.duration },
                  { label: 'Eligibility', value: counselingProgram.eligibility },
                  { label: 'Counseling Body', value: counselingProgram.externalCounselingBody },
                ].map((item) => (
                  <span key={item.label} style={{
                    display: 'inline-flex', gap: '4px', alignItems: 'center',
                    fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
                    background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)', padding: '4px 10px',
                  }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{item.label}:</strong>&nbsp;{item.value}
                  </span>
                ))}
              </div>
              <PrimaryBtn href={ROUTES.ADMISSIONS} size="lg">
                Get Counseling Guidance
              </PrimaryBtn>
            </div>
          </section>
        </div>
      </>
    )
  }

  /* ---- Related diplomas (same category, excluding current) ---- */
  const related = getRelatedDiplomas(ALL_DIPLOMAS, diploma!.slug, diploma!.category, 3)

  /* ---- Tab definitions ---- */
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <OverviewIcon />,
      content: <CourseOverviewPanel diploma={diploma!} />,
    },
    {
      id: 'syllabus',
      label: 'Syllabus',
      icon: <SyllabusIcon />,
      content: <SyllabusAccordion syllabus={diploma!.syllabus} duration={diploma!.duration} />,
    },
    {
      id: 'eligibility',
      label: 'Eligibility',
      icon: <EligibilityIcon />,
      content: <EligibilityCriteria diploma={diploma!} />,
    },
    {
      id: 'fees',
      label: 'Fees',
      icon: <FeesIcon />,
      content: <DurationFeesBlock diploma={diploma!} />,
    },
    {
      id: 'career',
      label: 'Career Scope',
      icon: <CareerIcon />,
      content: <CareerScopeSection opportunities={diploma!.careerOpportunities} courseTitle={diploma!.title} />,
    },
  ]

  return (
    <>
      <SeoMetaTags
        title={`${diploma!.title} | BBS Institute`}
        description={diploma!.description}
        keywords={`${diploma!.title}, ${diploma!.shortTitle}, paramedical diploma UP, ${diploma!.category}`}
      />

      {/* 1. Hero */}
      <DiplomaDetailHero diploma={diploma!} />

      {/* 2. Main layout: tabs + sidebar */}
      <section className="section section--white">
        <div className="page-wrapper">
          <div className="course-detail-layout">

            {/* Left — tabbed content */}
            <div className="course-detail-main">
              <ContentPanelTabs tabs={tabs} defaultTab="overview" />
            </div>

            {/* Right — sticky sidebar */}
            <aside className="course-detail-sidebar">
              <DiplomaEnquiryWidget courseTitle={diploma!.title} />
              <QuickInfoCard diploma={diploma!} />
            </aside>

          </div>
        </div>
      </section>

      {/* 3. Related courses */}
      {related.length > 0 && (
        <section className="section section--gray">
          <div className="page-wrapper">
            <RelatedDiplomas courses={related} />
          </div>
        </section>
      )}
    </>
  )
}

/* ---- Inline QuickInfoCard — lives in index to keep sidebar tidy ---- */
interface QuickInfoCardProps {
  diploma: NonNullable<ReturnType<typeof findBySlug>>
}

const ClockIcon = () => (
  <svg className="quick-info-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
)

const UsersIcon = () => (
  <svg className="quick-info-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const GradCapIcon = () => (
  <svg className="quick-info-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="quick-info-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const RupeeIcon = () => (
  <svg className="quick-info-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 010 6h-1l4 4M9 8a3 3 0 000 6h1" />
  </svg>
)

const QuickInfoCard = ({ diploma }: QuickInfoCardProps) => {
  const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`

  const rows = [
    { icon: <ClockIcon />, label: 'Duration', value: diploma.duration },
    { icon: <UsersIcon />, label: 'Total Seats', value: `${diploma.totalSeats} seats` },
    { icon: <GradCapIcon />, label: 'Eligibility', value: diploma.eligibility },
    { icon: <ShieldIcon />, label: 'Affiliated to', value: diploma.affiliation },
    { icon: <RupeeIcon />, label: 'Total Fee', value: formatINR(diploma.fees.totalFee) },
  ]

  return (
    <div className="quick-info-card">
      <div className="quick-info-card__header">
        <h3 className="quick-info-card__title">Course at a Glance</h3>
      </div>
      <div className="quick-info-card__body">
        {rows.map((row) => (
          <div key={row.label} className="quick-info-card__row">
            {row.icon}
            <div>
              <p className="quick-info-card__row-label">{row.label}</p>
              <p className="quick-info-card__row-value">{row.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetailPage
