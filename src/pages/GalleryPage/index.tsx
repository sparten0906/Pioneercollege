import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import GalleryHeroBanner from './GalleryHeroBanner'
import GalleryEventFilter from './GalleryEventFilter'
import MasonryPhotoGrid from './MasonryPhotoGrid'
import YoutubeVideosBlock from './YoutubeVideosBlock'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import LightboxPortal from '../../components/media-elements/LightboxPortal'
import DecorativeDivider from '../../components/section-blocks/DecorativeDivider'
import useGalleryFilter from '../../hooks/useGalleryFilter'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import '../../styles/pages/gallery-page.css'

const GalleryPage = () => {
  const {
    activeCategory,
    filteredImages,
    totalCount,
    lightboxIndex,
    setActiveCategory,
    openLightbox,
    closeLightbox,
    goToPrev,
    goToNext,
  } = useGalleryFilter()

  /* Resolve the current lightbox image from filtered list */
  const lightboxImage =
    lightboxIndex !== null ? filteredImages[lightboxIndex] ?? null : null

  return (
    <>
      <SeoMetaTags {...SEO_PER_PAGE.gallery} />

      {/* 1. Hero */}
      <GalleryHeroBanner totalImages={totalCount} />

      {/* 2. Masonry grid + filter */}
      <section className="section section--gray">
        <div className="page-wrapper">

          {/* Toolbar: count + category filter */}
          <div className="gallery-toolbar">
            <p className="gallery-toolbar__count">
              Showing <strong>{filteredImages.length}</strong>{' '}
              {filteredImages.length === 1 ? 'photo' : 'photos'}
              {activeCategory !== 'all' && (
                <span style={{ color: 'var(--color-text-muted)' }}>
                  {' '}in this category
                </span>
              )}
            </p>

            <GalleryEventFilter
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              totalCount={totalCount}
            />
          </div>

          {/* Masonry photo grid */}
          <MasonryPhotoGrid
            key={activeCategory}
            images={filteredImages}
            onImageClick={openLightbox}
          />

        </div>
      </section>

      {/* Divider */}
      <div className="page-wrapper">
        <DecorativeDivider variant="dots" />
      </div>

      {/* 3. YouTube videos section */}
      <section className="section section--white">
        <div className="page-wrapper">
          <SectionTitleBlock
            title="BBS on YouTube"
            subtitle="Watch campus tours, event highlights, and student success stories on our YouTube channel."
            align="center"
            accentWord="YouTube"
          />
          <YoutubeVideosBlock />
        </div>
      </section>

      {/* Fullscreen Lightbox — portals to document.body */}
      <LightboxPortal
        image={lightboxImage}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  )
}

export default GalleryPage