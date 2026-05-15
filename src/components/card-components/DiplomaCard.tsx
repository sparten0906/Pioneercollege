import { Link } from 'react-router-dom'
import type { DiplomaData } from '../../types/diploma.types'
import { getCourseDetailPath } from '../../constants/route-paths.constants'
import CourseCategoryBadge from '../badge-elements/CourseCategoryBadge'
import '../../styles/components/cards.css'

interface DiplomaCardProps { course: DiplomaData }

const ClockIcon = () => <svg className="diploma-card__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
const UsersIcon = () => <svg className="diploma-card__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
const ArrowRightIcon = () => <svg className="diploma-card__cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>

const DiplomaCard = ({ course }: DiplomaCardProps) => (
  <article className="card diploma-card">
    <Link to={getCourseDetailPath(course.slug)} className="diploma-card" style={{ display: 'contents' }}>
      <div className="diploma-card__image-wrap">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="diploma-card__image"
          loading="lazy"
          width="400"
          height="225"
        />
        <div className="diploma-card__overlay" />
      </div>
      <div className="diploma-card__body">
        <div className="diploma-card__meta">
          <CourseCategoryBadge category={course.category} />
        </div>
        <h3 className="diploma-card__title">{course.title}</h3>
        <p className="diploma-card__desc">{course.description}</p>
        <div className="diploma-card__info">
          <span className="diploma-card__info-item">
            <ClockIcon /> {course.duration}
          </span>
          <span className="diploma-card__info-item">
            <UsersIcon /> {course.totalSeats} Seats
          </span>
          <span className="diploma-card__cta" style={{ marginLeft: 'auto' }}>
            Details <ArrowRightIcon />
          </span>
        </div>
      </div>
    </Link>
  </article>
)

export default DiplomaCard