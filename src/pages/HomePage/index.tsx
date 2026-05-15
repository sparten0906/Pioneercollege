import SeoMetaTags      from '../../components/utility-elements/SeoMetaTags'
import HeroSlider       from './HeroSlider'
import NoticeStrip      from './NoticeStrip'
import InstituteStats   from './InstituteStats'
import FeaturedDiplomas from './FeaturedDiplomas'
import WhyChooseBBS     from './WhyChooseBBS'
import CampusPreview    from './CampusPreview'
import AlumniVoices     from './AlumniVoices'
import UpcomingEvents   from './UpcomingEvents'
import HonorsDisplay    from './HonorsDisplay'
import AdmissionCallout from './AdmissionCallout'
import { SEO_PER_PAGE } from '../../constants/seo-defaults.constants'
import '../../styles/pages/home-page.css'

const HomePage = () => (
  <>
    <SeoMetaTags {...SEO_PER_PAGE.home} />
    <HeroSlider />
    <NoticeStrip />
    <InstituteStats />
    <FeaturedDiplomas />
    <WhyChooseBBS />
    <CampusPreview />
    <AlumniVoices />
    <UpcomingEvents />
    <HonorsDisplay />
    <AdmissionCallout />
  </>
)

export default HomePage