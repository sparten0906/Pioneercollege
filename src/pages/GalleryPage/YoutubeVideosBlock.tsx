import YoutubeFrame from '../../components/media-elements/YoutubeFrame'
import PrimaryBtn from '../../components/button-elements/PrimaryBtn'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { SOCIAL_LINKS } from '../../constants/institute.constants'

interface VideoEntry {
  id:    string
  title: string
  desc:  string
}

/*
 * Replace the YouTube video IDs below with actual BBS Institute
 * video IDs from your YouTube channel.
 * The ID is the part after ?v= in a YouTube URL.
 * e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ → 'dQw4w9WgXcQ'
 */
const videos: VideoEntry[] = [
  {
    id:    'YOUR_VIDEO_ID_1',
    title: 'BBS Institute — Campus Tour 2024',
    desc:  'Take a virtual tour of our campus — labs, library, auditorium, and clinical training facilities.',
  },
  {
    id:    'YOUR_VIDEO_ID_2',
    title: 'Annual Day Highlights — 2024',
    desc:  'Relive the best moments from BBS Institute Annual Day 2024 — performances, awards, and celebrations.',
  },
]

const YoutubeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: '#ff0000', flexShrink: 0 }}
  >
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
)

const YoutubeVideosBlock = () => {
  /*
   * useRevealOnScroll — wraps the videos section.
   * Each video card carries .reveal-up + a stagger class
   * so they cascade in from bottom when this section scrolls
   * into view.
   *
   * threshold: 0.1 — 10% of the section visible triggers animation
   * rootMargin: fires a little before the top edge hits the viewport
   * once: true — plays animation only once
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold:  0.10,
    rootMargin: '0px 0px -50px 0px',
    once:       true,
  })

  /* Get YouTube channel URL from social links */
  const youtubeLink = SOCIAL_LINKS.find((s) => s.platform === 'youtube')

  return (
    <div className="youtube-section" ref={sectionRef}>
      <div className="youtube-grid">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`youtube-video-card reveal-up stagger-${Math.min(index + 1, 8)}`}
          >
            <div className="youtube-video-card__embed">
              <YoutubeFrame
                videoId={video.id}
                title={video.title}
              />
            </div>
            <div className="youtube-video-card__info">
              <h3 className="youtube-video-card__title">{video.title}</h3>
              <p className="youtube-video-card__desc">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe CTA */}
      {youtubeLink && (
        <div className="youtube-section__cta reveal-up">
          <PrimaryBtn
            href={youtubeLink.url}
            external
            size="lg"
            icon={<YoutubeIcon />}
          >
            Subscribe to Our Channel
          </PrimaryBtn>
          <p
            style={{
              marginTop: 'var(--space-3)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
            }}
          >
            Stay updated with campus events, student stories, and career guidance.
          </p>
        </div>
      )}
    </div>
  )
}

export default YoutubeVideosBlock