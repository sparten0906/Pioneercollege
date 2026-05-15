interface NavDropdownMenuProps {
  links: { label: string; path: string }[]
  isOpen: boolean
}

const NavDropdownMenu = ({ links, isOpen }: NavDropdownMenuProps) => {
  return (
    <div className={`nav-dropdown${isOpen ? ' is-open' : ''}`} role="menu">
      {links.map((link) => (
        <a key={link.path + link.label} href={link.path} className="nav-dropdown__item" role="menuitem">
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default NavDropdownMenu