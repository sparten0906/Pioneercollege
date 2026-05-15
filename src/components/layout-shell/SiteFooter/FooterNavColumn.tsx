import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { ROUTES } from '../../../constants/route-paths.constants'

const links = [
  { label: 'Home',          path: ROUTES.HOME },
  { label: 'About Us',      path: ROUTES.ABOUT },
  { label: 'All Courses',   path: ROUTES.COURSES },
  { label: 'Admissions',    path: ROUTES.ADMISSIONS },
  { label: 'Faculty',       path: ROUTES.FACULTY },
  { label: 'Gallery',       path: ROUTES.GALLERY },
  { label: 'Results',       path: ROUTES.RESULTS },
  { label: 'Alumni',        path: ROUTES.ALUMNI },
  { label: 'Notifications', path: ROUTES.NOTIFICATIONS },
  { label: 'Contact Us',    path: ROUTES.CONTACT },
]

const FooterNavColumn = () => (
  <div>
    <h3 className="footer-col__heading">Quick Links</h3>
    <ul className="footer-col__list">
      {links.map((l) => (
        <li key={l.path}>
          <Link to={l.path} className="footer-col__link">
            <ChevronRight size={14} className="footer-col__link-icon" />
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterNavColumn