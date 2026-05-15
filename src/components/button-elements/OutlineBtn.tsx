import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import '../../styles/components/buttons.css'

interface OutlineBtnProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  variant?: 'primary' | 'accent' | 'white'
  icon?: ReactNode
  className?: string
  external?: boolean
}

const OutlineBtn = ({
  children, href, onClick, type = 'button', size = 'md',
  fullWidth, disabled, variant = 'primary', icon, className = '', external,
}: OutlineBtnProps) => {
  const variantClass = variant === 'accent' ? 'btn--outline-accent' : variant === 'white' ? 'btn--white' : 'btn--outline'
  const classes = ['btn', variantClass, size !== 'md' && `btn--${size}`, fullWidth && 'btn--full', className].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    if (external) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{content}</a>
    return <Link to={href} className={classes} onClick={onClick}>{content}</Link>
  }
  return <button type={type} className={classes} onClick={onClick} disabled={disabled}>{content}</button>
}

export default OutlineBtn