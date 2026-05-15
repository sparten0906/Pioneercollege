import { useState, useMemo, useCallback } from 'react'
import type { GalleryImage, GalleryEventCategory } from '../types/gallery.types'
import { ALL_GALLERY_IMAGES } from '../data/gallery-media'

interface UseGalleryFilterReturn {
  activeCategory:    GalleryEventCategory
  filteredImages:    GalleryImage[]
  totalCount:        number
  lightboxIndex:     number | null
  setActiveCategory: (cat: GalleryEventCategory) => void
  openLightbox:      (index: number) => void
  closeLightbox:     () => void
  goToPrev:          () => void
  goToNext:          () => void
}

/**
 * Manages category filter + lightbox state for the Gallery page.
 * Lightbox prev/next wraps around the filtered image list.
 *
 * Usage:
 *   const {
 *     filteredImages, activeCategory, setActiveCategory,
 *     lightboxIndex, openLightbox, closeLightbox, goToPrev, goToNext,
 *   } = useGalleryFilter()
 */
const useGalleryFilter = (): UseGalleryFilterReturn => {
  const [activeCategory, setActiveCategory] = useState<GalleryEventCategory>('all')
  const [lightboxIndex,  setLightboxIndex]  = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return ALL_GALLERY_IMAGES
    return ALL_GALLERY_IMAGES.filter((img) => img.category === activeCategory)
  }, [activeCategory])

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? filteredImages.length - 1 : prev - 1
    })
  }, [filteredImages.length])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      return prev === filteredImages.length - 1 ? 0 : prev + 1
    })
  }, [filteredImages.length])

  // Reset lightbox when category changes
  const handleCategoryChange = useCallback((cat: GalleryEventCategory) => {
    setActiveCategory(cat)
    setLightboxIndex(null)
  }, [])

  return {
    activeCategory,
    filteredImages,
    totalCount:        filteredImages.length,
    lightboxIndex,
    setActiveCategory: handleCategoryChange,
    openLightbox,
    closeLightbox,
    goToPrev,
    goToNext,
  }
}

export default useGalleryFilter