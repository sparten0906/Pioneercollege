import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import {
  alumniTestimonials,
  type AlumniTestimonial,
} from '../../data/alumni-testimonials'

interface StoryCardProps {
  alumni: AlumniTestimonial
}

const StoryCard = ({ alumni }: StoryCardProps) => (
  <article className="alumni-story-card">
    <div className="alumni-story-card__quote-mark">"</div>
    <blockquote className="alumni-story-card__quote">
      {alumni.quote}
    </blockquote>
    <div className="alumni-story-card__footer">
      <img
        src={alumni.photo}
        alt={`Photo of ${alumni.name}`}
        className="alumni-story-card__photo"
        loading="lazy"
        width={56}
        height={56}
      />
      <div className="alumni-story-card__info">
        <span className="alumni-story-card__name">{alumni.name}</span>
        <span className="alumni-story-card__role">
          {alumni.currentRole} — {alumni.organisation}
        </span>
        <span className="alumni-story-card__course">
          {alumni.course} · Batch {alumni.passOutYear}
        </span>
      </div>
    </div>
  </article>
)

const AlumniStoriesSection = () => {
  const ref = useRevealOnScroll<HTMLElement>({ threshold: 0.1, once: true })

  return (
    <section className="alumni-stories" ref={ref}>
      <div className="alumni-stories__inner page-wrapper">
        <div className="alumni-stories__header reveal-up">
          <h2 className="alumni-stories__title">Stories from Our Graduates</h2>
          <p className="alumni-stories__subtitle">
            Hear directly from BBS Institute alumni about how their training
            shaped their careers in healthcare.
          </p>
        </div>

        <div className="alumni-stories__grid">
          {alumniTestimonials.map((alumni, i) => (
            <div
              key={alumni.id}
              className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <StoryCard alumni={alumni} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlumniStoriesSection