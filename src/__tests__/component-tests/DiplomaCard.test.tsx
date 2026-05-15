import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import DiplomaCard from '../../components/card-components/DiplomaCard'
import type { DiplomaData } from '../../types/diploma.types'

// CSS imports can't run in jsdom — mock them
vi.mock('../../styles/components/cards.css', () => ({}))
vi.mock('../../components/badge-elements/CourseCategoryBadge', () => ({
  default: ({ category }: { category: string }) => <span data-testid="badge">{category}</span>,
}))

const mockCourse: DiplomaData = {
  id: 'test-1',
  slug: 'diploma-in-mlt',
  type: 'regular',
  category: 'lab-technology',
  title: 'Diploma in Medical Lab Technician',
  shortTitle: 'MLT',
  duration: '2 Years',
  durationMonths: 24,
  totalSeats: 30,
  eligibility: '10+2 Science with PCB',
  minPercentage: 50,
  description: 'Learn clinical laboratory skills and diagnostic techniques.',
  highlights: ['Hands-on lab training', 'Hospital internship'],
  syllabus: [],
  fees: {
    admissionFee: 5000,
    tuitionFeePerYear: 20000,
    examFeePerYear: 2000,
    totalFee: 47000,
    currency: 'INR',
  },
  careerOpportunities: [],
  thumbnail: '/static-assets/images/paramedical-courses/diploma-mlt.webp',
  isFeatured: true,
  isActive: true,
  affiliation: 'UPSMF',
  recognizedBy: ['Ministry of Health'],
}

const renderCard = (course = mockCourse) =>
  render(
    <MemoryRouter>
      <DiplomaCard course={course} />
    </MemoryRouter>,
  )

describe('DiplomaCard', () => {
  it('renders the course title', () => {
    renderCard()
    expect(screen.getByText('Diploma in Medical Lab Technician')).toBeInTheDocument()
  })

  it('renders the course description', () => {
    renderCard()
    expect(
      screen.getByText('Learn clinical laboratory skills and diagnostic techniques.'),
    ).toBeInTheDocument()
  })

  it('renders the duration', () => {
    renderCard()
    expect(screen.getByText(/2 Years/i)).toBeInTheDocument()
  })

  it('renders the seat count', () => {
    renderCard()
    expect(screen.getByText(/30 Seats/i)).toBeInTheDocument()
  })

  it('renders the thumbnail image with correct alt text', () => {
    renderCard()
    const img = screen.getByRole('img', { name: /diploma in medical lab technician/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', mockCourse.thumbnail)
  })

  it('image has loading="lazy" attribute', () => {
    renderCard()
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('renders a link to the correct course detail path', () => {
    renderCard()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/courses/diploma-in-mlt')
  })

  it('renders the "Details" CTA text', () => {
    renderCard()
    expect(screen.getByText(/details/i)).toBeInTheDocument()
  })

  it('wraps content in an <article> element', () => {
    renderCard()
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('renders correctly with a different category', () => {
    renderCard({ ...mockCourse, category: 'imaging', title: 'Diploma in Radiology' })
    expect(screen.getByText('Diploma in Radiology')).toBeInTheDocument()
  })
})
