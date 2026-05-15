import { useState, useEffect } from 'react'
import { FileEdit } from 'lucide-react'
import NavBrand from './NavBrand'
import DesktopNavLinks from './DesktopNavLinks'
import HamburgerToggle from './HamburgerToggle'
import MobileSideDrawer from './MobileSideDrawer'
import PrimaryBtn from '../../button-elements/PrimaryBtn'
import useNavbarShadow from '../../../hooks/useNavbarShadow'
import { ROUTES } from '../../../constants/route-paths.constants'
import '../../../styles/layout/navbar.css'

const TopNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isScrolled = useNavbarShadow()

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header className={`navbar${isScrolled ? ' is-scrolled' : ''}`} role="banner">
        <div className="navbar__inner">
          <NavBrand />

          <nav className="navbar__desktop-nav" aria-label="Main navigation">
            <DesktopNavLinks />
          </nav>

          <div className="navbar__cta">
            <PrimaryBtn

              href={ROUTES.ADMISSIONS}
              size="sm"
              icon={<FileEdit size={16} />}
            >
              Apply Now
            </PrimaryBtn>
          </div>

          <HamburgerToggle
            isOpen={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          />
        </div>
      </header>

      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  )
}

export default TopNavbar