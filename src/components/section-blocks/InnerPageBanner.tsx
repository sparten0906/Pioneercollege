interface InnerPageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  breadcrumb?: ReactNode
}

import type { ReactNode } from 'react'

const InnerPageBanner = ({ title, subtitle, backgroundImage, breadcrumb }: InnerPageBannerProps) => (
  <section
    style={{
      background: backgroundImage
        ? `linear-gradient(to right, rgba(27,79,114,0.92), rgba(27,79,114,0.75)), url(${backgroundImage}) center/cover no-repeat`
        : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
      padding: 'var(--space-16) 0 var(--space-12)',
      color: '#fff',
    }}
  >
    <div className="page-wrapper">
      {breadcrumb && (
        <div style={{ marginBottom: 'var(--space-4)', opacity: 0.85 }}>
          {breadcrumb}
        </div>
      )}
      <h1 style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-4xl)',
        fontWeight: 'var(--font-bold)',
        color: '#fff',
        lineHeight: 'var(--leading-tight)',
        marginBottom: subtitle ? 'var(--space-3)' : '0',
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,255,255,0.85)', lineHeight: 'var(--leading-relaxed)', maxWidth: '600px' }}>
          {subtitle}
        </p>
      )}
    </div>
  </section>
)

export default InnerPageBanner