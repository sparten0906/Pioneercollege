import { useState, useEffect, useCallback } from 'react'

interface UseModalControlReturn<T> {
  isOpen:  boolean
  data:    T | null
  open:    (payload: T) => void
  close:   () => void
  toggle:  () => void
}

/**
 * Generic modal state manager.
 * Locks body scroll while open and restores it on close.
 *
 * Usage:
 *   const { isOpen, data, open, close } = useModalControl<FacultyMember>()
 *   open(member)   // opens modal and stores member as data
 *   close()        // closes modal and clears data
 */
const useModalControl = <T = unknown>(): UseModalControlReturn<T> => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData]     = useState<T | null>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const open = useCallback((payload: T) => {
    setData(payload)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    // Delay clearing data so closing animation can finish
    setTimeout(() => setData(null), 300)
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) close()
    else setIsOpen(true)
  }, [isOpen, close])

  return { isOpen, data, open, close, toggle }
}

export default useModalControl