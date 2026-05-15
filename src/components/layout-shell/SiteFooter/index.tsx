import FooterBrandColumn from './FooterBrandColumn'
import FooterNavColumn from './FooterNavColumn'
import FooterDiplomasColumn from './FooterDiplomasColumn'
import FooterAddressColumn from './FooterAddressColumn'
import FooterCopyright from './FooterCopyright'
import '../../../styles/layout/footer-layout.css'

const SiteFooter = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="page-wrapper">
        <div className="site-footer__grid">
          <FooterBrandColumn />
          <FooterNavColumn />
          <FooterDiplomasColumn />
          <FooterAddressColumn />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  )
}

export default SiteFooter