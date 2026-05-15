import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import AboutHeroBanner from './AboutHeroBanner'
import InstituteIntroduction from './InstituteIntroduction'
import VisionMissionBlock from './VisionMissionBlock'
import FoundingHistory from './FoundingHistory'
import ChairmanMessage from './ChairmanMessage'
import PrincipalMessage from './PrincipalMessage'
import GoverningBody from './GoverningBody'
import RecognitionsBadges from './RecognitionsBadges'
import InfraHighlights from './InfraHighlights'
import UniversityAffiliation from './UniversityAffiliation'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import '../../styles/pages/about-page.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const AboutPage = () => {
  const containerRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <div ref={containerRef}>
      <SeoMetaTags {...SEO_PER_PAGE.about} />

      {/* 1. Hero banner */}
      <AboutHeroBanner />

      {/* 2. Institute overview + images */}
      <section className="section section--white">
        <div className="page-wrapper">
          <InstituteIntroduction />
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <VisionMissionBlock />
        </div>
      </section>

      {/* 4. Founding history timeline */}
      <section className="section section--white">
        <div className="page-wrapper">
          <FoundingHistory />
        </div>
      </section>

      {/* 5. Chairman's message */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <ChairmanMessage />
        </div>
      </section>

      {/* 6. Principal's message */}
      <section className="section section--white">
        <div className="page-wrapper">
          <PrincipalMessage />
        </div>
      </section>

      {/* 7. Governing body */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <GoverningBody />
        </div>
      </section>

      {/* 8. Recognitions & accreditations */}
      <section className="section section--white">
        <div className="page-wrapper">
          <RecognitionsBadges />
        </div>
      </section>

      {/* 9. Infrastructure highlights */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <InfraHighlights />
        </div>
      </section>

      {/* 10. University affiliation CTA */}
      <section className="section section--white">
        <div className="page-wrapper">
          <UniversityAffiliation />
        </div>
      </section>
    </div>
  )
}

export default AboutPage