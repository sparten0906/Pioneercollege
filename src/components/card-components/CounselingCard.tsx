import { Link } from 'react-router-dom'
import type { CounselingProgram } from '../../types/counseling.types'
import CounselingTagBadge from '../badge-elements/CounselingTagBadge'
import '../../styles/components/cards.css'

interface CounselingCardProps { program: CounselingProgram }

const ArrowRightIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
const InfoIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

const CounselingCard = ({ program }: CounselingCardProps) => (
  <article className="card diploma-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}>
    <Link
      to={`/courses/${program.slug}`}
      style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}
    >
      {program.thumbnail && (
        <div className="diploma-card__image-wrap">
          <img
            src={program.thumbnail}
            alt={program.title}
            className="diploma-card__image"
            loading="lazy"
            width="400"
            height="225"
          />
          <div className="diploma-card__overlay" />
        </div>
      )}

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1, borderLeft: '3px solid var(--color-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2)' }}>
          <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)', lineHeight: 'var(--leading-snug)' }}>
            {program.fullTitle}
          </h3>
          <CounselingTagBadge />
        </div>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {program.description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-3)', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
            <InfoIcon />
            <span>Duration: <strong style={{ color: 'var(--color-primary)' }}>{program.duration}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
            <InfoIcon />
            <span>Counseling: <strong style={{ color: 'var(--color-primary)' }}>{program.externalCounselingBody}</strong></span>
          </div>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-accent)', marginTop: 'var(--space-1)' }}>
          Learn More <ArrowRightIcon />
        </div>
      </div>
    </Link>
  </article>
)

export default CounselingCard