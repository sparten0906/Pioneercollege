import { getAboutImage } from '../../utils/asset-path-resolver'
import { INSTITUTE } from '../../constants/institute.constants'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'

const StarIcon = () => (
  <svg className="message-card__photo-badge-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ChairmanMessage = () => {
  return (
    <div>
      <SectionTitleBlock
        title="Chairman's Message"
        subtitle="A word from our founder and chairman."
        align="center"
        accentWord="Chairman's"
      />

      <div className="message-card reveal-up">
        {/* Photo side */}
        <div className="message-card__media">
          <div className="message-card__photo-wrap">
            <img
              src={getAboutImage('chairman-photo.webp')}
              alt={`${INSTITUTE.chairman} — Chairman, BBS Institute`}
              className="message-card__photo"
              loading="lazy"
            />
            <div className="message-card__photo-badge">
              <StarIcon />
            </div>
          </div>
          <h3 className="message-card__name">{INSTITUTE.chairman}</h3>
          <p className="message-card__title">Chairman & Founder</p>
        </div>

        {/* Message side */}
        <div className="message-card__body">
          <p className="message-card__label">Message from the Chairman</p>

          <h2 className="message-card__heading">
            Building the Healthcare Workforce India Needs
          </h2>

          <blockquote className="message-card__quote">
            "When I founded BBS Institute in 2005, I saw one clear problem —
            India had hospitals but not enough trained people to run them. We
            set out to solve that problem, one student at a time."
          </blockquote>

          <p className="message-card__text">
            The healthcare sector in India is growing at an unprecedented pace.
            Hospitals are expanding, new diagnostic centres are opening every
            month, and the demand for skilled paramedical professionals has
            never been higher. Yet, quality paramedical education has remained
            out of reach for many students — particularly those from rural
            Uttar Pradesh.
          </p>

          <p className="message-card__text">
            At BBS Institute, we have always believed that a student's economic
            background should never determine the quality of education they
            receive. Our fee structure is deliberately kept accessible, our
            faculty are practicing clinicians, and every course we offer is
            designed to make students job-ready from the first day they walk
            into a hospital.
          </p>

          <p className="message-card__text">
            I am proud of the 2,000+ professionals we have trained. I am
            prouder still of the lives they are saving every day in hospitals
            across India. That is the true measure of our work.
          </p>

          <div className="message-card__signature">
            <span className="message-card__sig-name">{INSTITUTE.chairman}</span>
            <span className="message-card__sig-title">
              Chairman & Founder — {INSTITUTE.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChairmanMessage