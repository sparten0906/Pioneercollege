import type { DiplomaData } from '../../types/diploma.types'
import FeeStructureTable from '../../components/table-elements/FeeStructureTable'
import { formatDuration } from '../../utils/date-formatter'

interface DurationFeesBlockProps {
  diploma: DiplomaData
}

const formatINR = (n: number): string => `₹${n.toLocaleString('en-IN')}`

const DurationFeesBlock = ({ diploma }: DurationFeesBlockProps) => {
  const { fees, durationMonths, duration } = diploma

  return (
    <div className="duration-fees-panel">
      {/* Summary cards */}
      <div className="duration-fees-panel__summary">
        <div className="fee-summary-card">
          <p className="fee-summary-card__label">Duration</p>
          <p className="fee-summary-card__value">{duration}</p>
          <p className="fee-summary-card__sub">
            {formatDuration(durationMonths)}
          </p>
        </div>

        <div className="fee-summary-card">
          <p className="fee-summary-card__label">Annual Tuition</p>
          <p className="fee-summary-card__value">
            {formatINR(fees.tuitionFeePerYear)}
          </p>
          <p className="fee-summary-card__sub">per year</p>
        </div>

        <div className="fee-summary-card fee-summary-card--total">
          <p className="fee-summary-card__label">Total Programme Fee</p>
          <p className="fee-summary-card__value">
            {formatINR(fees.totalFee)}
          </p>
          <p className="fee-summary-card__sub">all inclusive</p>
        </div>
      </div>

      {/* Detailed fee table */}
      <p className="duration-fees-panel__table-title">
        Detailed Fee Breakup
      </p>
      <FeeStructureTable fees={fees} duration={duration} />

      {/* Instalment note */}
      <p
        style={{
          marginTop: 'var(--space-5)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        * Fees can be paid in instalments as per institute policy. All
        fees are inclusive of examination fee. Late fee and re-examination
        fee are charged separately as per UP Paramedical Council norms.
        Fee structure is subject to revision for each academic session.
      </p>

      {/* Scholarship note */}
      <div
        style={{
          marginTop: 'var(--space-5)',
          padding: 'var(--space-4) var(--space-5)',
          background: 'var(--color-success-light)',
          border: '1px solid rgba(39,174,96,0.2)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--space-3)',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '1px' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-success-dark)', lineHeight: 'var(--leading-relaxed)' }}>
          <strong style={{ display: 'block', marginBottom: '2px' }}>
            Scholarships Available
          </strong>
          SC/ST/OBC/EWS students can apply for UP Government post-matric
          scholarships. The institute also offers a merit scholarship for
          students who top UP Paramedical Council examinations.
        </div>
      </div>
    </div>
  )
}

export default DurationFeesBlock