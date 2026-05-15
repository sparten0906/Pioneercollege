import { useState, useEffect } from 'react'

const SCROLL_THRESHOLD = 20

/**
 * Returns true once the page scrolls past SCROLL_THRESHOLD pixels.
 * Used by TopNavbar to add a shadow and border once the user scrolls.
 */
const useNavbarShadow = (): boolean => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    // Check immediately in case page loads already scrolled
    handler()

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return isScrolled
}

export default useNavbarShadow