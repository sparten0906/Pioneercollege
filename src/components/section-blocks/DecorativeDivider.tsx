interface DecorativeDividerProps {
  variant?: 'line' | 'dots' | 'wave'
}

const DecorativeDivider = ({ variant = 'line' }: DecorativeDividerProps) => {
  if (variant === 'dots') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', margin: 'var(--space-6) 0' }}>
        <span style={{ width: '32px', height: '3px', borderRadius: 'var(--radius-full)', background: 'var(--color-accent)' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: 'var(--radius-full)', background: 'var(--color-primary)' }} />
        <span style={{ width: '32px', height: '3px', borderRadius: 'var(--radius-full)', background: 'var(--color-accent)' }} />
      </div>
    )
  }
  return (
    <div style={{ margin: 'var(--space-6) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
      <span style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
      <span style={{ width: '6px', height: '6px', borderRadius: 'var(--radius-full)', background: 'var(--color-accent)' }} />
      <span style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
    </div>
  )
}

export default DecorativeDivider