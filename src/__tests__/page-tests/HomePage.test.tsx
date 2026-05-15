import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

// Mock all heavy data and sub-components
vi.mock('../../data/paramedical-courses', () => ({
  ALL_DIPLOMAS: [
    {
      id: 'd1', slug: 'diploma-in-mlt', type: 'regular', category: 'lab-technology',
      title: 'Diploma in Medical Lab Technician', shortTitle: 'MLT',
      duration: '2 Years', durationMonths: 24, totalSeats: 30,
      eligibility: '10+2 Science', minPercentage: 50,
      description: 'Learn clinical lab skills.',
      highlights: ['Lab training'], syllabus: [],
      fees: { admissionFee: 5000, tuitionFeePerYear: 20000, examFeePerYear: 2000, totalFee: 47000, currency: 'INR' },
      careerOpportunities: [{ role: 'Lab Technician', sector: 'both', description: 'Works in hospitals.' }],
      thumbnail: '/img/mlt.webp', isFeatured: true, isActive: true,
      affiliation: 'UPSMF', recognizedBy: ['Ministry of Health'],
    },
  ],
  getRelatedDiplomas: vi.fn(() => []),
}))

vi.mock('../../components/utility-elements/SeoMetaTags', () => ({
  default: () => null,
}))

import HomePage from '../../pages/HomePage'

// Stub all HomePage sub-components
vi.mock('../../pages/HomePage/HeroSlider',         () => ({ default: () => <div data-testid="hero-slider" /> }))
vi.mock('../../pages/HomePage/NoticeStrip',        () => ({ default: () => <div data-testid="notice-strip" /> }))
vi.mock('../../pages/HomePage/InstituteStats',     () => ({ default: () => <div data-testid="institute-stats" /> }))
vi.mock('../../pages/HomePage/FeaturedDiplomas',   () => ({ default: () => <div data-testid="featured-diplomas" /> }))
vi.mock('../../pages/HomePage/WhyChooseBBS',       () => ({ default: () => <div data-testid="why-bbs" /> }))
vi.mock('../../pages/HomePage/CampusPreview',      () => ({ default: () => <div data-testid="campus-preview" /> }))
vi.mock('../../pages/HomePage/AlumniVoices',       () => ({ default: () => <div data-testid="alumni-voices" /> }))
vi.mock('../../pages/HomePage/UpcomingEvents',     () => ({ default: () => <div data-testid="upcoming-events" /> }))
vi.mock('../../pages/HomePage/HonorsDisplay',      () => ({ default: () => <div data-testid="honors-display" /> }))
vi.mock('../../pages/HomePage/AdmissionCallout',   () => ({ default: () => <div data-testid="admission-callout" /> }))

const renderHomePage = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MemoryRouter>,
  )

describe('HomePage', () => {
  it('renders without crashing', () => {
    expect(() => renderHomePage()).not.toThrow()
  })

  it('renders the hero slider section', () => {
    renderHomePage()
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
  })

  it('renders the notice strip', () => {
    renderHomePage()
    expect(screen.getByTestId('notice-strip')).toBeInTheDocument()
  })

  it('renders the institute stats section', () => {
    renderHomePage()
    expect(screen.getByTestId('institute-stats')).toBeInTheDocument()
  })

  it('renders the featured diplomas section', () => {
    renderHomePage()
    expect(screen.getByTestId('featured-diplomas')).toBeInTheDocument()
  })

  it('renders the why choose BBS section', () => {
    renderHomePage()
    expect(screen.getByTestId('why-bbs')).toBeInTheDocument()
  })

  it('renders the campus preview section', () => {
    renderHomePage()
    expect(screen.getByTestId('campus-preview')).toBeInTheDocument()
  })

  it('renders the alumni voices section', () => {
    renderHomePage()
    expect(screen.getByTestId('alumni-voices')).toBeInTheDocument()
  })

  it('renders the admission callout section', () => {
    renderHomePage()
    expect(screen.getByTestId('admission-callout')).toBeInTheDocument()
  })

  it('renders all major sections together', () => {
    renderHomePage()
    const sections = [
      'hero-slider', 'notice-strip', 'institute-stats',
      'featured-diplomas', 'why-bbs', 'campus-preview',
      'alumni-voices', 'admission-callout',
    ]
    sections.forEach((testId) => {
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    })
  })
})
