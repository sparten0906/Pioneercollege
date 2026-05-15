import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { statCounters } from '../../data/institute-achievements'
import useCountUpOnView from '../../hooks/useCountUpOnView'

interface StatCardProps {
  label: string
  value: number
  suffix: string
  icon: string
}

const StatCard = ({ label, value, suffix, icon }: StatCardProps) => {
  const { count, ref } = useCountUpOnView({ target: value, duration: 2000 })

  const iconMap: Record<string, string> = {
    calendar:  '📅',
    book:      '📚',
    users:     '👨‍⚕️',
    briefcase: '💼',
  }

  return (
    <div className="alumni-stat-card">
      <span className="alumni-stat-card__icon">{iconMap[icon] ?? '⭐'}</span>
      <span className="alumni-stat-card__value">
        <span ref={ref as any}>{count}</span>
        {suffix}
      </span>
      <span className="alumni-stat-card__label">{label}</span>
    </div>
  )
}

const AlumniHighlightsBlock = () => {
  const ref = useRevealOnScroll<HTMLElement>({ threshold: 0.15, once: true })

  return (
    <section className="alumni-highlights" ref={ref}>
      <div className="alumni-highlights__inner page-wrapper">
        <div className="alumni-highlights__header reveal-up">
          <h2 className="alumni-highlights__title">Our Impact in Numbers</h2>
          <p className="alumni-highlights__subtitle">
            BBS Institute graduates are making a difference across hospitals,
            diagnostic centres, and healthcare facilities all over India.
          </p>
        </div>

        <div className="alumni-highlights__grid">
          {statCounters.map((stat, i) => (
            <div
              key={stat.id}
              className="reveal-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <StatCard
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>

        <div className="alumni-highlights__placement reveal-up">
          <div className="alumni-highlights__placement-badge">
            <span className="alumni-highlights__placement-pct">92%</span>
            <span className="alumni-highlights__placement-text">
              Placement Rate — Batch 2022–23
            </span>
          </div>
          <p className="alumni-highlights__placement-note">
            Over 2,000 BBS graduates are now working in leading hospitals,
            government health centres, diagnostic chains, and private clinics
            across Uttar Pradesh and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AlumniHighlightsBlock