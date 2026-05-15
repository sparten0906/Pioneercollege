import type { ReactElement } from 'react'
import { getLogo } from '../../../utils/asset-path-resolver'
import { INSTITUTE, SOCIAL_LINKS } from '../../../constants/institute.constants'

// Social/brand icons are not available in lucide-react, kept as inline SVGs
const SocialIcons: Record<string, ReactElement> = {
  facebook: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
  instagram: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" /></svg>,
  youtube: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon fill="#1B4F72" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
  whatsapp: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M11.999 2C6.47 2 2 6.47 2 12c0 1.821.484 3.53 1.328 5.006L2 22l5.12-1.32A9.952 9.952 0 0012 22c5.53 0 10-4.47 10-10S17.529 2 12 2z" /></svg>,
  linkedin: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
}

const FooterBrandColumn = () => (
  <div>
    <img src={getLogo('bbs-logo-white.svg')} alt="BBS Institute" className="footer-brand__logo" width="56" height="56" />
    <p className="footer-brand__name">{INSTITUTE.name}</p>
    <p className="footer-brand__tagline">{INSTITUTE.tagline}</p>
    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--footer-text-muted)', marginBottom: 'var(--space-1)' }}>
      Estd. {INSTITUTE.established} &nbsp;|&nbsp; {INSTITUTE.type} Education
    </p>
    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--footer-text-muted)' }}>
      Affiliated: {INSTITUTE.affiliation}
    </p>
    <div className="footer-social">
      {SOCIAL_LINKS.map((sl) => (
        <a key={sl.platform} href={sl.url} className="footer-social__link" aria-label={sl.label} target="_blank" rel="noopener noreferrer">
          <span className="footer-social__icon">{SocialIcons[sl.platform]}</span>
        </a>
      ))}
    </div>
  </div>
)

export default FooterBrandColumn