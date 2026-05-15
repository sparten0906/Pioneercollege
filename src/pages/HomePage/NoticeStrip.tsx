import { Link } from 'react-router-dom'
import { useNotices } from '../../context/NoticeContext'
import { ROUTES } from '../../constants/route-paths.constants'

const BellIcon = () => (
  <svg className="notice-strip__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
  </svg>
)

const NoticeStrip = () => {
  const { activeNotices } = useNotices()
  if (activeNotices.length === 0) return null
  const doubled = [...activeNotices, ...activeNotices]

  return (
    <div className="notice-strip" role="marquee" aria-label="Latest announcements">
      <div className="page-wrapper">
        <div className="notice-strip__inner">
          <Link to={ROUTES.NOTIFICATIONS} className="notice-strip__label" aria-label="View all notices">
            <BellIcon />
            Notice Board
          </Link>
          <div className="notice-strip__ticker">
            <div className="notice-strip__items">
              {doubled.map((n, i) => (
                <span key={`${n.id}-${i}`} className="notice-strip__item">
                  <span className="notice-strip__item-sep">&#9670;</span>
                  {n.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeStrip