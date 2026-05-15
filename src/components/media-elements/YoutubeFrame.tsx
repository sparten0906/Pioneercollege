interface YoutubeFrameProps {
  videoId: string
  title?: string
}

const YoutubeFrame = ({ videoId, title = 'YouTube video' }: YoutubeFrameProps) => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-xl)', background: 'var(--color-bg-dark)' }}>
    <iframe
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  </div>
)

export default YoutubeFrame