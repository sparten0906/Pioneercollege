import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import TopNavbar from '../../components/layout-shell/TopNavbar'

// Stub CSS and child components to keep the test focused on behaviour
vi.mock('../../../styles/layout/navbar.css', () => ({}))
vi.mock('../../components/layout-shell/TopNavbar/NavBrand', () => ({
  default: () => <span data-testid="nav-brand">BBS</span>,
}))
vi.mock('../../components/layout-shell/TopNavbar/DesktopNavLinks', () => ({
  default: () => <nav data-testid="desktop-links" />,
}))
vi.mock('../../components/layout-shell/TopNavbar/HamburgerToggle', () => ({
  default: ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
    <button data-testid="hamburger" onClick={onClick} aria-expanded={isOpen}>
      Menu
    </button>
  ),
}))
vi.mock('../../components/layout-shell/TopNavbar/MobileSideDrawer', () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    isOpen
      ? <div role="dialog" aria-modal="true" data-testid="mobile-drawer">
          <button onClick={onClose} data-testid="drawer-close">Close</button>
        </div>
      : null
  ),
}))
vi.mock('../../../hooks/useNavbarShadow', () => ({
  default: () => false,
}))
vi.mock('../../button-elements/PrimaryBtn', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <a href="/admissions" data-testid="apply-btn">{children}</a>
  ),
}))

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <TopNavbar />
    </MemoryRouter>,
  )

describe('TopNavbar', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('renders the navbar as a <header> with role="banner"', () => {
    renderNavbar()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the brand', () => {
    renderNavbar()
    expect(screen.getByTestId('nav-brand')).toBeInTheDocument()
  })

  it('renders the desktop nav links', () => {
    renderNavbar()
    expect(screen.getByTestId('desktop-links')).toBeInTheDocument()
  })

  it('renders the "Apply Now" CTA button', () => {
    renderNavbar()
    expect(screen.getByTestId('apply-btn')).toBeInTheDocument()
  })

  it('renders the hamburger toggle button', () => {
    renderNavbar()
    expect(screen.getByTestId('hamburger')).toBeInTheDocument()
  })

  it('mobile drawer is hidden by default', () => {
    renderNavbar()
    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument()
  })

  it('clicking hamburger opens the mobile drawer', async () => {
    const user = userEvent.setup()
    renderNavbar()

    await user.click(screen.getByTestId('hamburger'))
    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('hamburger aria-expanded reflects open state', async () => {
    const user = userEvent.setup()
    renderNavbar()

    const hamburger = screen.getByTestId('hamburger')
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
  })

  it('closing the drawer via onClose hides it', async () => {
    const user = userEvent.setup()
    renderNavbar()

    await user.click(screen.getByTestId('hamburger'))
    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument()

    await user.click(screen.getByTestId('drawer-close'))
    await waitFor(() => {
      expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument()
    })
  })

  it('sets body overflow to hidden when drawer is open', async () => {
    const user = userEvent.setup()
    renderNavbar()

    await user.click(screen.getByTestId('hamburger'))
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body overflow when drawer is closed', async () => {
    const user = userEvent.setup()
    renderNavbar()

    await user.click(screen.getByTestId('hamburger'))
    await user.click(screen.getByTestId('drawer-close'))
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('')
    })
  })
})
