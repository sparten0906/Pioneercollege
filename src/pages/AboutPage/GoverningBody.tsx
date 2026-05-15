import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { getAboutImage } from '../../utils/asset-path-resolver'
import { INSTITUTE } from '../../constants/institute.constants'

interface CommitteeMember {
  name:      string
  role:      string
  imageKey:  string | null
}

const committeeMembers: CommitteeMember[] = [
  {
    name:     INSTITUTE.chairman,
    role:     'Chairman & Founder',
    imageKey: null,
  },
  {
    name:     INSTITUTE.director,
    role:     'Director',
    imageKey: 'director-photo.webp',
  },
  {
    name:     INSTITUTE.principal,
    role:     'Principal',
    imageKey: 'principal-photo.webp',
  },
  {
    name:     'Vikram singh',
    role:     'Vice Principal',
    imageKey: 'vice-principal-photo.webp',
  },
  {
    name:     'Shri [Member Name]',
    role:     'Academic Secretary',
    imageKey: null,
  },
  {
    name:     'Shri [Member Name]',
    role:     'Treasurer',
    imageKey: null,
  },
  {
    name:     'Dr. [Member Name]',
    role:     'External Expert Member',
    imageKey: null,
  },
  {
    name:     'Shri [Member Name]',
    role:     'Industry Representative',
    imageKey: null,
  },
]

const UserPlaceholder = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'var(--color-bg-tertiary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ color: 'var(--color-text-light)' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
      />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
)

const GoverningBody = () => {
  return (
    <div className="governing-body">
      <SectionTitleBlock
        title="Governing Body"
        subtitle="The leadership committee that guides BBS Institute's academic and administrative direction."
        align="center"
        accentWord="Governing Body"
      />

      <div className="governing-body__grid">
        {committeeMembers.map((member) => (
          <div
            key={`${member.name}-${member.role}`}
            className="governing-member-card reveal-up"
          >
            <div className="governing-member-card__photo-wrap">
              {member.imageKey ? (
                <img
                  src={getAboutImage(member.imageKey)}
                  alt={`${member.name} — ${member.role}`}
                  className="governing-member-card__photo"
                  loading="lazy"
                />
              ) : (
                <UserPlaceholder />
              )}
            </div>
            <h3 className="governing-member-card__name">{member.name}</h3>
            <p className="governing-member-card__role">{member.role}</p>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)',
          marginTop: 'var(--space-6)',
          fontStyle: 'italic',
        }}
      >
      </p>
    </div>
  )
}

export default GoverningBody