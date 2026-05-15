import type { FacultyMember, AdminStaffMember } from '../../types/faculty.types'
import FacultyMemberCard from '../../components/card-components/FacultyMemberCard'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import { administrativeStaff } from '../../data/faculty-members/administrative.staff'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface FacultyMembersGridProps {
  faculty: FacultyMember[]
  onMemberClick: (member: FacultyMember) => void
  onClearFilters: () => void
  hasActiveFilter: boolean
}

const UsersIcon = () => (
  <svg
    className="faculty-members-section__heading-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const AdminIcon = () => (
  <svg
    className="admin-staff-section__title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const SearchXIcon = () => (
  <svg
    className="faculty-no-results__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l6 6M14 8l-6 6" />
  </svg>
)

const UserPlaceholderIcon = () => (
  <svg
    className="admin-staff-card__photo-placeholder-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const FacultyMembersGrid = ({
  faculty,
  onMemberClick,
  onClearFilters,
  hasActiveFilter,
}: FacultyMembersGridProps) => {
  /*
   * useRevealOnScroll — wraps the entire members section container.
   * Each FacultyMemberCard inside carries .reveal-up + stagger class
   * and animates in as the grid section enters the viewport.
   *
   * A second ref is used for the admin staff section below so it
   * gets its own independent scroll trigger.
   */
  const gridRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
    once: true,
    deps: [faculty.length],   // re-run observer when filter changes
  })

  const adminRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  return (
    <>
      {/* ---- Academic faculty grid ---- */}
      <div className="faculty-members-section" ref={gridRef}>
        <div className="faculty-members-section__header">
          <h2 className="faculty-members-section__heading">
            <UsersIcon />
            Academic Faculty
            {faculty.length > 0 && (
              <span className="faculty-members-section__count">
                ({faculty.length})
              </span>
            )}
          </h2>
        </div>

        {faculty.length > 0 ? (
          <div className="faculty-grid">
            {faculty.map((member, index) => (
              <div
                key={member.id}
                className={`reveal-up stagger-${Math.min((index % 8) + 1, 8)}`}
              >
                <FacultyMemberCard
                  member={member}
                  onClick={() => onMemberClick(member)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="faculty-grid">
            <div className="faculty-no-results">
              <SearchXIcon />
              <h3 className="faculty-no-results__title">No faculty found</h3>
              <p className="faculty-no-results__desc">
                No faculty members match your current search or department
                filter. Try adjusting your search or selecting a different
                department.
              </p>
              {hasActiveFilter && (
                <PrimaryBtn onClick={onClearFilters} size="md">
                  Clear Filters
                </PrimaryBtn>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ---- Admin staff section — always shown regardless of filter ---- */}
      <div className="admin-staff-section" ref={adminRef}>
        <h2 className="admin-staff-section__title">
          <AdminIcon />
          Administrative Staff
        </h2>

        <div className="admin-staff-grid">
          {administrativeStaff.filter((s) => s.isActive).map((staff: AdminStaffMember, index) => (
            <div
              key={staff.id}
              className={`admin-staff-card reveal-up stagger-${Math.min(index + 1, 8)}`}
            >
              {/* Staff photo or placeholder */}
              {staff.photo ? (
                <img
                  src={staff.photo}
                  alt={`${staff.name} — ${staff.designation}`}
                  className="admin-staff-card__photo"
                  loading="lazy"
                />
              ) : (
                <div className="admin-staff-card__photo-placeholder">
                  <UserPlaceholderIcon />
                </div>
              )}

              <div className="admin-staff-card__info">
                <p className="admin-staff-card__name">{staff.name}</p>
                <p className="admin-staff-card__role">{staff.designation}</p>
                {staff.email && (
                  <a
                    href={`mailto:${staff.email}`}
                    className="admin-staff-card__email"
                    style={{ textDecoration: 'none', color: 'var(--color-text-muted)', transition: 'color var(--transition-fast)' }}
                  >
                    {staff.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FacultyMembersGrid