import { CONTACT_DETAILS } from '../../constants/institute.constants'

const MapPinIcon = () => (
  <svg className="contact-info-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="contact-info-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="contact-info-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="contact-info-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
)

const ContactInfoCards = () => {
  return (
    <div className="contact-info-grid">

      {/* Address */}
      <div className="contact-info-card contact-info-card--address reveal-up">
        <div className="contact-info-card__icon-wrap">
          <MapPinIcon />
        </div>
        <p className="contact-info-card__label">Our Address</p>
        <p className="contact-info-card__value">
          {CONTACT_DETAILS.address}
        </p>
        <p className="contact-info-card__sub">Uttar Pradesh, India</p>
      </div>

      {/* Phone */}
      <div className="contact-info-card contact-info-card--phone reveal-up">
        <div className="contact-info-card__icon-wrap">
          <PhoneIcon />
        </div>
        <p className="contact-info-card__label">Call Us</p>
        <p className="contact-info-card__value">
          {CONTACT_DETAILS.phone.map((phone, index) => (
            <span key={phone}>
              <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              {index < CONTACT_DETAILS.phone.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="contact-info-card__sub">Available Mon–Sat, 9 AM–5 PM</p>
      </div>

      {/* Email */}
      <div className="contact-info-card contact-info-card--email reveal-up">
        <div className="contact-info-card__icon-wrap">
          <MailIcon />
        </div>
        <p className="contact-info-card__label">Email Us</p>
        <p className="contact-info-card__value">
          {CONTACT_DETAILS.email.map((email, index) => (
            <span key={email}>
              <a href={`mailto:${email}`}>{email}</a>
              {index < CONTACT_DETAILS.email.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="contact-info-card__sub">We reply within 24 hours</p>
      </div>

      {/* Working Hours */}
      <div className="contact-info-card contact-info-card--hours reveal-up">
        <div className="contact-info-card__icon-wrap">
          <ClockIcon />
        </div>
        <p className="contact-info-card__label">Working Hours</p>
        <p className="contact-info-card__value">
          {CONTACT_DETAILS.workingHours}
        </p>
        <p className="contact-info-card__sub">Sunday: Closed</p>
      </div>

    </div>
  )
}

export default ContactInfoCards