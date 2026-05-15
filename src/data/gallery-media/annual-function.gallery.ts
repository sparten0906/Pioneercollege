import type { GalleryImage } from '../../types/gallery.types'
import { getGalleryImage } from '../../utils/asset-path-resolver'

export const annualFunctionGallery: GalleryImage[] = [
  {
    id:        'gal-ann-001',
    src:       getGalleryImage('annual-day-event', 'annual-day-01.webp'),
    thumbnail: getGalleryImage('annual-day-event', 'annual-day-01.webp'),
    alt:       'Chief Guest lighting the lamp at BBS Annual Day 2024',
    caption:   'Chief Guest Dr. [Name] lighting the inaugural lamp at BBS Annual Day 2024',
    category:  'annual-day',
    eventName: 'Annual Day 2024',
    eventDate: '2024-03-15',
  },
  {
    id:        'gal-ann-002',
    src:       getGalleryImage('annual-day-event', 'annual-day-02.webp'),
    thumbnail: getGalleryImage('annual-day-event', 'annual-day-02.webp'),
    alt:       'Students performing cultural programme at Annual Day',
    caption:   'Cultural programme by final year students',
    category:  'annual-day',
    eventName: 'Annual Day 2024',
    eventDate: '2024-03-15',
  },
  {
    id:        'gal-ann-003',
    src:       getGalleryImage('annual-day-event', 'annual-day-03.webp'),
    thumbnail: getGalleryImage('annual-day-event', 'annual-day-03.webp'),
    alt:       'Award distribution ceremony at Annual Day',
    caption:   'Merit scholarship and excellence awards distributed to top students',
    category:  'annual-day',
    eventName: 'Annual Day 2024',
    eventDate: '2024-03-15',
  },
  {
    id:        'gal-ann-004',
    src:       getGalleryImage('annual-day-event', 'annual-day-04.webp'),
    thumbnail: getGalleryImage('annual-day-event', 'annual-day-04.webp'),
    alt:       'Group photograph of faculty and students at Annual Day 2024',
    caption:   'Faculty and students at the Annual Day 2024 group photograph',
    category:  'annual-day',
    eventName: 'Annual Day 2024',
    eventDate: '2024-03-15',
  },
]