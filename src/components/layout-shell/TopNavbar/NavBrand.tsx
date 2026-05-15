import { Link } from 'react-router-dom'
import { getLogo } from '../../../utils/asset-path-resolver'
import { INSTITUTE } from '../../../constants/institute.constants'
import { ROUTES } from '../../../constants/route-paths.constants'

const NavBrand = () => {
  return (
    <Link to={ROUTES.HOME} className="navbar__brand" aria-label={`${INSTITUTE.name} — Home`}>
      <img
        src={getLogo('bbs-logo-colored.svg')}
        alt={`${INSTITUTE.abbreviation} logo`}
        className="navbar__logo"
        width="48"
        height="48"
      />
      <div className="navbar__brand-text">
        <span className="navbar__brand-name">{INSTITUTE.name}</span>
        <span className="navbar__brand-sub">{INSTITUTE.type} Education</span>
      </div>
    </Link>
  )
}

export default NavBrand