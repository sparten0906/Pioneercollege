import { eligibilityCriteriaList } from '../../data/admission-deadlines'
import '../../styles/components/tables.css'

const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>

const EligibilityTable = () => (
  <div className="table-wrap">
    <table className="data-table" aria-label="Eligibility Criteria">
      <thead>
        <tr>
          <th>Programme Group</th>
          <th>Qualification</th>
          <th>Min. Marks</th>
          <th>Age Limit</th>
          <th>Stream</th>
        </tr>
      </thead>
      <tbody>
        {eligibilityCriteriaList.map((row) => (
          <tr key={row.courseGroup}>
            <td>
              <strong style={{ color: 'var(--color-primary)' }}>{row.courseGroup}</strong>
            </td>
            <td>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <CheckIcon /> {row.qualification}
              </span>
            </td>
            <td>{row.minMarks}</td>
            <td>{row.ageLimit}</td>
            <td>{row.subjects}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default EligibilityTable