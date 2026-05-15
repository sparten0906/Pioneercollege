import { useState } from 'react'
import type { ReactElement } from 'react'
import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import AllNoticesList from './AllNoticesList'
import NewAnnounceBadge from '../../components/badge-elements/NewAnnounceBadge'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import type { NoticeEntry, NoticeTag } from '../../types/announcement.types'
import {
  siteAnnouncements,
  getPinnedNotices,
  getNoticesByTag,
} from '../../data/site-announcements'

import { isExpired } from '../../utils/date-formatter'
import { formatShortDate } from '../../utils/date-formatter'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import { ROUTES } from '../../constants/route-paths.constants'
import '../../styles/pages/notifications-page.css'

/* ---- Tag filter options ---- */
const TAG_OPTIONS: { value: 'all' | NoticeTag; label: string }[] = [
  { value: 'all',       label: 'All Notices' },
  { value: 'admission', label: 'Admission' },
  { value: 'exam',      label: 'Examination' },
  { value: 'result',    label: 'Results' },
  { value: 'event',     label: 'Events' },
  { value: 'urgent',    label: 'Urgent' },
  { value: 'general',   label: 'General' },
  { value: 'holiday',   label: 'Holidays' },
]

/* Tag icons */
const tagIconMap: Record<NoticeTag | 'all', ReactElement> = {
  all: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  admission: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  exam: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  result: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  event: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  urgent: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  general: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  holiday: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
}

/* Sidebar icons */
const PinIcon = () => (
  <svg className="notices-sidebar-widget__header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="notices-sidebar-widget__header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const NotificationsPage = () => {
  const [activeTag, setActiveTag] = useState<'all' | NoticeTag>('all')

  /* Filter out expired and apply tag filter */
  const activeNotices = siteAnnouncements.filter(
    (n) => !isExpired(n.expiresAt),
  )

  const filtered: NoticeEntry[] =
    activeTag === 'all'
      ? activeNotices
      : getNoticesByTag(activeTag).filter((n) => !isExpired(n.expiresAt))

  const pinnedNotices = getPinnedNotices().filter(
    (n) => !isExpired(n.expiresAt),
  )

  const newCount = activeNotices.filter((n) => n.isNew).length

  /* Per-tag count for sidebar stats */
  const tagCounts: Partial<Record<NoticeTag, number>> = {}
  activeNotices.forEach((n) => {
    tagCounts[n.tag] = (tagCounts[n.tag] ?? 0) + 1
  })

  return (
    <>
      <SeoMetaTags {...SEO_PER_PAGE.notifications} />

      {/* ---- HERO ---- */}
      <section className="notifications-hero">
        <div className="page-wrapper">
          <div style={{ marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
            <PageBreadcrumb items={[{ label: 'Notifications' }]} />
          </div>

          <div className="notifications-hero__inner">
            <p className="notifications-hero__label">
              <span className="notifications-hero__label-line" />
              Notice Board
            </p>

            <h1 className="notifications-hero__title">
              Notifications &amp; <span>Notices</span>
            </h1>

            <p className="notifications-hero__desc">
              Stay updated with the latest announcements, examination
              schedules, result declarations, and important notices from
              BBS Group of Educational Institutes.
              {newCount > 0 && (
                <strong style={{ color: 'var(--color-accent-light)', display: 'block', marginTop: 'var(--space-2)' }}>
                  {newCount} new {newCount === 1 ? 'notice' : 'notices'} today.
                </strong>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ---- MAIN CONTENT ---- */}
      <section className="section section--gray">
        <div className="page-wrapper">

          {/* Toolbar */}
          <div className="notifications-toolbar">
            <div className="notifications-toolbar__top">
              <p className="notifications-toolbar__title">
                All Notices
                <span className="notifications-toolbar__count">
                  {' '}— <strong>{filtered.length}</strong>{' '}
                  {filtered.length === 1 ? 'notice' : 'notices'}
                </span>
              </p>
            </div>

            <div className="notifications-toolbar__divider" />

            {/* Tag filter pills */}
            <div className="notice-tag-filter" role="tablist" aria-label="Filter notices by type">
              <span className="notice-tag-filter__label">Filter:</span>
              {TAG_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="tab"
                  aria-selected={activeTag === opt.value}
                  className={`pill-tabs__item${activeTag === opt.value ? ' is-active' : ''}`}
                  onClick={() => setActiveTag(opt.value)}
                >
                  <span className="pill-tabs__icon">
                    {tagIconMap[opt.value]}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Layout: list + sidebar */}
          <div className="notices-layout">

            {/* Main notices list */}
            <div>
              <AllNoticesList
                key={activeTag}
                notices={filtered}
                onClearFilter={() => setActiveTag('all')}
                hasActiveFilter={activeTag !== 'all'}
              />
            </div>

            {/* Sticky sidebar */}
            <aside className="notices-sidebar">

              {/* Pinned notices widget */}
              {pinnedNotices.length > 0 && (
                <div className="notices-sidebar-widget">
                  <div className="notices-sidebar-widget__header">
                    <PinIcon />
                    <h3 className="notices-sidebar-widget__title">
                      Pinned Notices
                    </h3>
                  </div>
                  <div className="notices-sidebar-widget__body">
                    {pinnedNotices.map((notice) => (
                      <div key={notice.id} className="sidebar-pinned-item">
                        <span className="sidebar-pinned-item__dot" />
                        <div>
                          <p className="sidebar-pinned-item__title">
                            {notice.title}
                          </p>
                          <p className="sidebar-pinned-item__date">
                            {formatShortDate(notice.date)}
                          </p>
                        </div>
                        {notice.isNew && <NewAnnounceBadge />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notice stats widget */}
              <div className="notices-sidebar-widget">
                <div className="notices-sidebar-widget__header">
                  <ChartIcon />
                  <h3 className="notices-sidebar-widget__title">
                    Notices by Category
                  </h3>
                </div>
                <div className="notices-sidebar-widget__body">
                  {TAG_OPTIONS.slice(1).map((opt) => {
                    const count = tagCounts[opt.value as NoticeTag] ?? 0
                    if (count === 0) return null
                    return (
                      <div key={opt.value} className="sidebar-tag-stat">
                        <span className="sidebar-tag-stat__label">{opt.label}</span>
                        <span className="sidebar-tag-stat__count">{count}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick links */}
              <div
                style={{
                  background: 'var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-bold)',
                    color: '#fff',
                  }}
                >
                  Admissions Open — 2025–26
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255,255,255,0.80)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  Applications are being accepted for all 16 paramedical
                  diploma programmes. Apply before the last date.
                </p>
                <PrimaryBtn
                  href={ROUTES.ADMISSIONS}
                  size="sm"
                  fullWidth
                >
                  Apply Now
                </PrimaryBtn>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotificationsPage