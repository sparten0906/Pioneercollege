import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import AdmissionsHeroBanner from './AdmissionsHeroBanner'
import HowToApplySteps from './HowToApplySteps'
import StreamEligibility from './StreamEligibility'
import KeyDatesCalendar from './KeyDatesCalendar'
import DocumentsChecklist from './DocumentsChecklist'
import FullFeeBreakdown from './FullFeeBreakdown'
import ScholarshipOptions from './ScholarshipOptions'
import AdmissionsFAQ from './AdmissionsFAQ'
import AdmissionFormSection from './AdmissionFormSection'
import DecorativeDivider from '../../components/section-blocks/DecorativeDivider'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import '../../styles/pages/admissions-page.css'

const AdmissionsPage = () => {
  return (
    <>
      <SeoMetaTags {...SEO_PER_PAGE.admissions} />

      {/* 1. Hero */}
      <AdmissionsHeroBanner />

      {/* 2. How to apply — step process */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <HowToApplySteps />
        </div>
      </section>

      {/* 3. Eligibility table per stream */}
      <section className="section section--white">
        <div className="page-wrapper">
          <StreamEligibility />
        </div>
      </section>

      {/* 4. Important dates */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <KeyDatesCalendar />
        </div>
      </section>

      {/* 5. Documents checklist */}
      <section className="section section--white">
        <div className="page-wrapper">
          <DocumentsChecklist />
        </div>
      </section>

      {/* 6. Full fee breakdown */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <FullFeeBreakdown />
        </div>
      </section>

      {/* 7. Scholarships */}
      <section className="section section--white">
        <div className="page-wrapper">
          <ScholarshipOptions />
        </div>
      </section>

      {/* Decorative divider */}
      <div className="page-wrapper">
        <DecorativeDivider variant="dots" />
      </div>

      {/* 8. FAQ */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <AdmissionsFAQ />
        </div>
      </section>

      {/* 9. Admission enquiry form + downloads */}
      <section className="section section--white">
        <div className="page-wrapper">
          <AdmissionFormSection />
        </div>
      </section>
    </>
  )
}

export default AdmissionsPage