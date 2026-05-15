import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import type { DiplomaData } from '../../types/diploma.types'

const MOCK_COURSE: DiplomaData = {
  id: 'd1', slug: 'diploma-in-mlt', type: 'regular', category: 'lab-technology',
  title: 'Diploma in Medical Lab Technician', shortTitle: 'MLT',
  duration: '2 Years', durationMonths: 24, totalSeats: 30,
  eligibility: '10+2 Science with PCB', minPercentage: 50,
  description: 'Learn clinical lab skills.',
  highlights: ['Hands-on training', 'Hospital internship'],
  syllabus: [{ semester: 1, subjects: ['Anatomy', 'Biochemistry'] }],
  fees: { admissionFee: 5000, tuitionFeePerYear: 20000, examFeePerYear: 2000, totalFee: 47000, currency: 'INR' },
  careerOpportunities: [{ role: 'Lab Technician', sector: 'both', description: 'Works in hospitals.' }],
  thumbnail: '/img/mlt.webp', isFeatured: true, isActive: true,
  affiliation: 'UPSMF', recognizedBy: ['Ministry of Health'],
}

const MOCK_RELATED_COURSE: DiplomaData = {
  ...MOCK_COURSE,
  id: 'd2',
  slug: 'diploma-in-radiology',
  title: 'Diploma in Radiology',
  shortTitle: 'Radiology',
}

vi.mock('../../data/paramedical-courses', () => ({
  ALL_DIPLOMAS: [MOCK_COURSE, MOCK_RELATED_COURSE],
  findBySlug: vi.fn((slug: string) =>
    [MOCK_COURSE, MOCK_RELATED_COURSE].find((course) => course.slug === slug),
  ),
  getRelatedDiplomas: vi.fn(() => [MOCK_RELATED_COURSE]),
}))

vi.mock('../../components/utility-elements/SeoMetaTags', () => ({ default: () => null }))

// Stub all sub-components to isolate behaviour
vi.mock('../../pages/CourseDetailPage/DiplomaDetailHero',     () => ({ default: ({ diploma }: { diploma: DiplomaData }) => <div data-testid="detail-hero">{diploma.title}</div> }))
vi.mock('../../pages/CourseDetailPage/CourseOverviewPanel',   () => ({ default: () => <div data-testid="overview-panel" /> }))
vi.mock('../../pages/CourseDetailPage/SyllabusAccordion',     () => ({ default: () => <div data-testid="syllabus-accordion" /> }))
vi.mock('../../pages/CourseDetailPage/EligibilityCriteria',   () => ({ default: () => <div data-testid="eligibility" /> }))
vi.mock('../../pages/CourseDetailPage/DurationFeesBlock',     () => ({ default: () => <div data-testid="fees-block" /> }))
vi.mock('../../pages/CourseDetailPage/CareerScopeSection',    () => ({ default: () => <div data-testid="career-scope" /> }))
vi.mock('../../pages/CourseDetailPage/RelatedDiplomas',       () => ({ default: () => <div data-testid="related-diplomas" /> }))
vi.mock('../../pages/CourseDetailPage/DiplomaEnquiryWidget',  () => ({ default: () => <div data-testid="enquiry-widget" /> }))

import CourseDetailPage from '../../pages/CourseDetailPage'

const renderDetailPage = (slug = 'diploma-in-mlt') =>
  render(
    <MemoryRouter initialEntries={[`/courses/${slug}`]}>
      <Routes>
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
      </Routes>
    </MemoryRouter>,
  )

describe('CourseDetailPage', () => {
  it('renders without crashing for a valid slug', () => {
    expect(() => renderDetailPage()).not.toThrow()
  })

  it('renders the detail hero with the course title', () => {
    renderDetailPage()
    expect(screen.getByTestId('detail-hero')).toBeInTheDocument()
    expect(screen.getByText('Diploma in Medical Lab Technician')).toBeInTheDocument()
  })

  it('renders the overview panel', () => {
    renderDetailPage()
    expect(screen.getByTestId('overview-panel')).toBeInTheDocument()
  })

  it('renders the syllabus accordion', () => {
    renderDetailPage()
    expect(screen.getByTestId('syllabus-accordion')).toBeInTheDocument()
  })

  it('renders the eligibility criteria block', () => {
    renderDetailPage()
    expect(screen.getByTestId('eligibility')).toBeInTheDocument()
  })

  it('renders the fees block', () => {
    renderDetailPage()
    expect(screen.getByTestId('fees-block')).toBeInTheDocument()
  })

  it('renders the career scope section', () => {
    renderDetailPage()
    expect(screen.getByTestId('career-scope')).toBeInTheDocument()
  })

  it('renders the related diplomas section', () => {
    renderDetailPage()
    expect(screen.getByTestId('related-diplomas')).toBeInTheDocument()
  })

  it('renders the enquiry widget', () => {
    renderDetailPage()
    expect(screen.getByTestId('enquiry-widget')).toBeInTheDocument()
  })

  it('shows a 404 / not found message for an unknown slug', () => {
    renderDetailPage('nonexistent-course')
    expect(screen.getByText(/not found|does not exist|404/i)).toBeInTheDocument()
  })
})
