import type { DiplomaData } from '../../types/diploma.types'
import { useState } from 'react'
import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import CourseCategoryBadge from '../../components/badge-elements/CourseCategoryBadge'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import { ROUTES, getCourseDetailPath } from '../../constants/route-paths.constants'

interface DiplomaDetailHeroProps {
  diploma: DiplomaData
}

const ClockIcon = () => (
  <svg className="course-detail-hero__stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
)

const UsersIcon = () => (
  <svg className="course-detail-hero__stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const GradCapIcon = () => (
  <svg className="course-detail-hero__stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4 4 4" />
  </svg>
)

const DiplomaDetailHero = ({ diploma }: DiplomaDetailHeroProps) => {
  const [shareLabel, setShareLabel] = useState('Copy Course Link')
  const courseDetailPath = getCourseDetailPath(diploma.slug)

  const resetShareLabel = () => {
    setTimeout(() => setShareLabel('Copy Course Link'), 2200)
  }

  const handleCopyCourseLink = () => {
    if (typeof window === 'undefined' || !navigator.clipboard) {
      setShareLabel('Link Unavailable')
      resetShareLabel()
      return
    }

    const absoluteCourseUrl = new URL(courseDetailPath, window.location.origin).toString()

    void navigator.clipboard.writeText(absoluteCourseUrl)
      .then(() => {
        setShareLabel('Link Copied')
        resetShareLabel()
      })
      .catch(() => {
        setShareLabel('Copy Failed')
        resetShareLabel()
      })
  }

  return (
    <section className="course-detail-hero">
      {/* Background image */}
      <img
        src={diploma.thumbnail}
        alt={diploma.title}
        className="course-detail-hero__bg-image"
        loading="eager"
        fetchPriority="high"
      />
      {/* Gradient overlay */}
      <div className="course-detail-hero__gradient" />

      <div className="page-wrapper">
        <div className="course-detail-hero__inner">

          {/* Breadcrumb */}
          <div className="course-detail-hero__breadcrumb-row">
            <PageBreadcrumb
              items={[
                { label: 'Courses', path: ROUTES.COURSES },
                { label: diploma.shortTitle },
              ]}
            />
          </div>

          {/* Short title pill + category badge */}
          <div className="course-detail-hero__meta-row">
            <span className="course-detail-hero__short-title">
              {diploma.shortTitle}
            </span>
            <CourseCategoryBadge category={diploma.category} />
          </div>

          {/* Full title */}
          <h1 className="course-detail-hero__title">{diploma.title}</h1>

          {/* Stats row */}
          <div className="course-detail-hero__stats-row">
            <span className="course-detail-hero__stat">
              <ClockIcon />
              <strong>{diploma.duration}</strong>
            </span>

            <span className="course-detail-hero__divider" aria-hidden="true" />

            <span className="course-detail-hero__stat">
              <UsersIcon />
              <strong>{diploma.totalSeats}</strong>&nbsp;Seats
            </span>

            <span className="course-detail-hero__divider" aria-hidden="true" />

            <span className="course-detail-hero__stat">
              <GradCapIcon />
              Min. <strong>{diploma.minPercentage}%</strong>&nbsp;in 10+2
            </span>

            <span className="course-detail-hero__divider" aria-hidden="true" />

            <span className="course-detail-hero__stat">
              Affiliated: <strong>{diploma.affiliation}</strong>
            </span>
          </div>

          {/* CTA buttons */}
          <div className="course-detail-hero__actions">
            <PrimaryBtn href={ROUTES.ADMISSIONS} size="lg">
              Apply for Admission
            </PrimaryBtn>
            <OutlineBtn
              variant="white"
              size="lg"
              icon={<ShareIcon />}
              onClick={handleCopyCourseLink}
            >
              {shareLabel}
            </OutlineBtn>
            <OutlineBtn
              href="/static-assets/downloadable-docs/bbs-prospectus-2024-25.pdf"
              variant="white"
              size="lg"
              icon={<DownloadIcon />}
              external
            >
              Download Prospectus
            </OutlineBtn>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DiplomaDetailHero
