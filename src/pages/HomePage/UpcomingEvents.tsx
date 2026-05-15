import { Link } from 'react-router-dom'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import EventDateCard from '../../components/card-components/EventDateCard'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getUpcomingEvents } from '../../data/upcoming-events'
import { useNotices } from '../../context/NoticeContext'
import { ROUTES } from '../../constants/route-paths.constants'
import { formatShortDate } from '../../utils/date-formatter'

const CalIcon = () => <svg className="upcoming-events__sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
const ArrowIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>

const UpcomingEvents = () => {
  const sectionRef        = useRevealOnScroll<HTMLElement>()
  const events            = getUpcomingEvents(3)
  const { pinnedNotices } = useNotices()
  return (
    <section ref={sectionRef} className="section upcoming-events" aria-labelledby="events-heading">
      <div className="page-wrapper">
        <SectionTitleBlock title="Upcoming Events and Activities" subtitle="Stay updated with workshops, health camps, guest lectures and academic events" align="left" accentWord="Events" />
        <div className="upcoming-events__layout">
          <div className="upcoming-events__list">
            {events.map((event, i) => (
              <div key={event.id} className={`reveal-up stagger-${i + 1}`}><EventDateCard event={event} /></div>
            ))}
            <div className="reveal-up" style={{ marginTop: 'var(--space-4)' }}>
              <Link to={ROUTES.NOTIFICATIONS} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textDecoration: 'none' }}>
                View All Events and Notices <ArrowIcon />
              </Link>
            </div>
          </div>
          <aside className="upcoming-events__sidebar reveal-right">
            <h3 className="upcoming-events__sidebar-title"><CalIcon />Latest Notices</h3>
            <div className="quick-notice-list">
              {pinnedNotices.slice(0, 5).map((notice) => (
                <Link key={notice.id} to={ROUTES.NOTIFICATIONS} className="quick-notice">
                  <span className="quick-notice__dot" />
                  <div>
                    <p className="quick-notice__text">{notice.title}</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '4px' }}>{formatShortDate(notice.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents