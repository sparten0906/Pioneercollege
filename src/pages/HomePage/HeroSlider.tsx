import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseMedical,
  GraduationCap,
  Users,
} from 'lucide-react'
import { getHeroImage } from '../../utils/asset-path-resolver'
import { ROUTES } from '../../constants/route-paths.constants'
import { INSTITUTE } from '../../constants/institute.constants'

const slides = [
  {
    id: 1, image: getHeroImage('slide-main-desktop.webp'),
    eyebrow: 'UP Paramedical Council Approved',
    title: 'Build Your Career in', accent: 'Healthcare',
    subtitle: 'Join B.B.S. Group of Educational Institutes for world-class paramedical diploma training. 16 specialised courses. Experienced faculty. Guaranteed placement support.',
    cta1: { label: 'Explore Courses', path: ROUTES.COURSES },
    cta2: { label: 'Apply Now', path: ROUTES.ADMISSIONS },
  },
  {
    id: 2, image: getHeroImage('slide-two-desktop.webp'),
    eyebrow: 'Estd. 2005 — 19 Years of Excellence',
    title: 'Hands-on Training in', accent: 'Modern Labs',
    subtitle: 'State-of-the-art laboratories, clinical simulation rooms and hospital posting ensure our graduates are job-ready from day one.',
    cta1: { label: 'View Facilities', path: ROUTES.ABOUT },
    cta2: { label: 'Meet Our Faculty', path: ROUTES.FACULTY },
  },
  {
    id: 3, image: getHeroImage('slide-three-desktop.webp'),
    eyebrow: '92% Placement Record',
    title: 'Your Future in', accent: 'Paramedical Science',
    subtitle: 'From Medical Lab Technician to Cath Lab Technology — choose from 16 government-recognised diploma programmes designed for immediate employment.',
    cta1: { label: 'Admission 2025-26', path: ROUTES.ADMISSIONS },
    cta2: { label: 'Download Brochure', path: '#' },
  },
]

const heroStats = [
  { value: '19+', label: 'Years of Excellence', icon: Award },
  { value: '16', label: 'Diploma Courses', icon: GraduationCap },
  { value: '2000+', label: 'Students Trained', icon: Users },
  { value: '92%', label: 'Placement Rate', icon: BriefcaseMedical },
]

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next, paused])

  const slide = slides[current]

  return (
    <section className="hero" aria-label="Hero image slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, i) => (
        <div key={s.id} className={`hero__slide${i === current ? ' is-active' : ''}`} aria-hidden={i !== current}>
          <img src={s.image} alt={`${INSTITUTE.shortName} campus slide ${i + 1}`} className="hero__image" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="page-wrapper" style={{ width: '100%' }}>
          <div className="hero__text-wrap">
            <p
              className="hero__eyebrow"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
            >
              <span className="hero__eyebrow-dot" />
              <BadgeCheck size={16} strokeWidth={2.2} aria-hidden="true" />
              {slide.eyebrow}
            </p>
            <h1 className="hero__title">{slide.title} <span className="hero__title-accent">{slide.accent}</span></h1>
            <p className="hero__subtitle">{slide.subtitle}</p>
            <div className="hero__actions">
              <Link
                to={slide.cta1.path}
                className="btn btn--accent btn--lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
              >
                {slide.cta1.label}
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link
                to={slide.cta2.path}
                className="btn btn--white btn--lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
              >
                {slide.cta2.label}
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__dots" role="tablist">
        {slides.map((s, i) => (
          <button key={s.id} className={`hero__dot${i === current ? ' is-active' : ''}`} onClick={() => setCurrent(i)} role="tab" aria-selected={i === current} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <svg className="hero__arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <svg className="hero__arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
      <div className="hero__stat-strip" aria-label="Institute at a glance">
        {heroStats.map((s) => (
          <div key={s.label} className="hero__stat-item">
            <s.icon
              size={18}
              strokeWidth={2.2}
              style={{ marginBottom: '0.45rem', opacity: 0.9 }}
              aria-hidden="true"
            />
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
