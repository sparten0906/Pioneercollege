import ViewportCountUp from '../../components/counter-elements/ViewportCountUp'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const CalendarIcon  = () => <svg className="stats-grid__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
const BookIcon      = () => <svg className="stats-grid__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
const UsersIcon     = () => <svg className="stats-grid__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
const BriefcaseIcon = () => <svg className="stats-grid__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>

const statsData = [
  { icon: <CalendarIcon />,  value: 19,   suffix: '+', label: 'Years of Excellence' },
  { icon: <BookIcon />,      value: 16,   suffix: '',  label: 'Diploma Courses' },
  { icon: <UsersIcon />,     value: 2000, suffix: '+', label: 'Students Trained' },
  { icon: <BriefcaseIcon />, value: 92,   suffix: '%', label: 'Placement Rate' },
]

const InstituteStats = () => {
  const ref = useRevealOnScroll<HTMLDivElement>()
  return (
    <section className="stats-section section--sm" aria-label="Institute statistics">
      <div ref={ref} className="stats-grid">
        {statsData.map((stat, i) => (
          <div key={stat.label} className={`stats-grid__item reveal-up stagger-${i + 1}`}>
            <div className="stats-grid__icon">{stat.icon}</div>
            <div className="stats-grid__value">
              <ViewportCountUp target={stat.value} />
              <span className="stats-grid__suffix">{stat.suffix}</span>
            </div>
            <p className="stats-grid__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InstituteStats