import OutlineBtn from '../../components/button-elements/OutlineBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { getFeaturedTestimonials } from '../../data/alumni-testimonials'
import { ROUTES } from '../../constants/route-paths.constants'
import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'

const QuoteIcon = () => (
  <svg className="alumni-voices__quote-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
)

const AlumniVoices = () => {
  const sectionRef   = useRevealOnScroll<HTMLElement>()
  const testimonials = getFeaturedTestimonials()
  return (
    <section ref={sectionRef} className="section alumni-voices" aria-labelledby="alumni-heading">
      <div className="page-wrapper">
        <div className="alumni-voices__header">
          <div className="section-title-override">
            <SectionTitleBlock
              title="What Our Graduates Say"
              subtitle="Over 2000 students have built successful healthcare careers with BBS Institute."
              align="left"
              accentWord="Graduates"
            />
          </div>
          <OutlineBtn href={ROUTES.ALUMNI} variant="white">Meet All Alumni</OutlineBtn>
        </div>
        <div className="alumni-voices__track">
          {testimonials.map((t, i) => (
            <article key={t.id} className={`alumni-voices__card reveal-up stagger-${i + 1}`}>
              <QuoteIcon />
              <p className="alumni-voices__quote">{t.quote}</p>
              <div className="alumni-voices__author">
                <img src={t.photo} alt={t.name} className="alumni-voices__photo" loading="lazy" />
                <div>
                  <p className="alumni-voices__name">{t.name}</p>
                  <p className="alumni-voices__role">{t.currentRole} - {t.organisation}</p>
                  <p className="alumni-voices__batch">{t.course} Batch {t.passOutYear}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlumniVoices