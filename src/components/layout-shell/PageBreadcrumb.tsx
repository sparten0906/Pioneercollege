import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'
import type { BreadcrumbItem } from '../../types/shared.types'
import '../../styles/components/breadcrumb.css'

interface PageBreadcrumbProps {
  items: BreadcrumbItem[]
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <div className="breadcrumb__item">
        <Link to="/" className="breadcrumb__link" aria-label="Home">
          <Home size={14} />
        </Link>
      </div>

      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={index} className="breadcrumb__item">
            <ChevronRight size={14} className="breadcrumb__separator" />
            {isLast || !item.path ? (
              <span className="breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="breadcrumb__link">
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default PageBreadcrumb