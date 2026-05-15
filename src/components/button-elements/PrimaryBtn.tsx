import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import '../../styles/components/buttons.css'

interface PrimaryBtnProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  external?: boolean
  className?: string
  variant?: 'primary' | 'accent'
}

const PrimaryBtn = ({
  children, href, onClick, type = 'button', size = 'md',
  fullWidth, disabled, loading, icon, iconPosition = 'left',
  external, className = '', variant,
}: PrimaryBtnProps) => {
  const classes = [
    'btn', variant === 'accent' ? 'btn--accent' : 'btn--primary',
    size !== 'md' && `btn--${size}`,
    fullWidth && 'btn--full',
    loading && 'btn--loading',
    className,
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {loading && <span className="btn__icon"><Loader2 size={16} /></span>}
      {!loading && icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </>
  )

  if (href) {
    if (external) {
      return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{content}</a>
    }
    return <Link to={href} className={classes} onClick={onClick}>{content}</Link>
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  )
}

export default PrimaryBtn