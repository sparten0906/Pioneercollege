import { annualFunctionGallery }    from './annual-function.gallery'
import { sportsEventsGallery }       from './sports-events.gallery'
import { culturalProgramGallery }    from './cultural-program.gallery'
import { convocationWorkshopGallery } from './convocation-workshop.gallery'
import type { GalleryImage, GalleryEventCategory } from '../../types/gallery.types'

export const ALL_GALLERY_IMAGES: GalleryImage[] = [
  ...annualFunctionGallery,
  ...sportsEventsGallery,
  ...culturalProgramGallery,
  ...convocationWorkshopGallery,
]

export {
  annualFunctionGallery,
  sportsEventsGallery,
  culturalProgramGallery,
  convocationWorkshopGallery,
}

export const getByCategory = (
  category: GalleryEventCategory,
): GalleryImage[] => {
  if (category === 'all') return ALL_GALLERY_IMAGES
  return ALL_GALLERY_IMAGES.filter((img) => img.category === category)
}