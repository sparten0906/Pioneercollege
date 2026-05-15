import SeoMetaTags from '../../components/utility-elements/SeoMetaTags'
import ContactHeroBanner from './ContactHeroBanner'
import ContactInfoCards from './ContactInfoCards'
import MainContactForm from './MainContactForm'
import MapEmbedBlock from './MapEmbedBlock'
import SocialChannels from './SocialChannels'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import '../../styles/pages/contact-page.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const ContactPage = () => {
  const containerRef = useRevealOnScroll<HTMLDivElement>()
  return (
    <div ref={containerRef}>
      <SeoMetaTags {...SEO_PER_PAGE.contact} />

      {/* 1. Hero */}
      <ContactHeroBanner />

      {/* 2. Info cards — address, phone, email, hours */}
      <section className="section section--white" style={{ paddingTop: 'var(--space-12)' }}>
        <div className="page-wrapper">
          <ContactInfoCards />
        </div>
      </section>

      {/* 3. Form + sidebar */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <MainContactForm />
        </div>
      </section>

      {/* 4. Google Maps embed */}
      <section className="section section--white">
        <div className="page-wrapper">
          <MapEmbedBlock />
        </div>
      </section>

      {/* 5. Social channels + WhatsApp strip */}
      <section className="section section--gray">
        <div className="page-wrapper">
          <SocialChannels />
        </div>
      </section>
    </div>
  )
}

export default ContactPage