export {}
import { getAchievementImage } from '../utils/asset-path-resolver'

export interface Achievement {
  id:          string
  title:       string
  description: string
  year:        number
  category:    'award' | 'ranking' | 'academic' | 'placement' | 'infrastructure'
  image?:      string
  isFeatured:  boolean
}

export interface StatCounter {
  id:      string
  label:   string
  value:   number
  suffix:  string
  prefix?: string
  icon:    string
}

export const achievements: Achievement[] = [
  {
    id:          'ach-001',
    title:       'Best Paramedical Institute Award 2023',
    description: 'Awarded Best Paramedical Institute in Uttar Pradesh by the State Health Education Council for excellence in training quality, infrastructure, and placement outcomes.',
    year:        2023,
    category:    'award',
    image:       getAchievementImage('achievement-award-best.webp'),
    isFeatured:  true,
  },
  {
    id:          'ach-002',
    title:       'State Topper — D. MLT 2023',
    description: 'BBS Institute student Ms. [Name] secured 1st rank in UP Paramedical Council Diploma in MLT examination 2023 with 91.4% marks.',
    year:        2023,
    category:    'academic',
    image:       getAchievementImage('achievement-topper-2023.webp'),
    isFeatured:  true,
  },
  {
    id:          'ach-003',
    title:       '92% Placement Record — Batch 2022–23',
    description: '92% of graduating students from the 2022–23 batch were placed in hospitals, diagnostic centres, and healthcare institutions within 6 months of completing their diploma.',
    year:        2023,
    category:    'placement',
    image:       getAchievementImage('achievement-placement.webp'),
    isFeatured:  true,
  },
  {
    id:          'ach-004',
    title:       'State Topper — D. Radiography 2022',
    description: 'BBS Institute produced the UP state topper in Diploma in Medical Radiography 2022 examination — Mr. [Name] scoring 89.8%.',
    year:        2022,
    category:    'academic',
    image:       getAchievementImage('achievement-topper-2022.webp'),
    isFeatured:  false,
  },
  {
    id:          'ach-005',
    title:       '2000+ Students Trained Since Establishment',
    description: 'BBS Group of Educational Institutes has successfully trained over 2000 paramedical professionals since its establishment, who are now working across India and abroad.',
    year:        2024,
    category:    'academic',
    isFeatured:  false,
  },
]

export const statCounters: StatCounter[] = [
  {
    id:     'stat-001',
    label:  'Years of Excellence',
    value:  19,
    suffix: '+',
    icon:   'calendar',
  },
  {
    id:     'stat-002',
    label:  'Diploma Courses',
    value:  16,
    suffix: '',
    icon:   'book',
  },
  {
    id:     'stat-003',
    label:  'Students Trained',
    value:  2000,
    suffix: '+',
    icon:   'users',
  },
  {
    id:     'stat-004',
    label:  'Placement Rate',
    value:  92,
    suffix: '%',
    icon:   'briefcase',
  },
]

export const getFeaturedAchievements = (): Achievement[] =>
  achievements.filter((a) => a.isFeatured)