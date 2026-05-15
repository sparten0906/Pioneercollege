import '../../styles/components/cards.css'

const DiplomaCardSkeleton = () => (
  <div className="card diploma-card-skeleton" aria-busy="true" aria-label="Loading course">
    <div className="diploma-card__image-wrap" style={{ aspectRatio: '16/9' }} />
    <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <div className="skeleton-line skeleton-line--short" />
      <div className="skeleton-line skeleton-line--full" />
      <div className="skeleton-line skeleton-line--medium" />
      <div className="skeleton-line skeleton-line--full" />
      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-3)', display: 'flex', gap: 'var(--space-4)' }}>
        <div className="skeleton-line skeleton-line--short" style={{ height: '12px' }} />
        <div className="skeleton-line skeleton-line--short" style={{ height: '12px' }} />
      </div>
    </div>
  </div>
)

export default DiplomaCardSkeleton