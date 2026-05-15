import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import { getCampusImage } from '../../utils/asset-path-resolver'

interface InfraItem {
  name:       string
  desc:       string
  imageKey:   string
  iconType:   'lab' | 'library' | 'computer' | 'sports' | 'auditorium' | 'garden'
}

const infraItems: InfraItem[] = [
  {
    name:     'Anatomy & Pathology Lab',
    desc:     'Fully equipped with human specimens, models, and diagnostic equipment for anatomy and histopathology training.',
    imageKey: 'campus-science-lab.webp',
    iconType: 'lab',
  },
  {
    name:     'Clinical Radiology Unit',
    desc:     'Functional X-Ray, CR, and digital radiography systems for real-world imaging training under faculty supervision.',
    imageKey: 'campus-radiology-unit.webp',
    iconType: 'lab',
  },
  {
    name:     'MLT & Biochemistry Lab',
    desc:     'Complete haematology, biochemistry, microbiology, and serology laboratory used for MLT and general clinical training.',
    imageKey: 'campus-anatomy-lab.webp',
    iconType: 'lab',
  },
  {
    name:     'Library & Reading Room',
    desc:     'Well-stocked library with 3,000+ paramedical titles, journals, and digital resources available to all students.',
    imageKey: 'campus-library-interior.webp',
    iconType: 'library',
  },
  {
    name:     'Computer & IT Lab',
    desc:     'Modern computer lab with internet connectivity for e-learning, research, and practical digital skills training.',
    imageKey: 'campus-computer-lab.webp',
    iconType: 'computer',
  },
  {
    name:     'Auditorium & Seminar Hall',
    desc:     'Spacious auditorium for guest lectures, workshops, convocations, and cultural events with full AV facilities.',
    imageKey: 'campus-auditorium.webp',
    iconType: 'auditorium',
  },
]

const infraIcons = {
  lab: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
    </svg>
  ),
  library: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  computer: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  sports: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 8v4l3 3" />
    </svg>
  ),
  auditorium: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  garden: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

const InfraHighlights = () => {
  return (
    <div className="infra-highlights">
      <SectionTitleBlock
        title="Campus & Infrastructure"
        subtitle="Modern facilities built specifically for hands-on paramedical training."
        align="center"
        accentWord="Infrastructure"
      />

      <div className="infra-grid">
        {infraItems.map((item) => (
          <div key={item.name} className="infra-card reveal-up">
            <div className="infra-card__image-wrap">
              <img
                src={getCampusImage(item.imageKey)}
                alt={item.name}
                className="infra-card__image"
                loading="lazy"
              />
              <div className="infra-card__overlay" />
              <div className="infra-card__icon-badge">
                <span className="infra-card__icon-badge-icon">
                  {infraIcons[item.iconType]}
                </span>
              </div>
            </div>
            <div className="infra-card__body">
              <h3 className="infra-card__name">{item.name}</h3>
              <p className="infra-card__desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfraHighlights