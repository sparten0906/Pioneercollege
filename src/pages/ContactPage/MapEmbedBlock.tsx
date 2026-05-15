import { CONTACT_DETAILS, INSTITUTE } from '../../constants/institute.constants'

const MapPinIcon = () => (
  <svg className="map-section__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const MapEmbedBlock = () => {
  return (
    <div className="map-section">
      <div className="map-section__header">
        <h2 className="map-section__title">Find Us on the Map</h2>
        <p className="map-section__desc">
          We are conveniently located in Uttar Pradesh. Walk in any weekday
          between 9 AM and 5 PM — no appointment needed for campus visits.
        </p>
      </div>

      <div className="map-section__embed-wrap reveal-up">
        {CONTACT_DETAILS.mapEmbedUrl !== 'https://www.google.com/maps/embed?pb=YOUR_EMBED_URL' ? (
          <iframe
            src={CONTACT_DETAILS.mapEmbedUrl}
            className="map-section__embed"
            title={`${INSTITUTE.name} location on Google Maps`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          /* Placeholder shown until real embed URL is added */
          <div
            className="map-section__embed"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-4)',
              background: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-muted)',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ opacity: 0.4 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>
                Google Maps Embed
              </p>
              <p style={{ fontSize: 'var(--text-sm)' }}>
                Replace <code>mapEmbedUrl</code> in{' '}
                <code>institute.constants.ts</code> with your real Google Maps
                embed URL.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CTA bar below map */}
      <div className="map-section__cta-bar reveal-up">
        <div className="map-section__cta-text">
          <MapPinIcon />
          <span>
            <strong className="map-section__cta-address">
              {CONTACT_DETAILS.address}
            </strong>
          </span>
        </div>

        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(
            INSTITUTE.name + ' ' + CONTACT_DETAILS.address,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-2) var(--space-4)',
            background: 'var(--color-primary)',
            color: '#fff',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-semibold)',
            textDecoration: 'none',
            transition: 'background var(--transition-fast)',
            whiteSpace: 'nowrap',
          }}
        >
          Open in Google Maps
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}

export default MapEmbedBlock