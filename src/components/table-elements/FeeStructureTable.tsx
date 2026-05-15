import type { FeeDetails } from '../../types/diploma.types'
import '../../styles/components/tables.css'

interface FeeStructureTableProps {
  fees: FeeDetails
  duration: string
}

const FeeStructureTable = ({ fees, duration }: FeeStructureTableProps) => {
  const isOneYear = !duration.includes('2')
  const years = isOneYear ? 1 : 2
  const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`

  return (
    <div className="table-wrap">
      <table className="data-table" aria-label="Fee Structure">
        <thead>
          <tr>
            <th>Fee Component</th>
            {Array.from({ length: years }, (_, i) => (
              <th key={i}>Year {i + 1}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admission Fee</td>
            {Array.from({ length: years }, (_, i) => (
              <td key={i}>{i === 0 ? formatINR(fees.admissionFee) : '—'}</td>
            ))}
            <td>{formatINR(fees.admissionFee)}</td>
          </tr>
          <tr>
            <td>Tuition Fee</td>
            {Array.from({ length: years }, () => (
              <td>{formatINR(fees.tuitionFeePerYear)}</td>
            ))}
            <td>{formatINR(fees.tuitionFeePerYear * years)}</td>
          </tr>
          <tr>
            <td>Examination Fee</td>
            {Array.from({ length: years }, () => (
              <td>{formatINR(fees.examFeePerYear)}</td>
            ))}
            <td>{formatINR(fees.examFeePerYear * years)}</td>
          </tr>
          <tr className="data-table__total-row">
            <td>Total Fees</td>
            {Array.from({ length: years }, (_, i) => (
              <td key={i}>{formatINR((i === 0 ? fees.admissionFee : 0) + fees.tuitionFeePerYear + fees.examFeePerYear)}</td>
            ))}
            <td className="data-table__highlight">{formatINR(fees.totalFee)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FeeStructureTable
