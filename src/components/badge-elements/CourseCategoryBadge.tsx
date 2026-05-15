import type { DiplomaCategory } from '../../types/diploma.types'
import { DIPLOMA_CATEGORIES } from '../../constants/dept-categories.constants'
import '../../styles/components/badges.css'

interface CourseCategoryBadgeProps { category: DiplomaCategory }

const CourseCategoryBadge = ({ category }: CourseCategoryBadgeProps) => {
  const meta = DIPLOMA_CATEGORIES.find((c) => c.value === category)
  return (
    <span className={`badge badge--${category}`}>
      {meta?.label ?? category}
    </span>
  )
}

export default CourseCategoryBadge