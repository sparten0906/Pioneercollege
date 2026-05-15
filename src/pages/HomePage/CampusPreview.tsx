import { Link } from 'react-router-dom'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import OutlineBtn from '../../components/button-elements/OutlineBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getCampusImage } from '../../utils/asset-path-resolver'
import { ROUTES } from '../../constants/route-paths.constants'

const campusImages = [
  { src: getCampusImage('campus-library-interior.webp'), caption: 'Library and Resource Centre', size: 'large' },
  { src: getCampusImage('campus-computer-lab.webp'),     caption: 'Computer Lab',                 size: 'medium' },
  { src: getCampusImage('campus-science-lab.webp'),      caption: 'Science Laboratory',            size: 'medium' },
  { src: getCampusImage('campus-radiology-unit.webp'),   caption: 'Radiology Unit',               size: 'medium' },
  { src: getCampusImage('campus-auditorium.webp'),       caption: 'Auditorium',                    size: 'wide' },
]

const ImagesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
)

const CampusPreview = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>()
  return (
    <section ref={sectionRef} className="section campus-preview" aria-labelledby="campus-heading">
      <div className="page-wrapper">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <SectionTitleBlock title="Our Campus and Facilities" subtitle="Modern infrastructure designed for the best paramedical learning environment" align="left" accentWord="Campus" />
          <OutlineBtn href={ROUTES.GALLERY} icon={<ImagesIcon />}>View Full Gallery</OutlineBtn>
        </div>
        <div className="campus-preview__masonry reveal-up">
          {campusImages.map((img) => (
            <Link key={img.src} to={ROUTES.GALLERY} className={`campus-preview__item campus-preview__item--${img.size}`} aria-label={`View ${img.caption}`}>
              <img src={img.src} alt={img.caption} className="campus-preview__img" loading="lazy" />
              <div className="campus-preview__caption">{img.caption}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CampusPreview