import type { FacultyMember } from '../../types/faculty.types'
import '../../styles/components/cards.css'

interface FacultyMemberCardProps {
  member: FacultyMember
  onClick?: () => void
}

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-accent)' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const FacultyMemberCard = ({ member, onClick }: FacultyMemberCardProps) => (
  <article
    className="card faculty-card hover-lift"
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  >
    <div className="faculty-card__photo-wrap">
      <img src={member.photo} alt={member.name} className="faculty-card__photo" loading="lazy" />
    </div>
    {member.isHOD && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-1)', marginBottom: 'var(--space-2)' }}>
        <StarIcon />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)', fontWeight: 'var(--font-semibold)' }}>Head of Department</span>
      </div>
    )}
    <h3 className="faculty-card__name">{member.name}</h3>
    <p className="faculty-card__designation">{member.designation}</p>
    <p className="faculty-card__dept">Exp: {member.experience} Years</p>
    <div className="faculty-card__subjects">
      {member.subjectsTaught.slice(0, 2).map((s) => (
        <span key={s} style={{ fontSize: '10px', padding: '2px 8px', background: 'var(--color-primary-ghost)', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', fontWeight: 'var(--font-medium)' }}>
          {s}
        </span>
      ))}
    </div>
  </article>
)

export default FacultyMemberCard