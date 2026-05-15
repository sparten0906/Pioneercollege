export {}
// ============================================================
// GALLERY TYPES
// ============================================================

export type GalleryEventCategory =
  | 'all'
  | 'annual-day'
  | 'sports'
  | 'cultural'
  | 'convocation'
  | 'workshop'

export interface GalleryImage {
  id: string
  src: string
  thumbnail: string
  alt: string
  caption?: string
  category: Exclude<GalleryEventCategory, 'all'>
  eventName: string
  eventDate: string
  width?: number
  height?: number
}

export interface GalleryFilterOption {
  value: GalleryEventCategory
  label: string
  count?: number
}