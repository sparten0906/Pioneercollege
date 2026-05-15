import type { ReactElement } from 'react'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getFeaturedAchievements } from '../../data/institute-achievements'

const TrophyIcon = () => <svg className="honor-card__icon" style={{ color: '#CA8A04' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path strokeLinecap="round" strokeLinejoin="round" d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16"/><path strokeLinecap="round" strokeLinejoin="round" d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path strokeLinecap="round" strokeLinejoin="round" d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path strokeLinecap="round" strokeLinejoin="round" d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>
const StarIcon   = () => <svg className="honor-card__icon" style={{ color: 'var(--color-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const CheckIcon  = () => <svg className="honor-card__icon" style={{ color: 'var(--color-success)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>

const iconMap: Record<string, ReactElement> = {
  award: <TrophyIcon />, academic: <StarIcon />, placement: <CheckIcon />, ranking: <StarIcon />,
}
const wrapMap: Record<string, string> = {
  award: 'gold', academic: 'blue', placement: 'green', ranking: 'blue',
}

const HonorsDisplay = () => {
  const sectionRef   = useRevealOnScroll<HTMLElement>()
  const achievements = getFeaturedAchievements()
  return (
    <section ref={sectionRef} className="section honors-section" aria-labelledby="honors-heading">
      <div className="page-wrapper">
        <SectionTitleBlock title="Awards and Recognitions" subtitle="BBS Institute's commitment to quality paramedical education recognised at state and national levels" align="center" accentWord="Recognitions" />
        <div className="honors-grid">
          {achievements.map((a, i) => (
            <article key={a.id} className={`honor-card reveal-up stagger-${Math.min(i + 1, 6)}`}>
              <div className={`honor-card__icon-wrap honor-card__icon-wrap--${wrapMap[a.category] ?? 'blue'}`}>
                {iconMap[a.category] ?? <StarIcon />}
              </div>
              <div>
                <p className="honor-card__year">{a.year}</p>
                <h3 className="honor-card__title">{a.title}</h3>
                <p className="honor-card__desc">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HonorsDisplay