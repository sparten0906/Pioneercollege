import type { ReactElement } from 'react'
import type { StatCounter } from '../../data/institute-achievements'
import ViewportCountUp from '../counter-elements/ViewportCountUp'
import '../../styles/components/cards.css'

interface StatHighlightCardProps { stat: StatCounter }

const iconMap: Record<string, ReactElement> = {
  calendar: <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  book: <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  users: <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  briefcase: <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>,
}

const StatHighlightCard = ({ stat }: StatHighlightCardProps) => (
  <div className="card stat-card">
    <div className="stat-card__icon-wrap">
      {iconMap[stat.icon] ?? iconMap['book']}
    </div>
    <div className="stat-card__value">
      {stat.prefix && <span className="stat-card__prefix">{stat.prefix}</span>}
      <ViewportCountUp target={stat.value} />
      {stat.suffix && <span className="stat-card__suffix">{stat.suffix}</span>}
    </div>
    <p className="stat-card__label">{stat.label}</p>
  </div>
)

export default StatHighlightCard
