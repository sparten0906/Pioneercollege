import type { GalleryImage } from '../../types/gallery.types'
import { getGalleryImage } from '../../utils/asset-path-resolver'

export const culturalProgramGallery: GalleryImage[] = [
  {
    id:        'gal-cult-001',
    src:       getGalleryImage('cultural-event', 'cultural-fest-01.webp'),
    thumbnail: getGalleryImage('cultural-event', 'cultural-fest-01.webp'),
    alt:       'Dance performance at BBS Cultural Fest 2023',
    caption:   'Classical dance performance by MLT department students',
    category:  'cultural',
    eventName: 'Cultural Fest 2023',
    eventDate: '2023-11-10',
  },
  {
    id:        'gal-cult-002',
    src:       getGalleryImage('cultural-event', 'cultural-fest-02.webp'),
    thumbnail: getGalleryImage('cultural-event', 'cultural-fest-02.webp'),
    alt:       'Skit performance on health awareness at Cultural Fest',
    caption:   'Health awareness skit by Radiography students',
    category:  'cultural',
    eventName: 'Cultural Fest 2023',
    eventDate: '2023-11-10',
  },
  {
    id:        'gal-cult-003',
    src:       getGalleryImage('cultural-event', 'cultural-fest-03.webp'),
    thumbnail: getGalleryImage('cultural-event', 'cultural-fest-03.webp'),
    alt:       'Group singing competition at Cultural Fest 2023',
    caption:   'Inter-batch group singing competition',
    category:  'cultural',
    eventName: 'Cultural Fest 2023',
    eventDate: '2023-11-10',
  },
]