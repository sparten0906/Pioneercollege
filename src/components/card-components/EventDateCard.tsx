import type { EventItem } from '../../types/event.types'
import { formatDay, formatMonthShort } from '../../utils/date-formatter'
import '../../styles/components/cards.css'

interface EventDateCardProps { event: EventItem }

const ClockIcon = () => <svg className="event-card__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
const MapPinIcon = () => <svg className="event-card__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>

const EventDateCard = ({ event }: EventDateCardProps) => (
  <article className="card event-card">
    <div className="event-card__date-badge">
      <span className="event-card__day">{formatDay(event.date)}</span>
      <span className="event-card__month">{formatMonthShort(event.date)}</span>
    </div>
    <div className="event-card__content">
      <p className="event-card__category">{event.category.replace('-', ' ')}</p>
      <h3 className="event-card__title">{event.title}</h3>
      <p className="event-card__desc">{event.description}</p>
      <div className="event-card__meta">
        {event.time && (
          <span className="event-card__meta-item"><ClockIcon /> {event.time}</span>
        )}
        <span className="event-card__meta-item"><MapPinIcon /> {event.venue}</span>
      </div>
    </div>
  </article>
)

export default EventDateCard