import { Outlet, useLocation } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import SiteFooter from './SiteFooter'
import RouteScrollReset from '../utility-elements/RouteScrollReset'
import ScrollTopFAB from '../button-elements/ScrollTopFAB'
import CookieConsentBar from '../utility-elements/CookieConsentBar'
import MarqueeAnnouncement from '../utility-elements/MarqueeAnnouncement'

const SiteLayout = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <RouteScrollReset />
      <TopNavbar />
      <div className="site-layout-offset" aria-hidden="true" />
      {isHome && <MarqueeAnnouncement />}
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollTopFAB />
      <CookieConsentBar />
    </>
  )
}

export default SiteLayout
