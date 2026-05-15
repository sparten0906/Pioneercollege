import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import type { GalleryImage } from '../../types/gallery.types'
import '../../styles/components/lightbox.css'

interface LightboxPortalProps {
  image: GalleryImage | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const LightboxPortal = ({ image, onClose, onPrev, onNext }: LightboxPortalProps) => {
  useEffect(() => {
    if (!image) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [image, onClose, onPrev, onNext])

  if (!image) return null

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <svg className="lightbox__close__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous image">
        <svg className="lightbox__nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>

      <div className="lightbox__image-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="lightbox__image" />
        {image.caption && <p className="lightbox__caption">{image.caption}</p>}
      </div>

      <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next image">
        <svg className="lightbox__nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>,
    document.body,
  )
}

export default LightboxPortal