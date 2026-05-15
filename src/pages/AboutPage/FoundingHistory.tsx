import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { getAboutImage } from '../../utils/asset-path-resolver'

interface HistoryEntry {
  year:      string
  title:     string
  desc:      string
  isAccent:  boolean
  imageKey?: string
}

const historyData: HistoryEntry[] = [
  {
    year:     '2005',
    title:    'Foundation of BBS Institute',
    desc:     'B.B.S. Group of Educational Institutes was established with the aim of providing quality paramedical education in Uttar Pradesh. The institute began with 3 diploma programmes and an initial batch of 80 students.',
    isAccent: false,
    imageKey: 'history-founding-year.webp',
  },
  {
    year:     '2008',
    title:    'UP Paramedical Council Affiliation',
    desc:     'Received full affiliation from UP Paramedical Council, Lucknow, validating all diploma programmes as officially recognised qualifications across Uttar Pradesh.',
    isAccent: false,
  },
  {
    year:     '2011',
    title:    'Campus Expansion & New Labs',
    desc:     'Expanded the campus with a state-of-the-art anatomy laboratory, a fully equipped MLT lab, and a dedicated radiology simulation unit — increasing total intake to 300 students per year.',
    isAccent: true,
    imageKey: 'history-growth-phase.webp',
  },
  {
    year:     '2014',
    title:    'First State Topper Produced',
    desc:     "A BBS Institute student secured the first rank in the UP Paramedical Council examination for Diploma in Medical Lab Technician — establishing the institute's academic reputation statewide.",
    isAccent: false,
  },
  {
    year:     '2017',
    title:    'Hospital Partnership Programme Launched',
    desc:     'Formalized clinical internship partnerships with 12 hospitals across Uttar Pradesh, ensuring every graduating student completes mandatory hands-on clinical training before receiving their diploma.',
    isAccent: false,
  },
  {
    year:     '2020',
    title:    'Online Learning Integration',
    desc:     'During the COVID-19 pandemic, rapidly transitioned theoretical components to online delivery while maintaining practical sessions with strict safety protocols — ensuring zero academic loss for enrolled students.',
    isAccent: false,
  },
  {
    year:     '2023',
    title:    'Best Paramedical Institute Award',
    desc:     'Awarded Best Paramedical Institute in Uttar Pradesh by the State Health Education Council for excellence in training quality, infrastructure, student outcomes, and placement record.',
    isAccent: true,
  },
  {
    year:     '2025',
    title:    'Expanding to 16 Diploma Programmes',
    desc:     'Now offering 16 specialised paramedical diploma programmes across six clinical categories — lab technology, imaging, ophthalmic, neuro-cardiac, dental-ortho, and general clinical.',
    isAccent: false,
  },
]

const FoundingHistory = () => {
  return (
    <div className="founding-history">
      <SectionTitleBlock
        title="Our Journey"
        subtitle="Two decades of growth, recognition, and thousands of paramedical professionals trained."
        align="center"
        accentWord="Journey"
      />

      <div className="history-timeline">
        {historyData.map((entry) => (
          <div key={entry.year} className="history-item reveal-up">
            <div
              className={`history-item__dot-wrap${
                entry.isAccent ? ' history-item__dot-wrap--accent' : ''
              }`}
            >
              <span className="history-item__dot-inner" />
            </div>

            <span
              className={`history-item__year-tag${
                entry.isAccent ? ' history-item__year-tag--accent' : ''
              }`}
            >
              {entry.year}
            </span>

            <h3 className="history-item__title">{entry.title}</h3>
            <p className="history-item__desc">{entry.desc}</p>

            {/* Show image for milestone entries that have one */}
            {entry.imageKey && (
              <div
                style={{
                  marginTop: 'var(--space-4)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  maxWidth: '480px',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src={getAboutImage(entry.imageKey)}
                  alt={entry.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoundingHistory