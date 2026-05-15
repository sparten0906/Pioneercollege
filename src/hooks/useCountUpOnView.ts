import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

interface UseCountUpOnViewOptions {
  target:    number
  duration?: number
  start?:    number
}

interface UseCountUpOnViewReturn {
  count:    number
  ref:      RefObject<HTMLElement | null>   // ← was RefObject<HTMLElement>
  started:  boolean
}

const useCountUpOnView = ({
  target,
  duration = 2000,
  start = 0,
}: UseCountUpOnViewOptions): UseCountUpOnViewReturn => {
  const [count,   setCount]   = useState(start)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement | null>(null)  // ← was useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let rafId: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(start + eased * (target - start)))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [started, target, duration, start])

  return { count, ref, started }
}

export default useCountUpOnView