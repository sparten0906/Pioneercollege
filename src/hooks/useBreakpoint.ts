import { useState, useEffect } from 'react'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const BREAKPOINTS: Record<Breakpoint, number> = {
  'xs':  0,
  'sm':  480,
  'md':  768,
  'lg':  1024,
  'xl':  1280,
  '2xl': 1440,
}

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= BREAKPOINTS['2xl']) return '2xl'
  if (width >= BREAKPOINTS['xl'])  return 'xl'
  if (width >= BREAKPOINTS['lg'])  return 'lg'
  if (width >= BREAKPOINTS['md'])  return 'md'
  if (width >= BREAKPOINTS['sm'])  return 'sm'
  return 'xs'
}

interface UseBreakpointReturn {
  breakpoint: Breakpoint
  width:      number
  isMobile:   boolean
  isTablet:   boolean
  isDesktop:  boolean
  isAbove:    (bp: Breakpoint) => boolean
  isBelow:    (bp: Breakpoint) => boolean
}

/**
 * Tracks the current window breakpoint.
 * isMobile  → width < 768
 * isTablet  → width >= 768 && < 1024
 * isDesktop → width >= 1024
 *
 * Usage:
 *   const { isMobile, isAbove } = useBreakpoint()
 *   if (isMobile) return <MobileLayout />
 *   if (isAbove('lg')) return <DesktopLayout />
 */
const useBreakpoint = (): UseBreakpointReturn => {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1024,
  )

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler, { passive: true })
    return () => window.removeEventListener('resize', handler)
  }, [])

  const breakpoint = getBreakpoint(width)

  return {
    breakpoint,
    width,
    isMobile:  width < BREAKPOINTS['md'],
    isTablet:  width >= BREAKPOINTS['md'] && width < BREAKPOINTS['lg'],
    isDesktop: width >= BREAKPOINTS['lg'],
    isAbove:   (bp: Breakpoint) => width >= BREAKPOINTS[bp],
    isBelow:   (bp: Breakpoint) => width < BREAKPOINTS[bp],
  }
}

export default useBreakpoint