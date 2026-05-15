import type { DiplomaData } from '../../types/diploma.types'
import DiplomaCard from '../../components/card-components/DiplomaCard'

interface RelatedDiplomasProps {
  courses: DiplomaData[]
}

const GridIcon = () => (
  <svg
    className="related-courses__title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
)

const RelatedDiplomas = ({ courses }: RelatedDiplomasProps) => {
  if (courses.length === 0) return null

  return (
    <div className="related-courses">
      <h2 className="related-courses__title">
        <GridIcon />
        Related Programmes You May Like
      </h2>

      <div className="related-courses__grid">
        {courses.map((course) => (
          <DiplomaCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default RelatedDiplomas