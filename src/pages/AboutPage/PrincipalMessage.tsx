import { getAboutImage } from '../../utils/asset-path-resolver'
import { INSTITUTE } from '../../constants/institute.constants'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'

const GraduationIcon = () => (
  <svg className="message-card__photo-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const PrincipalMessage = () => {
  return (
    <div>
      <SectionTitleBlock
        title="Principal's Message"
        subtitle="Guidance from our academic head."
        align="center"
        accentWord="Principal's"
      />

      <div className="message-card message-card--reverse reveal-up">
        {/* Message side */}
        <div className="message-card__body">
          <p className="message-card__label">Message from the Principal</p>

          <h2 className="message-card__heading">
            Excellence in the Classroom Begins with Clarity of Purpose
          </h2>

          <blockquote className="message-card__quote">
            "Every student who walks through our doors carries a dream —
            to work in healthcare, to make a difference. Our job is to make
            sure they leave with the skills to do exactly that."
          </blockquote>

          <p className="message-card__text">
            Paramedical education is fundamentally different from other
            professional programmes. The margin for error in healthcare is
            zero. That is why at BBS Institute, we do not just teach theory —
            we ensure every student masters the practical skills needed to
            operate equipment, manage patients, and work under pressure in
            real clinical environments.
          </p>

          <p className="message-card__text">
            Our faculty are not just academics — they are practicing
            professionals who bring real clinical experience into the classroom
            every day. Our curriculum is continuously updated to match the
            latest technologies and techniques being used in hospitals.
          </p>

          <p className="message-card__text">
            To every prospective student reading this — paramedical careers
            offer stable employment, genuine social impact, and opportunities
            for continuous growth. I invite you to be part of the BBS family
            and embark on a career that truly matters.
          </p>

          <div className="message-card__signature">
            <span className="message-card__sig-name">{INSTITUTE.principal}</span>
            <span className="message-card__sig-title">
              Principal — {INSTITUTE.name}
            </span>
          </div>
        </div>

        {/* Photo side */}
        <div className="message-card__media">
          <div className="message-card__photo-wrap">
            <img
              src={getAboutImage('principal-photo.webp')}
              alt={`${INSTITUTE.principal} — Principal, BBS Institute`}
              className="message-card__photo"
              loading="lazy"
            />
            <div className="message-card__photo-badge">
              <GraduationIcon />
            </div>
          </div>
          <h3 className="message-card__name">{INSTITUTE.principal}</h3>
          <p className="message-card__title">Principal</p>
        </div>
      </div>
    </div>
  )
}

export default PrincipalMessage