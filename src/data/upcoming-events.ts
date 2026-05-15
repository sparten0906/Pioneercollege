import type { EventItem } from '../types/event.types'

export const upcomingEvents: EventItem[] = [
  {
    id:                   'evt-001',
    title:                'Admissions Open Day 2025',
    description:          'Visit BBS Institute to meet faculty, tour the labs, and get direct admission guidance for all 16 paramedical diploma programmes. Parents are welcome.',
    date:                 '2025-04-20',
    time:                 '10:00 AM – 4:00 PM',
    venue:                'BBS Institute Main Campus',
    status:               'upcoming',
    category:             'academic',
    registrationRequired: false,
  },
  {
    id:                   'evt-002',
    title:                'BLS Certification Workshop',
    description:          'Hands-on Basic Life Support training by certified instructors. All students will receive a recognised BLS certificate on completion.',
    date:                 '2025-04-10',
    time:                 '9:00 AM – 1:00 PM',
    venue:                'BBS Seminar Hall',
    status:               'upcoming',
    category:             'workshop',
    registrationRequired: true,
  },
  {
    id:                   'evt-003',
    title:                'Free Diabetes & Blood Pressure Screening Camp',
    description:          'Community health screening camp organised by final year MLT and CMS & ED students under faculty supervision. Free blood glucose and BP testing for local residents.',
    date:                 '2025-04-14',
    time:                 '8:00 AM – 12:00 PM',
    venue:                'BBS Campus Ground',
    status:               'upcoming',
    category:             'medical-camp',
    registrationRequired: false,
  },
  {
    id:                   'evt-004',
    title:                'Guest Lecture — Advances in MRI Technology',
    description:          'Dr. [Name] from [Hospital] delivers a lecture on the latest developments in MRI scanning protocols, AI-assisted image analysis, and career opportunities for MRI technicians.',
    date:                 '2025-04-20',
    time:                 '11:00 AM – 1:00 PM',
    venue:                'BBS Seminar Hall',
    status:               'upcoming',
    category:             'seminar',
    registrationRequired: false,
  },
  {
    id:                   'evt-005',
    title:                'Inter-Institute Paramedical Quiz Competition',
    description:          'Annual paramedical knowledge quiz for students from paramedical institutes across the district. Teams of 3 students per institute can participate.',
    date:                 '2025-05-05',
    time:                 '10:00 AM – 2:00 PM',
    venue:                'BBS Institute Auditorium',
    status:               'upcoming',
    category:             'academic',
    registrationRequired: true,
  },
]

export const getUpcomingEvents = (limit?: number): EventItem[] => {
  const upcoming = upcomingEvents.filter((e) => e.status === 'upcoming')
  return limit ? upcoming.slice(0, limit) : upcoming
}