import type { ReactElement } from 'react'
import type { NoticeEntry } from '../../types/announcement.types'
import { formatShortDate } from '../../utils/date-formatter'
import NewAnnounceBadge from '../badge-elements/NewAnnounceBadge'
import '../../styles/components/cards.css'
import '../../styles/components/badges.css'

interface NoticeBoardCardProps { notice: NoticeEntry }

const tagIcons: Record<string, ReactElement> = {
  admission: <svg className="notice-card__icon" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  exam: <svg className="notice-card__icon" style={{ color: 'var(--color-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  result: <svg className="notice-card__icon" style={{ color: 'var(--color-success)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  event: <svg className="notice-card__icon" style={{ color: '#0E6655' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  holiday: <svg className="notice-card__icon" style={{ color: '#6C3483' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
  urgent: <svg className="notice-card__icon" style={{ color: 'var(--color-error)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  general: <svg className="notice-card__icon" style={{ color: 'var(--color-text-muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
}

const CalIcon = () => <svg className="notice-card__date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
const DownloadIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>

const NoticeBoardCard = ({ notice }: NoticeBoardCardProps) => (
  <div className={`card notice-card notice-card--${notice.tag}`}>
    <div className="notice-card__icon-wrap">
      {tagIcons[notice.tag]}
    </div>
    <div className="notice-card__content">
      <div className="notice-card__header">
        <h4 className="notice-card__title">{notice.title}</h4>
        {notice.isNew && <NewAnnounceBadge />}
      </div>
      {notice.description && (
        <p className="notice-card__desc">{notice.description}</p>
      )}
      <div className="notice-card__footer">
        <span className="notice-card__date">
          <CalIcon /> {formatShortDate(notice.date)}
        </span>
        <span className={`badge badge--${notice.tag}`}>{notice.tag.toUpperCase()}</span>
        {notice.attachmentUrl && (
          <a href={notice.attachmentUrl} download style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)', textDecoration: 'none' }}>
            <DownloadIcon /> Download
          </a>
        )}
      </div>
    </div>
  </div>
)

export default NoticeBoardCard