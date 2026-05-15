import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import ContactFormComponent from '../../components/form-fields/MainContactForm'
import { CONTACT_DETAILS } from '../../constants/institute.constants'
import { getAdmissionWhatsAppLink } from '../../data/social-media-links'

const MapPinIcon = () => (
  <svg className="contact-form-section__sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="contact-form-section__sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="contact-form-section__sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="contact-form-section__sidebar-icon" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25d366' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.47 2 2 6.47 2 12c0 1.821.484 3.53 1.328 5.006L2 22l5.12-1.32A9.952 9.952 0 0012 22c5.53 0 10-4.47 10-10S17.529 2 12 2z" />
  </svg>
)

const sidebarItems = [
  {
    icon:    <MapPinIcon />,
    label:   'Visit Our Campus',
    value:   CONTACT_DETAILS.address,
    href:    null,
  },
  {
    icon:    <PhoneIcon />,
    label:   'Call for Admission Queries',
    value:   CONTACT_DETAILS.phone[0],
    href:    `tel:${CONTACT_DETAILS.phone[0].replace(/\s/g, '')}`,
  },
  {
    icon:    <MailIcon />,
    label:   'Email Admissions Team',
    value:   CONTACT_DETAILS.email[0],
    href:    `mailto:${CONTACT_DETAILS.email[0]}`,
  },
  {
    icon:    <WhatsAppIcon />,
    label:   'Chat on WhatsApp',
    value:   'Instant replies during working hours',
    href:    getAdmissionWhatsAppLink(),
  },
]

const MainContactForm = () => {
  return (
    <div>
      <SectionTitleBlock
        title="Send Us a Message"
        subtitle="Fill in the form and our team will get back to you within 24 hours."
        align="center"
        accentWord="Message"
      />

      <div className="contact-form-section">
        {/* Left sidebar */}
        <div className="contact-form-section__sidebar reveal-left">
          <h2 className="contact-form-section__sidebar-title">
            Talk to Us Directly
          </h2>
          <p className="contact-form-section__sidebar-desc">
            You can also reach us through any of the channels below.
            Our admissions team is available six days a week to answer
            your questions about courses, fees, and eligibility.
          </p>

          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className="contact-form-section__sidebar-item"
            >
              <div className="contact-form-section__sidebar-icon-wrap">
                {item.icon}
              </div>
              <div>
                <p className="contact-form-section__sidebar-item-label">
                  {item.label}
                </p>
                <p className="contact-form-section__sidebar-item-value">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right form card */}
        <div className="contact-form-section__form-wrap reveal-right">
          <div className="contact-form-section__form-header">
            <h3 className="contact-form-section__form-title">
              Send Your Message
            </h3>
            <p className="contact-form-section__form-sub">
              All fields marked with <span style={{ color: 'var(--color-error)' }}>*</span> are required.
              We do not share your information with third parties.
            </p>
          </div>

          {/* The actual form component from form-fields/ */}
          <ContactFormComponent />
        </div>
      </div>
    </div>
  )
}

export default MainContactForm