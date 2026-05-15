import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import EligibilityTable from '../../components/table-elements/EligibilityTable'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const StreamEligibility = () => {
  /*
   * useRevealOnScroll — wraps the section container.
   * The EligibilityTable inside will animate in when it enters the viewport
   * because the table root div carries the .reveal-up class.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
  })

  return (
    <div className="eligibility-section" ref={sectionRef}>
      <SectionTitleBlock
        title="Eligibility Criteria"
        subtitle="Check the qualification requirements for each group of diploma programmes before applying."
        align="center"
        accentWord="Eligibility Criteria"
      />

      {/* The EligibilityTable renders data from admission-deadlines.ts */}
      <div className="reveal-up">
        <EligibilityTable />
      </div>

      <p
        style={{
          marginTop: 'var(--space-5)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        * Age limit and minimum percentage requirements are as per UP Paramedical
        Council regulations for session 2025–26 and may be revised by the Council.
        Candidates from reserved categories (SC/ST/OBC) may be eligible for
        relaxation in minimum marks as per UP Government norms.
      </p>
    </div>
  )
}

export default StreamEligibility