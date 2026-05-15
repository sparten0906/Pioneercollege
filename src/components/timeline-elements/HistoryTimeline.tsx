import '../../styles/components/timeline.css'

interface TimelineEntry {
  year: string
  title: string
  description: string
  isAccent?: boolean
}

interface HistoryTimelineProps {
  entries: TimelineEntry[]
}

const HistoryTimeline = ({ entries }: HistoryTimelineProps) => (
  <div className="timeline">
    {entries.map((entry, index) => (
      <div key={index} className="timeline-item">
        <div className={`timeline-item__dot${entry.isAccent ? ' timeline-item__dot--accent' : ''}`} />
        <p className="timeline-item__year">{entry.year}</p>
        <h3 className="timeline-item__title">{entry.title}</h3>
        <p className="timeline-item__desc">{entry.description}</p>
      </div>
    ))}
  </div>
)

export default HistoryTimeline