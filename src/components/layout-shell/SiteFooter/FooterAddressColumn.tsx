import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { CONTACT_DETAILS, INSTITUTE } from '../../../constants/institute.constants'
import { getAdmissionWhatsAppLink } from '../../../data/social-media-links'

const WhatsAppIcon = () => <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.47 2 2 6.47 2 12c0 1.821.484 3.53 1.328 5.006L2 22l5.12-1.32A9.952 9.952 0 0012 22c5.53 0 10-4.47 10-10S17.529 2 12 2z" /></svg>

const FooterAddressColumn = () => (
  <div>
    <h3 className="footer-col__heading">{INSTITUTE.name}</h3>

    <div className="footer-contact__item">
      <MapPin size={16} className="footer-contact__icon" />
      <span className="footer-contact__text">{CONTACT_DETAILS.address}</span>
    </div>

    <div className="footer-contact__item">
      <Phone size={16} className="footer-contact__icon" />
      <span className="footer-contact__text">
        {CONTACT_DETAILS.phone.map((p, i) => (
          <span key={p}>
            <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
            {i < CONTACT_DETAILS.phone.length - 1 && <br />}
          </span>
        ))}
      </span>
    </div>

    <div className="footer-contact__item">
      <Mail size={16} className="footer-contact__icon" />
      <span className="footer-contact__text">
        {CONTACT_DETAILS.email.map((e, i) => (
          <span key={e}>
            <a href={`mailto:${e}`}>{e}</a>
            {i < CONTACT_DETAILS.email.length - 1 && <br />}
          </span>
        ))}
      </span>
    </div>

    <div className="footer-contact__item">
      <Clock size={16} className="footer-contact__icon" />
      <span className="footer-contact__text">{CONTACT_DETAILS.workingHours}</span>
    </div>

    <a
      href={getAdmissionWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-col__link"
      style={{ marginTop: 'var(--space-3)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: '#25D366' }}
    >
      <WhatsAppIcon />
      Chat on WhatsApp
    </a>
  </div>
)

export default FooterAddressColumn