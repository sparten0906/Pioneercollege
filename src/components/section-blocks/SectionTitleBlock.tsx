import type { ReactNode } from 'react'

interface SectionTitleBlockProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  accentWord?: string
  children?: ReactNode
}

const SectionTitleBlock = ({ title, subtitle, align = 'center', accentWord, children }: SectionTitleBlockProps) => {
  const renderTitle = () => {
    if (!accentWord) return title
    const parts = title.split(accentWord)
    return (
      <>
        {parts[0]}
        <span style={{ color: 'var(--color-accent)' }}>{accentWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div style={{ textAlign: align, marginBottom: 'var(--space-12)' }}>
      <h2 style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--color-text-primary)',
        lineHeight: 'var(--leading-tight)',
        marginBottom: subtitle ? 'var(--space-4)' : '0',
      }}>
        {renderTitle()}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 'var(--text-md)',
          color: 'var(--color-text-muted)',
          lineHeight: 'var(--leading-relaxed)',
          maxWidth: align === 'center' ? '600px' : '100%',
          margin: align === 'center' ? '0 auto' : '0',
          marginBottom: children ? 'var(--space-6)' : '0',
        }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

export default SectionTitleBlock