import { useState, useEffect } from 'react'
import '../../styles/components/cookie-bar.css'

const CookieIcon = () => (
  <svg className="cookie-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm14-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V18c0-.55-.45-1-1-1s-1 .45-1 1v.93A8.008 8.008 0 014 12c0-.55-.45-1-1-1s-1 .45-1 1c0 4.97 4.03 9 9 9z" />
  </svg>
)

const COOKIE_KEY = 'bbs_cookie_consent'

const CookieConsentBar = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      const t = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => { localStorage.setItem(COOKIE_KEY, 'accepted'); setVisible(false) }

  if (!visible) return null

  return (
    <div className="cookie-bar" role="alert" aria-live="polite">
      <div className="cookie-bar__inner">
        <CookieIcon />
        <p className="cookie-bar__text">
          We use cookies to enhance your browsing experience on our website. By continuing, you agree to our{' '}
          <a href="#">Privacy Policy</a>.
        </p>
        <div className="cookie-bar__actions">
          <button className="btn btn--accent btn--sm" onClick={accept}>Accept</button>
          <button className="btn btn--ghost btn--sm" onClick={() => setVisible(false)} style={{ color: 'rgba(255,255,255,0.7)' }}>Decline</button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsentBar