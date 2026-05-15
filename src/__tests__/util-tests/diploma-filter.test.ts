import { describe, it, expect } from 'vitest'
import {
  filterDiplomasByCategory,
  searchDiplomas,
  searchCounseling,
  applyFilters,
  getFeaturedDiplomas,
  getRelatedDiplomas,
  findDiplomaBySlug,
} from '../../utils/diploma-filter'
import type { DiplomaData } from '../../types/diploma.types'
import type { CounselingProgram } from '../../types/counseling.types'

// ── Minimal fixture factories ───────────────────────────────────────────────

const makeD = (overrides: Partial<DiplomaData> = {}): DiplomaData => ({
  id: 'test-id',
  slug: 'test-slug',
  type: 'regular',
  category: 'lab-technology',
  title: 'Diploma in MLT',
  shortTitle: 'MLT',
  duration: '2 Years',
  durationMonths: 24,
  totalSeats: 30,
  eligibility: '10+2 Science',
  minPercentage: 50,
  description: 'Medical lab technician course',
  highlights: [],
  syllabus: [],
  fees: { admissionFee: 5000, tuitionFeePerYear: 20000, examFeePerYear: 2000, totalFee: 47000, currency: 'INR' },
  careerOpportunities: [],
  thumbnail: '/img/mlt.webp',
  isFeatured: false,
  isActive: true,
  affiliation: 'UPSMF',
  recognizedBy: [],
  ...overrides,
})

const makeC = ({
  id = 'gnm',
  slug = 'gnm',
  type = 'counseling',
  title = 'GNM',
  fullTitle = 'General Nursing and Midwifery',
  duration = '3.5 Years',
  description = 'GNM nursing programme',
  eligibility = '10+2',
  scope = [],
  keySubjects = [],
  admissionProcess = 'Counseling guidance and seat allotment support.',
  thumbnail = '/img/gnm.webp',
  affiliatedInstitutes,
  externalCounselingBody = 'UP Nursing Council',
  isActive = true,
}: Partial<CounselingProgram> = {}): CounselingProgram => ({
  id,
  slug,
  type,
  title,
  fullTitle,
  duration,
  description,
  eligibility,
  scope,
  keySubjects,
  admissionProcess,
  thumbnail,
  affiliatedInstitutes,
  externalCounselingBody,
  isActive,
})

// ── filterDiplomasByCategory ────────────────────────────────────────────────

describe('filterDiplomasByCategory()', () => {
  const diplomas = [
    makeD({ id: '1', category: 'lab-technology' }),
    makeD({ id: '2', category: 'imaging' }),
    makeD({ id: '3', category: 'ophthalmic' }),
  ]

  it('returns all diplomas when tab is "all"', () => {
    expect(filterDiplomasByCategory(diplomas, 'all')).toHaveLength(3)
  })

  it('returns empty array when tab is "counseling"', () => {
    expect(filterDiplomasByCategory(diplomas, 'counseling')).toHaveLength(0)
  })

  it('filters by specific category', () => {
    const result = filterDiplomasByCategory(diplomas, 'imaging')
    expect(result).toHaveLength(1)
    expect(result[0].category).toBe('imaging')
  })

  it('returns empty array if no diplomas match the category', () => {
    const result = filterDiplomasByCategory(diplomas, 'dental-ortho')
    expect(result).toHaveLength(0)
  })

  it('returns multiple when several match', () => {
    const two = [
      makeD({ id: 'a', category: 'lab-technology' }),
      makeD({ id: 'b', category: 'lab-technology' }),
      makeD({ id: 'c', category: 'ophthalmic' }),
    ]
    expect(filterDiplomasByCategory(two, 'lab-technology')).toHaveLength(2)
  })
})

// ── searchDiplomas ──────────────────────────────────────────────────────────

describe('searchDiplomas()', () => {
  const diplomas = [
    makeD({ id: '1', title: 'Diploma in MLT', description: 'Lab tests course' }),
    makeD({ id: '2', title: 'Diploma in Radiology', description: 'Imaging course', category: 'imaging' }),
    makeD({ id: '3', title: 'Diploma in Optometry', description: 'Eye care course', category: 'ophthalmic' }),
  ]

  it('returns all when query is empty', () => {
    expect(searchDiplomas(diplomas, '')).toHaveLength(3)
  })

  it('returns all when query is only whitespace', () => {
    expect(searchDiplomas(diplomas, '   ')).toHaveLength(3)
  })

  it('matches by title (case-insensitive)', () => {
    const result = searchDiplomas(diplomas, 'radiology')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })

  it('matches by description', () => {
    const result = searchDiplomas(diplomas, 'eye care')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('3')
  })

  it('matches by category string', () => {
    const result = searchDiplomas(diplomas, 'imaging')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })

  it('returns empty array when no match', () => {
    expect(searchDiplomas(diplomas, 'xxxxxxxxxx')).toHaveLength(0)
  })
})

// ── searchCounseling ────────────────────────────────────────────────────────

describe('searchCounseling()', () => {
  const programs = [
    makeC({ id: 'gnm', title: 'GNM', fullTitle: 'General Nursing and Midwifery', description: 'Nursing programme' }),
    makeC({ id: 'bams', slug: 'bams', title: 'BAMS', fullTitle: 'Bachelor of Ayurvedic Medicine', description: 'Ayurveda course' }),
  ]

  it('returns all when query is empty', () => {
    expect(searchCounseling(programs, '')).toHaveLength(2)
  })

  it('matches by title', () => {
    const result = searchCounseling(programs, 'gnm')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('gnm')
  })

  it('matches by fullTitle', () => {
    const result = searchCounseling(programs, 'ayurvedic')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('bams')
  })

  it('matches by description', () => {
    const result = searchCounseling(programs, 'nursing programme')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('gnm')
  })

  it('returns empty when no match', () => {
    expect(searchCounseling(programs, 'xxxxxxxx')).toHaveLength(0)
  })
})

// ── applyFilters ────────────────────────────────────────────────────────────

describe('applyFilters()', () => {
  const diplomas = [
    makeD({ id: 'd1', category: 'lab-technology', title: 'MLT Course' }),
    makeD({ id: 'd2', category: 'imaging', title: 'Radiology Course' }),
  ]
  const counseling = [
    makeC({ id: 'gnm', title: 'GNM', fullTitle: 'General Nursing' }),
  ]

  it('"all" tab returns all diplomas and all counseling', () => {
    const { filteredDiplomas, filteredCounseling } = applyFilters(diplomas, counseling, 'all', '')
    expect(filteredDiplomas).toHaveLength(2)
    expect(filteredCounseling).toHaveLength(1)
  })

  it('"counseling" tab returns no diplomas, all counseling', () => {
    const { filteredDiplomas, filteredCounseling } = applyFilters(diplomas, counseling, 'counseling', '')
    expect(filteredDiplomas).toHaveLength(0)
    expect(filteredCounseling).toHaveLength(1)
  })

  it('category tab filters diplomas and hides counseling', () => {
    const { filteredDiplomas, filteredCounseling } = applyFilters(diplomas, counseling, 'lab-technology', '')
    expect(filteredDiplomas).toHaveLength(1)
    expect(filteredDiplomas[0].id).toBe('d1')
    expect(filteredCounseling).toHaveLength(0)
  })

  it('search query filters diplomas by title', () => {
    const { filteredDiplomas } = applyFilters(diplomas, counseling, 'all', 'radiology')
    expect(filteredDiplomas).toHaveLength(1)
    expect(filteredDiplomas[0].id).toBe('d2')
  })

  it('search query on counseling tab filters counseling programs', () => {
    const { filteredCounseling } = applyFilters(diplomas, counseling, 'counseling', 'nursing')
    expect(filteredCounseling).toHaveLength(1)
  })

  it('search with no match returns empty arrays', () => {
    const { filteredDiplomas, filteredCounseling } = applyFilters(diplomas, counseling, 'all', 'xxxxxxxxx')
    expect(filteredDiplomas).toHaveLength(0)
    expect(filteredCounseling).toHaveLength(0)
  })
})

// ── getFeaturedDiplomas ─────────────────────────────────────────────────────

describe('getFeaturedDiplomas()', () => {
  const diplomas = [
    makeD({ id: '1', isFeatured: true,  isActive: true  }),
    makeD({ id: '2', isFeatured: true,  isActive: false }),
    makeD({ id: '3', isFeatured: false, isActive: true  }),
    makeD({ id: '4', isFeatured: true,  isActive: true  }),
    makeD({ id: '5', isFeatured: true,  isActive: true  }),
  ]

  it('returns only featured AND active diplomas', () => {
    const result = getFeaturedDiplomas(diplomas)
    expect(result.every((d) => d.isFeatured && d.isActive)).toBe(true)
  })

  it('excludes inactive featured diplomas', () => {
    const result = getFeaturedDiplomas(diplomas)
    expect(result.find((d) => d.id === '2')).toBeUndefined()
  })

  it('respects the limit parameter', () => {
    expect(getFeaturedDiplomas(diplomas, 2)).toHaveLength(2)
  })

  it('defaults to limit of 6', () => {
    const many = Array.from({ length: 10 }, (_, i) =>
      makeD({ id: String(i), isFeatured: true, isActive: true }),
    )
    expect(getFeaturedDiplomas(many)).toHaveLength(6)
  })
})

// ── getRelatedDiplomas ──────────────────────────────────────────────────────

describe('getRelatedDiplomas()', () => {
  const diplomas = [
    makeD({ id: '1', slug: 'current', category: 'lab-technology', isActive: true }),
    makeD({ id: '2', slug: 'related-1', category: 'lab-technology', isActive: true }),
    makeD({ id: '3', slug: 'related-2', category: 'lab-technology', isActive: true }),
    makeD({ id: '4', slug: 'related-3', category: 'lab-technology', isActive: true }),
    makeD({ id: '5', slug: 'other-cat', category: 'imaging', isActive: true }),
    makeD({ id: '6', slug: 'inactive', category: 'lab-technology', isActive: false }),
  ]

  it('excludes the current course by slug', () => {
    const result = getRelatedDiplomas(diplomas, 'current', 'lab-technology')
    expect(result.find((d) => d.slug === 'current')).toBeUndefined()
  })

  it('only returns same category courses', () => {
    const result = getRelatedDiplomas(diplomas, 'current', 'lab-technology')
    expect(result.every((d) => d.category === 'lab-technology')).toBe(true)
  })

  it('excludes inactive courses', () => {
    const result = getRelatedDiplomas(diplomas, 'current', 'lab-technology')
    expect(result.find((d) => d.slug === 'inactive')).toBeUndefined()
  })

  it('returns at most 3 by default', () => {
    const result = getRelatedDiplomas(diplomas, 'current', 'lab-technology')
    expect(result.length).toBeLessThanOrEqual(3)
  })

  it('respects custom limit', () => {
    const result = getRelatedDiplomas(diplomas, 'current', 'lab-technology', 2)
    expect(result).toHaveLength(2)
  })
})

// ── findDiplomaBySlug ───────────────────────────────────────────────────────

describe('findDiplomaBySlug()', () => {
  const diplomas = [
    makeD({ id: '1', slug: 'diploma-in-mlt' }),
    makeD({ id: '2', slug: 'diploma-in-radiology' }),
  ]

  it('finds a diploma by exact slug', () => {
    const result = findDiplomaBySlug(diplomas, 'diploma-in-mlt')
    expect(result).toBeDefined()
    expect(result?.id).toBe('1')
  })

  it('returns undefined for an unknown slug', () => {
    expect(findDiplomaBySlug(diplomas, 'nonexistent')).toBeUndefined()
  })

  it('is case-sensitive (slugs are always lowercase)', () => {
    expect(findDiplomaBySlug(diplomas, 'Diploma-In-MLT')).toBeUndefined()
  })
})
