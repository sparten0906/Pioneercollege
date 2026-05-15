import { useState, type ReactNode } from 'react'
import '../../styles/components/accordion.css'

interface CollapsiblePanelProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

const ChevronIcon = () => (
  <svg className="accordion-trigger__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const CollapsiblePanel = ({ title, children, defaultOpen = false }: CollapsiblePanelProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const id = title.replace(/\s+/g, '-').toLowerCase()

  return (
    <div className={`accordion-item${open ? ' is-open' : ''}`}>
      <button
        className="accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        id={`trigger-${id}`}
      >
        <span className="accordion-trigger__text">{title}</span>
        <ChevronIcon />
      </button>
      <div
        id={`panel-${id}`}
        className={`accordion-panel${open ? ' is-open' : ''}`}
        role="region"
        aria-labelledby={`trigger-${id}`}
      >
        <div className="accordion-panel__content">{children}</div>
      </div>
    </div>
  )
}

export default CollapsiblePanel