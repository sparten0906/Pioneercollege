import { getAboutImage } from '../../utils/asset-path-resolver'
import { INSTITUTE } from '../../constants/institute.constants'

const CheckIcon = () => (
  <svg className="institute-intro__highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const highlights = [
  'Approved by UP Paramedical Council, Lucknow',
  'Recognised by Ministry of Health & Family Welfare, Govt. of India',
  '16 specialised paramedical diploma programmes',
  'State-of-the-art labs — anatomy, radiology, MLT & clinical labs',
  'Hospital tie-ups for mandatory clinical internships',
  'Dedicated placement cell with 92% placement record',
  '100% practical-focused curriculum aligned with industry needs',
]

const InstituteIntroduction = () => {
  return (
    <div className="institute-intro">
      {/* Left — Images */}
      <div className="institute-intro__media reveal-left">
        <img
          src={getAboutImage('college-building-front.webp')}
          alt="BBS Institute main building"
          className="institute-intro__img-main"
          loading="lazy"
        />
        <img
          src={getAboutImage('institute-building-aerial.webp')}
          alt="BBS Institute aerial view"
          className="institute-intro__img-accent"
          loading="lazy"
        />
      </div>

      {/* Right — Content */}
      <div className="institute-intro__body reveal-right">
        <p className="institute-intro__tag">
          Established {INSTITUTE.established}
        </p>

        <h2 className="institute-intro__title">
          A Legacy of{' '}
          <span>Paramedical</span>{' '}
          Excellence in Uttar Pradesh
        </h2>

        <p className="institute-intro__text">
          {INSTITUTE.name} was founded with a single mission — to bridge the
          critical gap in trained paramedical professionals across Uttar Pradesh
          and create career opportunities for students from all economic
          backgrounds.
        </p>

        <p className="institute-intro__text">
          Over the years, we have grown into one of the most trusted paramedical
          institutes in the region, producing over 2,000 qualified professionals
          who now serve in government hospitals, private diagnostic chains, and
          super-speciality centres across India.
        </p>

        <div className="institute-intro__highlights">
          {highlights.map((item) => (
            <div key={item} className="institute-intro__highlight-item">
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstituteIntroduction