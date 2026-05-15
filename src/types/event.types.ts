export {}
// ============================================================
// EVENT TYPES
// ============================================================

export type EventStatus = 'upcoming' | 'ongoing' | 'completed'

export interface EventItem {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  time?: string
  venue: string
  status: EventStatus
  category: 'academic' | 'cultural' | 'sports' | 'medical-camp' | 'workshop' | 'seminar'
  thumbnail?: string
  registrationRequired: boolean
  registrationLink?: string
}