import type { GalleryImage } from '../../types/gallery.types'
import { getGalleryImage } from '../../utils/asset-path-resolver'

export const sportsEventsGallery: GalleryImage[] = [
  {
    id:        'gal-sp-001',
    src:       getGalleryImage('sports-event', 'sports-day-01.webp'),
    thumbnail: getGalleryImage('sports-event', 'sports-day-01.webp'),
    alt:       'Students participating in 100m race at BBS Sports Day 2024',
    caption:   '100 metre sprint — Sports Day 2024',
    category:  'sports',
    eventName: 'Sports Day 2024',
    eventDate: '2024-01-26',
  },
  {
    id:        'gal-sp-002',
    src:       getGalleryImage('sports-event', 'sports-day-02.webp'),
    thumbnail: getGalleryImage('sports-event', 'sports-day-02.webp'),
    alt:       'Tug of war competition at Sports Day',
    caption:   'Inter-batch tug of war championship',
    category:  'sports',
    eventName: 'Sports Day 2024',
    eventDate: '2024-01-26',
  },
  {
    id:        'gal-sp-003',
    src:       getGalleryImage('sports-event', 'sports-day-03.webp'),
    thumbnail: getGalleryImage('sports-event', 'sports-day-03.webp'),
    alt:       'Prize distribution at BBS Sports Day',
    caption:   'Sports Day prize distribution ceremony',
    category:  'sports',
    eventName: 'Sports Day 2024',
    eventDate: '2024-01-26',
  },
]