import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { admissionDates } from '../../data/admission-deadlines'
import { formatDay, formatMonthShort } from '../../utils/date-formatter'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'


const FlagIcon = () => (
  <svg className="key-date-card__flag-icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
      clipRule="evenodd"
    />
  </svg>
)

const KeyDatesCalendar = () => {
  /*
   * useRevealOnScroll — wraps the entire dates grid.
   * Each .key-date-card carries .reveal-up + a stagger class
   * so they cascade in as the user scrolls down.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  return (
    <div className="key-dates" ref={sectionRef}>
      <SectionTitleBlock
        title="Important Dates — Session 2025–26"
        subtitle="Mark these dates on your calendar. Missing a deadline may result in loss of seat."
        align="center"
        accentWord="Important Dates"
      />

      <div className="key-dates__grid">
        {admissionDates.map((entry, index) => (
          <div
            key={entry.id}
            className={`key-date-card${entry.isImportant ? ' key-date-card--important' : ''} reveal-up stagger-${Math.min(index + 1, 8)}`}
          >
            {/* Calendar icon showing the day & month */}
            <div className="key-date-card__cal">
              <span className="key-date-card__day">
                {formatDay(entry.date)}
              </span>
              <span className="key-date-card__month">
                {formatMonthShort(entry.date)}
              </span>
            </div>

            <div className="key-date-card__content">
              <p className="key-date-card__event">{entry.event}</p>
              <p className="key-date-card__desc">{entry.description}</p>

              {entry.isImportant && (
                <span className="key-date-card__important-flag">
                  <FlagIcon />
                  Important deadline
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 'var(--space-5)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        * All dates are subject to change. Check the official notice board
        and website for the latest updates.
      </p>
    </div>
  )
}

export default KeyDatesCalendar
