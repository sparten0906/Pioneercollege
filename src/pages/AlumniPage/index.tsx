import '../../styles/pages/alumni-page.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import InnerPageBanner from '../../components/section-blocks/InnerPageBanner'
import PageBreadcrumb from '../../components/layout-shell/PageBreadcrumb'
import AlumniHighlightsBlock from './AlumniHighlightsBlock'
import AlumniStoriesSection from './AlumniStoriesSection'
import AlumniConnectForm from './AlumniConnectForm'

const AlumniPage = () => {
  const pageRef = useRevealOnScroll({ threshold: 0.05, once: true })

  return (
    <>
      <SeoMetaTags {...SEO_PER_PAGE.alumni} />

      <InnerPageBanner
        title="Alumni Network"
        subtitle="Celebrating Our Graduates"
        breadcrumb={<PageBreadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Alumni' }]} />}
      />

      <div className="alumni-page" ref={pageRef}>
        <AlumniHighlightsBlock />
        <AlumniStoriesSection />
        <AlumniConnectForm />
      </div>
    </>
  )
}

export default AlumniPage