import { useState, useRef, useEffect } from 'react'

interface LazyLoadImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  style?: React.CSSProperties
}

const LazyLoadImage = ({ src, alt, className, width, height, style }: LazyLoadImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={{ ...style, opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
      onLoad={() => setLoaded(true)}
      loading="lazy"
    />
  )
}

export default LazyLoadImage