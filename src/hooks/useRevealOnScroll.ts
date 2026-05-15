import { useEffect, useRef } from 'react'

interface UseRevealOnScrollOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  deps?: any[]
}

/**
 * Attaches an IntersectionObserver to a container ref.
 * When child elements with .reveal, .reveal-up, .reveal-left etc.
 * enter the viewport, the hook adds .is-visible to them.
 */
const useRevealOnScroll = <T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOnScrollOptions = {},
) => {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true, deps = [] } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale',
    )

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin, once, ...deps])

  return ref
}

export default useRevealOnScroll