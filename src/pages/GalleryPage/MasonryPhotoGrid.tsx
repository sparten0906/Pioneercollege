import type { GalleryImage } from '../../types/gallery.types'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface MasonryPhotoGridProps {
  images:       GalleryImage[]
  onImageClick: (index: number) => void
}

const ZoomIcon = () => (
  <svg
    className="masonry-item__zoom-icon-svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" />
  </svg>
)

const PhotoIcon = () => (
  <svg
    className="gallery-empty__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const MasonryPhotoGrid = ({
  images,
  onImageClick,
}: MasonryPhotoGridProps) => {
  /*
   * useRevealOnScroll — wraps the masonry grid container.
   *
   * The reveal classes on individual items work differently here
   * compared to flex/grid layouts. Because masonry uses CSS `columns`,
   * we apply .reveal on the whole grid rather than individual items.
   * This fades the entire grid in as a unit, which avoids layout
   * jank that can occur when individual masonry items animate
   * independently and affect column heights.
   *
   * threshold: 0.06 — fires early since the masonry grid is tall
   * rootMargin: gives an extra 60px trigger buffer so the grid
   *             starts fading in slightly before the top edge
   *             reaches the viewport boundary
   * once: true — plays only once per page load / filter change
   */
  const gridRef = useRevealOnScroll<HTMLDivElement>({
    threshold:  0.06,
    rootMargin: '0px 0px -60px 0px',
    once:       true,
  })

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <PhotoIcon />
        <h3 className="gallery-empty__title">No photos in this category</h3>
        <p className="gallery-empty__desc">
          No gallery images are available for the selected event category.
          Try selecting a different category or view all photos.
        </p>
        <PrimaryBtn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="md">
          View All Photos
        </PrimaryBtn>
      </div>
    )
  }

  return (
    /*
     * The outer div holds the IntersectionObserver ref.
     * useRevealOnScroll observes *children* with .reveal classes,
     * so the .reveal class must be on a child — not on the ref element.
     * The inner wrapper carries .reveal so the hook picks it up.
     */
    <div ref={gridRef} className="masonry-section">
      <div className="reveal">
        <div className="masonry-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="masonry-item"
              onClick={() => onImageClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${image.alt} in fullscreen`}
              onKeyDown={(e) => e.key === 'Enter' && onImageClick(index)}
            >
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="masonry-item__image"
                loading="lazy"
                decoding="async"
              />

              {/* Hover overlay with caption */}
              <div className="masonry-item__overlay">
                {image.caption && (
                  <p className="masonry-item__caption">{image.caption}</p>
                )}
                <p className="masonry-item__event-tag">{image.eventName}</p>
              </div>

              {/* Zoom icon badge */}
              <div className="masonry-item__zoom-icon" aria-hidden="true">
                <ZoomIcon />
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 'var(--space-6)',
            textAlign: 'center',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-muted)',
          }}
        >
          Click any photo to view it in fullscreen. Use arrow keys or swipe to navigate.
        </p>
      </div>
    </div>
  )
}

export default MasonryPhotoGrid