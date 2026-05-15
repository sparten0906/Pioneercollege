import type { ReactElement } from 'react'
import type { NoticeEntry, NoticeTag } from '../../types/announcement.types'
import NewAnnounceBadge from '../../components/badge-elements/NewAnnounceBadge'
import { formatShortDate, isExpired } from '../../utils/date-formatter'

interface SingleNoticeCardProps {
  notice: NoticeEntry
}

/* Tag-specific icon map */
const tagIconMap: Record<NoticeTag, ReactElement> = {
  admission: (
    <svg className="notice-full-card__icon" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  exam: (
    <svg className="notice-full-card__icon" style={{ color: 'var(--color-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  result: (
    <svg className="notice-full-card__icon" style={{ color: 'var(--color-success)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  event: (
    <svg className="notice-full-card__icon" style={{ color: '#0e6655' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  holiday: (
    <svg className="notice-full-card__icon" style={{ color: '#6c3483' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  urgent: (
    <svg className="notice-full-card__icon" style={{ color: 'var(--color-error)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  general: (
    <svg className="notice-full-card__icon" style={{ color: 'var(--color-text-muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

/* Tag label map */
const tagLabelMap: Record<NoticeTag, string> = {
  admission: 'Admission',
  exam:      'Examination',
  result:    'Result',
  event:     'Event',
  holiday:   'Holiday',
  urgent:    'Urgent',
  general:   'General',
}

/* Border class based on tag */
const tagBorderClass: Record<NoticeTag | 'pinned', string> = {
  admission: 'notice-full-card--admission',
  exam:      'notice-full-card--exam',
  result:    'notice-full-card--result',
  event:     'notice-full-card--event',
  holiday:   'notice-full-card--holiday',
  urgent:    'notice-full-card--urgent',
  general:   'notice-full-card--general',
  pinned:    'notice-full-card--pinned',
}

const CalendarIcon = () => (
  <svg className="notice-full-card__date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="notice-full-card__download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const SingleNoticeCard = ({ notice }: SingleNoticeCardProps) => {
  const borderClass = notice.isPinned
    ? tagBorderClass.pinned
    : tagBorderClass[notice.tag]

  /* Check if notice is expiring soon (within 3 days) */
  const isExpiringSoon =
    notice.expiresAt
      ? (new Date(notice.expiresAt).getTime() - Date.now()) < 3 * 24 * 60 * 60 * 1000 &&
        !isExpired(notice.expiresAt)
      : false

  return (
    <article className={`notice-full-card ${borderClass}`}>
      {/* Header */}
      <div className="notice-full-card__header">
        <div className="notice-full-card__icon-wrap">
          {tagIconMap[notice.tag]}
        </div>

        <div className="notice-full-card__meta">
          <div className="notice-full-card__badges">
            {/* Tag badge */}
            <span className={`badge badge--${notice.tag}`}>
              {tagLabelMap[notice.tag]}
            </span>

            {/* Pinned badge */}
            {notice.isPinned && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: '2px 8px',
                  background: 'var(--color-primary-ghost)',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '10px',
                  fontWeight: 'var(--font-bold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  border: '1px solid var(--color-primary-pale)',
                }}
              >
                📌 Pinned
              </span>
            )}

            {/* New badge */}
            {notice.isNew && <NewAnnounceBadge />}

            {/* Expiring soon */}
            {isExpiringSoon && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '2px 8px',
                  background: 'var(--color-warning-light)',
                  color: 'var(--color-warning-dark)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '10px',
                  fontWeight: 'var(--font-bold)',
                }}
              >
                ⏰ Expiring Soon
              </span>
            )}
          </div>

          <h2 className="notice-full-card__title">{notice.title}</h2>
        </div>
      </div>

      {/* Body */}
      {(notice.description || notice.attachmentUrl || notice.expiresAt) && (
        <div className="notice-full-card__body">
          {notice.description && (
            <p className="notice-full-card__desc">{notice.description}</p>
          )}

          <div className="notice-full-card__footer">
            {/* Date */}
            <span className="notice-full-card__date">
              <CalendarIcon />
              Posted: {formatShortDate(notice.date)}
              {notice.expiresAt && !isExpired(notice.expiresAt) && (
                <span style={{ marginLeft: 'var(--space-3)', color: 'var(--color-text-light)' }}>
                  · Valid until: {formatShortDate(notice.expiresAt)}
                </span>
              )}
            </span>

            {/* Download attachment */}
            {notice.attachmentUrl && (
              <a
                href={notice.attachmentUrl}
                download
                className="notice-full-card__download-link"
                aria-label={`Download attachment for ${notice.title}`}
              >
                <DownloadIcon />
                Download Attachment
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

export default SingleNoticeCard