import { getPinnedNotices } from '../../data/site-announcements'
import '../../styles/components/marquee-ticker.css'

const BellIcon = () => (
  <svg className="marquee-ticker__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

const MarqueeAnnouncement = () => {
  const pinned = getPinnedNotices()
  if (pinned.length === 0) return null

  const doubled = [...pinned, ...pinned]

  return (
    <div className="marquee-ticker" aria-label="Latest announcements">
      <div className="marquee-ticker__label">
        <BellIcon />
        Notice
      </div>
      <div className="marquee-ticker__track">
        <div className="marquee-ticker__content">
          {doubled.map((notice, i) => (
            <span key={`${notice.id}-${i}`} className={`marquee-ticker__item${notice.isNew ? ' marquee-ticker__item--new' : ''}`}>
              <span className="marquee-ticker__item-dot" />
              {notice.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarqueeAnnouncement