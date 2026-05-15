import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'

const TelescopeIcon = () => (
  <svg className="vm-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v3l2 2" />
  </svg>
)

const TargetIcon = () => (
  <svg className="vm-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const VisionMissionBlock = () => {
  return (
    <div>
      <SectionTitleBlock
        title="Our Vision & Mission"
        subtitle="The principles that guide every decision we make at BBS Institute."
        align="center"
        accentWord="Vision & Mission"
      />

      <div className="vision-mission-grid">
        {/* Vision Card */}
        <div className="vm-card vm-card--vision reveal-left">
          <svg
            className="vm-card__icon-bg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>

          <div className="vm-card__icon-wrap">
            <TelescopeIcon />
          </div>

          <p className="vm-card__label">Our Vision</p>

          <h3 className="vm-card__heading">
            To be the Premier Paramedical Institution of Northern India
          </h3>

          <p className="vm-card__text">
            We envision a future where every hospital and healthcare facility
            in India is staffed by competent, compassionate, and certified
            paramedical professionals — many of whom will be trained right here
            at BBS Institute.
          </p>

          <ul className="vm-card__list">
            {[
              'Build world-class paramedical training infrastructure',
              'Produce industry-ready graduates from day one',
              'Expand into rural healthcare education',
              'Achieve 100% graduate employment in 5 years',
            ].map((item) => (
              <li key={item} className="vm-card__list-item">
                <span className="vm-card__list-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mission Card */}
        <div className="vm-card vm-card--mission reveal-right">
          <div className="vm-card__icon-wrap">
            <TargetIcon />
          </div>

          <p className="vm-card__label">Our Mission</p>

          <h3 className="vm-card__heading">
            Accessible, Practical, and Career-Focused Paramedical Education
          </h3>

          <p className="vm-card__text">
            Our mission is to provide high-quality, affordable paramedical
            education with a strong emphasis on practical clinical training,
            ethical practice, and lifelong learning — preparing students not
            just for jobs but for meaningful healthcare careers.
          </p>

          <ul className="vm-card__list">
            {[
              'Deliver 70% practical, 30% theory curriculum',
              'Ensure mandatory hospital internship for every student',
              'Maintain affordable fee structure for all backgrounds',
              'Continuously update curriculum to match industry standards',
              'Support students through placements and career guidance',
            ].map((item) => (
              <li key={item} className="vm-card__list-item">
                <span className="vm-card__list-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisionMissionBlock