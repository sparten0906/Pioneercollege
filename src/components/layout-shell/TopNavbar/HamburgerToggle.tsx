interface HamburgerToggleProps {
  isOpen: boolean
  onClick: () => void
}

const HamburgerToggle = ({ isOpen, onClick }: HamburgerToggleProps) => {
  return (
    <button
      className={`navbar__hamburger${isOpen ? ' is-open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-drawer"
    >
      <span className="hamburger__bar" />
      <span className="hamburger__bar" />
      <span className="hamburger__bar" />
    </button>
  )
}

export default HamburgerToggle