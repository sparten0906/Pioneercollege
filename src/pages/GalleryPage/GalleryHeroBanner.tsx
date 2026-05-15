import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'

import { GALLERY_CATEGORIES } from '../../constants/dept-categories.constants'

interface GalleryHeroBannerProps {
  totalImages: number
}

const GalleryHeroBanner = ({ totalImages }: GalleryHeroBannerProps) => {
  /*
   * Count images per category for the stat card.
   * GALLERY_CATEGORIES[0] is 'all', so skip it and count from index 1.
   */
  const eventCount = GALLERY_CATEGORIES.length - 1 /* minus 'all' tab */

  return (
    <section className="gallery-hero">
      <div className="page-wrapper">
        <div style={{ marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
          <PageBreadcrumb items={[{ label: 'Gallery' }]} />
        </div>

        <div className="gallery-hero__inner">
          {/* Left — main content */}
          <div className="gallery-hero__content">
            <p className="gallery-hero__label">
              <span className="gallery-hero__label-line" />
              Campus Life
            </p>

            <h1 className="gallery-hero__title">
              A Glimpse Into <span>BBS Institute</span> Campus Life
            </h1>

            <p className="gallery-hero__desc">
              Browse photos from annual days, sports events, cultural
              programmes, convocations, and student workshops. Every image
              tells a story of learning, achievement, and community at BBS
              Institute.
            </p>
          </div>

          {/* Right — stats card */}
          <div className="gallery-hero__stats-card">
            <div className="gallery-hero__stat-item">
              <p className="gallery-hero__stat-value">{totalImages}+</p>
              <p className="gallery-hero__stat-label">Photos</p>
            </div>

            <div className="gallery-hero__stat-divider" />

            <div className="gallery-hero__stat-item">
              <p className="gallery-hero__stat-value">{eventCount}</p>
              <p className="gallery-hero__stat-label">Event Categories</p>
            </div>

            <div className="gallery-hero__stat-divider" />

            <div className="gallery-hero__stat-item">
              <p className="gallery-hero__stat-value">2+</p>
              <p className="gallery-hero__stat-label">Videos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryHeroBanner