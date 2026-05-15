import { Heart } from 'lucide-react'
import { INSTITUTE } from '../../../constants/institute.constants'

const FooterCopyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className="site-footer__bottom">
      <p className="footer-copyright">
        &copy; {year} {INSTITUTE.name}. All rights reserved. Made with{' '}
        <Heart size={12} fill="currentColor" style={{ color: 'var(--color-error)', display: 'inline', verticalAlign: 'middle' }} />{' '}
        for paramedical education.
      </p>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Disclaimer</a>
      </div>
    </div>
  )
}

export default FooterCopyright