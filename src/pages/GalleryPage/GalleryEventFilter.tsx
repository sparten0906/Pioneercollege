import type { ReactElement } from 'react'
import type { GalleryEventCategory } from '../../types/gallery.types'
import { GALLERY_CATEGORIES } from '../../constants/dept-categories.constants'
import { ALL_GALLERY_IMAGES } from '../../data/gallery-media'

interface GalleryEventFilterProps {
  activeCategory: GalleryEventCategory
  onChange:       (cat: GalleryEventCategory) => void
  totalCount:     number
}

/* Per-category icons */
const categoryIcons: Record<GalleryEventCategory, ReactElement> = {
  all: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  'annual-day': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  sports: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 8v4l3 3" />
    </svg>
  ),
  cultural: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  convocation: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  workshop: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
}

const GalleryEventFilter = ({
  activeCategory,
  onChange,
  totalCount,
}: GalleryEventFilterProps) => {
  /* Build count per category from raw data */
  const countMap: Partial<Record<GalleryEventCategory, number>> = {
    all: totalCount,
  }
  ALL_GALLERY_IMAGES.forEach((img) => {
    const cat = img.category as GalleryEventCategory
    countMap[cat] = (countMap[cat] ?? 0) + 1
  })

  return (
    <div
      className="gallery-event-filter"
      role="tablist"
      aria-label="Filter gallery by event category"
    >
      <span className="gallery-event-filter__label">Filter:</span>

      {GALLERY_CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat.value}
          className={`pill-tabs__item${activeCategory === cat.value ? ' is-active' : ''}`}
          onClick={() => onChange(cat.value)}
        >
          {categoryIcons[cat.value] && (
            <span className="pill-tabs__icon">
              {categoryIcons[cat.value]}
            </span>
          )}
          {cat.label}
          {(countMap[cat.value] ?? 0) > 0 && (
            <span className="pill-tabs__count">
              {cat.value === 'all' ? totalCount : (countMap[cat.value] ?? 0)}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default GalleryEventFilter