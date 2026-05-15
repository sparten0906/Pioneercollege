import type { FacultyMember } from '../../types/faculty.types'
import ModalWrapper from './ModalWrapper'

interface FacultyProfileModalProps {
  member: FacultyMember | null
  onClose: () => void
}

const FacultyProfileModal = ({ member, onClose }: FacultyProfileModalProps) => {
  if (!member) return null

  return (
    <ModalWrapper isOpen={!!member} onClose={onClose} title={member.name} size="md">
      <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <img src={member.photo} alt={member.name} style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--color-primary-pale)' }} />
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>{member.designation}</p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>Experience: {member.experience} years</p>
          {member.email && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)' }}><a href={`mailto:${member.email}`}>{member.email}</a></p>}
        </div>
      </div>
      <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{member.bio}</p>
      {member.qualifications.length > 0 && (
        <div style={{ marginTop: 'var(--space-5)' }}>
          <h4 style={{ fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)' }}>Qualifications</h4>
          {member.qualifications.map((q, i) => (
            <div key={i} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>{q.degree}</strong>
              {q.specialization && ` — ${q.specialization}`}
              <span style={{ color: 'var(--color-text-muted)' }}> · {q.institution}, {q.year}</span>
            </div>
          ))}
        </div>
      )}
    </ModalWrapper>
  )
}

export default FacultyProfileModal