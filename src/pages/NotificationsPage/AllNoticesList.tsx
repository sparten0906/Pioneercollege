import type { NoticeEntry } from '../../types/announcement.types'
import SingleNoticeCard from './SingleNoticeCard'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface AllNoticesListProps {
  notices:        NoticeEntry[]
  onClearFilter:  () => void
  hasActiveFilter:boolean
}

const BellOffIcon = () => (
  <svg
    className="notices-empty__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.172 9.172a4 4 0 015.656 0M9.172 9.172L3 3m6.172 6.172L21 21M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
)

const AllNoticesList = ({
  notices,
  onClearFilter,
  hasActiveFilter,
}: AllNoticesListProps) => {
  /*
   * useRevealOnScroll — wraps the entire notices list container.
   *
   * Individual SingleNoticeCard components carry .reveal-up + stagger
   * classes that animate in as the list enters the viewport.
   *
   * threshold: 0.05 — fires very early because the list can be long
   *            and we don't want the animation to not trigger just
   *            because the user can't scroll 10% of the full list
   *            into view at once.
   * rootMargin: -30px bottom gives a small buffer before triggering
   * once: true — each card animates in once and stays visible
   */
  const listRef = useRevealOnScroll<HTMLDivElement>({
    threshold:  0.05,
    rootMargin: '0px 0px -30px 0px',
    once:       true,
  })

  if (notices.length === 0) {
    return (
      <div className="notices-empty">
        <BellOffIcon />
        <h3 className="notices-empty__title">No notices found</h3>
        <p className="notices-empty__desc">
          No notices match the selected filter. Try selecting a different
          category or view all notices.
        </p>
        {hasActiveFilter && (
          <PrimaryBtn onClick={onClearFilter} size="md">
            View All Notices
          </PrimaryBtn>
        )}
      </div>
    )
  }

  return (
    <div
      className="notices-main-list"
      ref={listRef}
    >
      {notices.map((notice, index) => (
        <div
          key={notice.id}
          className={`reveal-up stagger-${Math.min((index % 8) + 1, 8)}`}
        >
          <SingleNoticeCard notice={notice} />
        </div>
      ))}
    </div>
  )
}

export default AllNoticesList