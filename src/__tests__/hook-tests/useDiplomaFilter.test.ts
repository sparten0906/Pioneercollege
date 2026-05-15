import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useDiplomaFilter from '../../hooks/useDiplomaFilter'

// Mock the data imports so tests are deterministic and fast
vi.mock('../../data/paramedical-courses', () => ({
  ALL_DIPLOMAS: [
    {
      id: 'd1', slug: 'diploma-mlt', type: 'regular', category: 'lab-technology',
      title: 'Diploma in MLT', shortTitle: 'MLT', duration: '2 Years',
      durationMonths: 24, totalSeats: 30, eligibility: '10+2', minPercentage: 50,
      description: 'Medical lab tech', highlights: [], syllabus: [],
      fees: { admissionFee: 0, tuitionFeePerYear: 0, examFeePerYear: 0, totalFee: 0, currency: 'INR' },
      careerOpportunities: [], thumbnail: '', isFeatured: true, isActive: true,
      affiliation: '', recognizedBy: [],
    },
    {
      id: 'd2', slug: 'diploma-radiology', type: 'regular', category: 'imaging',
      title: 'Diploma in Radiology', shortTitle: 'Radiology', duration: '2 Years',
      durationMonths: 24, totalSeats: 30, eligibility: '10+2', minPercentage: 50,
      description: 'Imaging course', highlights: [], syllabus: [],
      fees: { admissionFee: 0, tuitionFeePerYear: 0, examFeePerYear: 0, totalFee: 0, currency: 'INR' },
      careerOpportunities: [], thumbnail: '', isFeatured: false, isActive: true,
      affiliation: '', recognizedBy: [],
    },
    {
      id: 'd3', slug: 'diploma-inactive', type: 'regular', category: 'imaging',
      title: 'Inactive Course', shortTitle: 'Inactive', duration: '1 Year',
      durationMonths: 12, totalSeats: 10, eligibility: '10+2', minPercentage: 50,
      description: 'Inactive', highlights: [], syllabus: [],
      fees: { admissionFee: 0, tuitionFeePerYear: 0, examFeePerYear: 0, totalFee: 0, currency: 'INR' },
      careerOpportunities: [], thumbnail: '', isFeatured: false, isActive: false,
      affiliation: '', recognizedBy: [],
    },
  ],
}))

vi.mock('../../data/counseling-programs/counseling.data', () => ({
  counselingPrograms: [
    {
      id: 'c1', slug: 'gnm', title: 'GNM', fullTitle: 'General Nursing and Midwifery',
      duration: '3.5 Years', description: 'Nursing course', eligibility: '10+2',
      seats: 40, thumbnail: '', counselingBody: 'UP', isActive: true,
    },
    {
      id: 'c2', slug: 'anm', title: 'ANM', fullTitle: 'Auxiliary Nurse Midwifery',
      duration: '2 Years', description: 'ANM course', eligibility: '10+2',
      seats: 30, thumbnail: '', counselingBody: 'UP', isActive: false,
    },
  ],
}))

describe('useDiplomaFilter()', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('initialises with activeTab "all" and empty searchQuery', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    expect(result.current.activeTab).toBe('all')
    expect(result.current.searchQuery).toBe('')
  })

  it('returns only active diplomas on initial render', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    // d3 is inactive, so only d1 and d2
    expect(result.current.filteredDiplomas).toHaveLength(2)
  })

  it('returns only active counseling programs on initial render', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    // c2 is inactive, so only c1
    expect(result.current.filteredCounseling).toHaveLength(1)
  })

  it('totalResults = filteredDiplomas.length + filteredCounseling.length', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    expect(result.current.totalResults).toBe(
      result.current.filteredDiplomas.length + result.current.filteredCounseling.length,
    )
  })

  it('hasActiveFilter is false by default', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    expect(result.current.hasActiveFilter).toBe(false)
  })

  it('setActiveTab("counseling") hides all diplomas and shows counseling', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    act(() => { result.current.setActiveTab('counseling') })
    expect(result.current.filteredDiplomas).toHaveLength(0)
    expect(result.current.filteredCounseling).toHaveLength(1)
    expect(result.current.hasActiveFilter).toBe(true)
  })

  it('setActiveTab("lab-technology") filters to lab diplomas', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    act(() => { result.current.setActiveTab('lab-technology') })
    expect(result.current.filteredDiplomas).toHaveLength(1)
    expect(result.current.filteredDiplomas[0].id).toBe('d1')
    expect(result.current.filteredCounseling).toHaveLength(0)
  })

  it('setSearchQuery filters diplomas by title', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    act(() => { result.current.setSearchQuery('radiology') })
    expect(result.current.filteredDiplomas).toHaveLength(1)
    expect(result.current.filteredDiplomas[0].id).toBe('d2')
    expect(result.current.hasActiveFilter).toBe(true)
  })

  it('clearFilters resets tab and query to defaults', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    act(() => {
      result.current.setActiveTab('imaging')
      result.current.setSearchQuery('test')
    })
    act(() => { result.current.clearFilters() })
    expect(result.current.activeTab).toBe('all')
    expect(result.current.searchQuery).toBe('')
    expect(result.current.hasActiveFilter).toBe(false)
  })

  it('search with no matches gives totalResults of 0', () => {
    const { result } = renderHook(() => useDiplomaFilter())
    act(() => { result.current.setSearchQuery('xxxxxxxxxxx') })
    expect(result.current.totalResults).toBe(0)
  })
})
