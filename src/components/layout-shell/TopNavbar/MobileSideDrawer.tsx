import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  Home,
  Info,
  BookOpen,
  ClipboardEdit,
  Users,
  Images,
  Mail,
  Bell,
  X,
} from 'lucide-react'
import NavBrand from './NavBrand'
import PrimaryBtn from '../../button-elements/PrimaryBtn'
import { ROUTES } from '../../../constants/route-paths.constants'

interface MobileSideDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'Home',          path: ROUTES.HOME,          end: true,  icon: <Home size={18} /> },
  { label: 'About Us',      path: ROUTES.ABOUT,         end: false, icon: <Info size={18} /> },
  { label: 'Courses',       path: ROUTES.COURSES,       end: false, icon: <BookOpen size={18} /> },
  { label: 'Admissions',    path: ROUTES.ADMISSIONS,    end: false, icon: <ClipboardEdit size={18} /> },
  { label: 'Faculty',       path: ROUTES.FACULTY,       end: false, icon: <Users size={18} /> },
  { label: 'Gallery',       path: ROUTES.GALLERY,       end: false, icon: <Images size={18} /> },
  { label: 'Contact',       path: ROUTES.CONTACT,       end: false, icon: <Mail size={18} /> },
  { label: 'Notifications', path: ROUTES.NOTIFICATIONS, end: false, icon: <Bell size={18} /> },
]

const MobileSideDrawer = ({ isOpen, onClose }: MobileSideDrawerProps) => {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      id="mobile-drawer"
      className={`mobile-drawer${isOpen ? ' is-open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div
        className="mobile-drawer__backdrop"
        onClick={onClose}
        aria-label="Close menu"
      />
      <div className="mobile-drawer__panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="mobile-drawer__header">
          <NavBrand />
          <button className="mobile-drawer__close" onClick={onClose} aria-label="Close navigation">
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? ' active' : ''}`
              }
              onClick={onClose}
            >
              <span className="mobile-nav-link__icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <PrimaryBtn href={ROUTES.ADMISSIONS} fullWidth onClick={onClose}>
            Apply for Admission
          </PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default MobileSideDrawer