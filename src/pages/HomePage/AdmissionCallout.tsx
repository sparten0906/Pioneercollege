import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import AnchorLinkBtn from '../../components/button-elements/AnchorLinkBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { ROUTES } from '../../constants/route-paths.constants'
import { CONTACT_DETAILS, DOWNLOAD_LINKS } from '../../constants/institute.constants'

const CheckIcon = () => <svg className="admission-cta__badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
const PhoneIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
const ApplyIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>

const trustBadges = ['UP Paramedical Council Approved', 'Estd. 2005', '16 Diploma Courses', 'Free Counseling Available']

const AdmissionCallout = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>()
  return (
    <section ref={sectionRef} className="section--sm admission-cta" aria-labelledby="cta-heading">
      <div className="page-wrapper">
        <div className="admission-cta__inner">
          <div className="admission-cta__text reveal-left">
            <p className="admission-cta__eyebrow">Admissions Open - Session 2025-26</p>
            <h2 id="cta-heading" className="admission-cta__heading">Begin Your Healthcare Career Today</h2>
            <p className="admission-cta__subtext">Limited seats available across all 16 paramedical diploma programmes. Apply now or call us for free admission guidance.</p>
            <div className="admission-cta__badges">
              {trustBadges.map((b) => <span key={b} className="admission-cta__badge"><CheckIcon /> {b}</span>)}
            </div>
          </div>
          <div className="admission-cta__actions reveal-right">
            <PrimaryBtn href={ROUTES.ADMISSIONS} size="xl" icon={<ApplyIcon />} iconPosition="right">Apply for Admission</PrimaryBtn>
            <OutlineBtn href={`tel:${CONTACT_DETAILS.phone[0].replace(/\s/g, '')}`} variant="white" size="lg" icon={<PhoneIcon />}>{CONTACT_DETAILS.phone[0]}</OutlineBtn>
            <AnchorLinkBtn href={DOWNLOAD_LINKS[0].filePath} download>Download Prospectus 2024-25</AnchorLinkBtn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionCallout