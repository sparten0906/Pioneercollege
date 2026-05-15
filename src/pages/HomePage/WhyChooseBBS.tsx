import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getAboutImage } from '../../utils/asset-path-resolver'
import { ROUTES } from '../../constants/route-paths.constants'
import { INSTITUTE } from '../../constants/institute.constants'

const AwardIcon    = () => <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="6"/><path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
const FlaskIcon    = () => <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-6 0v9l-4 9h14l-4-9V3m-6 0h6"/></svg>
const HospitalIcon = () => <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h6"/></svg>
const GradIcon     = () => <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-2h8"/></svg>
const GovtIcon     = () => <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3m4-3v3m4-3v3"/></svg>
const SupportIcon  = () => <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>

const features = [
  { icon: <AwardIcon />,    title: 'UP Paramedical Council Approved',   desc: 'All 16 diploma programmes are officially approved and regulated by UP Paramedical Council, Lucknow — ensuring government-recognised certification.' },
  { icon: <FlaskIcon />,    title: 'Fully Equipped Clinical Labs',       desc: 'Train on the same equipment used in real hospitals — from Fresenius dialysis machines to 1.5T MRI simulators and digital X-ray systems.' },
  { icon: <HospitalIcon />, title: 'Hospital Clinical Posting',          desc: 'Mandatory clinical internship at affiliated hospitals gives students real patient-care experience before they graduate.' },
  { icon: <GradIcon />,     title: 'Expert Faculty',                     desc: 'Learn from practicing doctors, qualified optometrists, registered radiographers and experienced clinical instructors with 10-25 years of field experience.' },
  { icon: <GovtIcon />,     title: 'Government Job Eligibility',         desc: 'Our registered diplomas qualify graduates for UPSSSC, NHM and central government paramedical recruitment — every year.' },
  { icon: <SupportIcon />,  title: '92% Placement Assistance',           desc: 'Our dedicated placement cell maintains live partnerships with hospitals, diagnostic chains and healthcare groups across Uttar Pradesh and beyond.' },
]

const WhyChooseBBS = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>()
  return (
    <section ref={sectionRef} className="section why-bbs" aria-labelledby="why-bbs-heading">
      <div className="page-wrapper">
        <div className="why-bbs__grid">
          <div className="why-bbs__image-wrap reveal-left">
            <img src={getAboutImage('college-building-front.webp')} alt={`${INSTITUTE.name} campus`} className="why-bbs__image" loading="lazy" />
            <div className="why-bbs__image-badge">Checkmark NAAC Accredited Grade A</div>
          </div>
          <div>
            <div className="reveal-right">
              <SectionTitleBlock title="Why Choose PIONEER COLLEGE?" subtitle={`${INSTITUTE.name} has trained over 2000 paramedical professionals since ${INSTITUTE.established}. Here's what sets us apart.`} align="left" accentWord="PIONEER" />
            </div>
            <div className="why-bbs__features">
              {features.map((f, i) => (
                <div key={f.title} className={`why-feature reveal-up stagger-${Math.min(i + 1, 6)}`}>
                  <div className="why-feature__icon-wrap">{f.icon}</div>
                  <div className="why-feature__text">
                    <h3 className="why-feature__title">{f.title}</h3>
                    <p className="why-feature__desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-8)' }} className="reveal-up">
              <PrimaryBtn href={ROUTES.ABOUT} size="lg">Learn More About Us</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseBBS