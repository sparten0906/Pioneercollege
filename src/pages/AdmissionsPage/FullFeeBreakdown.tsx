import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { ALL_DIPLOMAS } from '../../data/paramedical-courses'
import CourseCategoryBadge from '../../components/badge-elements/CourseCategoryBadge'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const formatINR = (n: number): string => `₹${n.toLocaleString('en-IN')}`

const FullFeeBreakdown = () => {
  /*
   * useRevealOnScroll — wraps the entire fee breakdown container.
   * The summary stat cards and the table each carry .reveal-up
   * so they stagger in as the user scrolls into this section.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  /* Aggregate stats across all 16 diplomas */
  const minFee = Math.min(...ALL_DIPLOMAS.map((d) => d.fees.totalFee))
  const maxFee = Math.max(...ALL_DIPLOMAS.map((d) => d.fees.totalFee))
  const avgFee = Math.round(
    ALL_DIPLOMAS.reduce((sum, d) => sum + d.fees.totalFee, 0) / ALL_DIPLOMAS.length
  )

  return (
    <div className="fee-breakdown" ref={sectionRef}>
      <SectionTitleBlock
        title="Fee Structure — All Programmes"
        subtitle="Transparent, affordable fees with no hidden charges. Scholarships and instalment options available."
        align="center"
        accentWord="Fee Structure"
      />

      {/* Summary stats */}
      <div className="fee-breakdown__summary-grid">
        <div className="fee-summary-stat reveal-up stagger-1">
          <p className="fee-summary-stat__value">{formatINR(minFee)}</p>
          <p className="fee-summary-stat__label">Lowest Programme Fee</p>
        </div>
        <div className="fee-summary-stat reveal-up stagger-2">
          <p className="fee-summary-stat__value">{formatINR(maxFee)}</p>
          <p className="fee-summary-stat__label">Highest Programme Fee</p>
        </div>
        <div className="fee-summary-stat reveal-up stagger-3">
          <p className="fee-summary-stat__value">{formatINR(avgFee)}</p>
          <p className="fee-summary-stat__label">Average Programme Fee</p>
        </div>
        <div className="fee-summary-stat reveal-up stagger-4">
          <p className="fee-summary-stat__value">
            {ALL_DIPLOMAS.filter((d) => d.durationMonths === 12).length}
          </p>
          <p className="fee-summary-stat__label">One-Year Programmes</p>
        </div>
      </div>

      {/* Full table */}
      <div className="reveal-up" style={{ overflowX: 'auto', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <table
          style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}
          aria-label="Full fee structure for all diploma programmes"
        >
          <thead>
            <tr style={{ background: 'var(--color-primary)', color: '#fff' }}>
              <th style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'left', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>Programme</th>
              <th style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'left', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>Category</th>
              <th style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'left', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>Duration</th>
              <th style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'right', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>Admission Fee</th>
              <th style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'right', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>Tuition/Year</th>
              <th style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'right', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>Total Fee</th>
            </tr>
          </thead>
          <tbody>
            {ALL_DIPLOMAS.map((diploma, index) => (
              <tr
                key={diploma.id}
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  background: index % 2 === 0 ? 'var(--color-bg-primary)' : 'var(--color-bg-secondary)',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <td style={{ padding: 'var(--space-4) var(--space-5)', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-primary)', minWidth: '240px' }}>
                  {diploma.title}
                </td>
                <td style={{ padding: 'var(--space-4) var(--space-5)' }}>
                  <CourseCategoryBadge category={diploma.category} />
                </td>
                <td style={{ padding: 'var(--space-4) var(--space-5)', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                  {diploma.duration}
                </td>
                <td style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'right', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                  {formatINR(diploma.fees.admissionFee)}
                </td>
                <td style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'right', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                  {formatINR(diploma.fees.tuitionFeePerYear)}
                </td>
                <td style={{ padding: 'var(--space-4) var(--space-5)', textAlign: 'right', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-bold)', color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>
                  {formatINR(diploma.fees.totalFee)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p
        style={{
          marginTop: 'var(--space-4)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        * Fee amounts are for session 2025–26 and are subject to revision.
        Examination fee is included in the total. Late fee and re-examination
        fee are charged separately as per UP Paramedical Council norms.
        Instalment facility available — enquire at the admissions office.
      </p>
    </div>
  )
}

export default FullFeeBreakdown