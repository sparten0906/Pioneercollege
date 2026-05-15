import type { ReactNode } from 'react'
import '../../styles/components/buttons.css'

interface AnchorLinkBtnProps {
  href: string
  children: ReactNode
  download?: boolean
  className?: string
  icon?: ReactNode
}

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const AnchorLinkBtn = ({ href, children, download, className = '', icon }: AnchorLinkBtnProps) => (
  <a
    href={href}
    className={`btn btn--outline ${className}`}
    download={download}
    target={!download ? '_blank' : undefined}
    rel={!download ? 'noopener noreferrer' : undefined}
  >
    <span className="btn__icon">{icon ?? (download ? <DownloadIcon /> : null)}</span>
    {children}
  </a>
)

export default AnchorLinkBtn