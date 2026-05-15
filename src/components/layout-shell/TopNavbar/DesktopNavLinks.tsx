import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import {
  Home,
  Info,
  BookOpen,
  ClipboardEdit,
  Users,
  Images,
  Mail,
  ChevronDown,
} from 'lucide-react'
import { ROUTES } from '../../../constants/route-paths.constants'
import NavDropdownMenu from './NavDropdownMenu'

const courseLinks = [
  { label: 'All Courses', path: ROUTES.COURSES },
  { label: 'Diploma in Medical Lab Technician', path: '/courses/diploma-in-medical-lab-technician' },
  { label: 'Diploma in Medical Radiography',    path: '/courses/diploma-in-medical-radiography' },
  { label: 'Diploma in Dialysis Technician',    path: '/courses/diploma-in-dialysis-technician' },
  { label: 'Diploma in MRI Technician',         path: '/courses/diploma-in-mri-technician' },
  { label: 'Diploma in Cath Lab Technology',    path: '/courses/diploma-in-cath-lab-technology' },
  { label: 'Diploma in Critical Care Technician',path: '/courses/diploma-in-critical-care-technician' },
  { label: '+ View All 16 Courses',             path: ROUTES.COURSES },
]

const DesktopNavLinks = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => setDropdownOpen(true)
  const handleMouseLeave = () => setDropdownOpen(false)

  return (
    <>
      <NavLink
        to={ROUTES.HOME}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        end
      >
        <Home size={16} />
        Home
      </NavLink>

      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        <Info size={16} />
        About Us
      </NavLink>

      <div
        ref={dropdownRef}
        style={{ position: 'relative' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          to={ROUTES.COURSES}
          className={({ isActive }) =>
            `nav-link nav-dropdown-trigger${isActive ? ' active' : ''}`
          }
        >
          <BookOpen size={16} />
          Courses
          <ChevronDown size={14} className="nav-dropdown-trigger__chevron" />
        </NavLink>
        <NavDropdownMenu links={courseLinks} isOpen={dropdownOpen} />
      </div>

      <NavLink
        to={ROUTES.ADMISSIONS}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        <ClipboardEdit size={16} />
        Admissions
      </NavLink>

      <NavLink
        to={ROUTES.FACULTY}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        <Users size={16} />
        Faculty
      </NavLink>

      <NavLink
        to={ROUTES.GALLERY}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        <Images size={16} />
        Gallery
      </NavLink>

      <NavLink
        to={ROUTES.CONTACT}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        <Mail size={16} />
        Contact
      </NavLink>
    </>
  )
}

export default DesktopNavLinks