import { useState, useEffect } from 'react'
import '../../styles/components/toast.css'

interface SuccessToastProps {
  message: string
  title?: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}

const toastIcons = {
  success: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  error: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  info: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
}

const SuccessToast = ({ message, title, type = 'success', duration = 4000, onClose }: SuccessToastProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); onClose?.() }, duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div className="toast-container">
      <div className={`toast toast--${type}`} role="alert">
        <span className="toast__icon">{toastIcons[type]}</span>
        <div className="toast__content">
          {title && <p className="toast__title">{title}</p>}
          <p className="toast__message">{message}</p>
        </div>
        <button className="toast__close" onClick={() => { setVisible(false); onClose?.() }} aria-label="Close notification">
          <svg className="toast__close__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  )
}

export default SuccessToast