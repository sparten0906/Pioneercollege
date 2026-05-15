import { useState } from 'react'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import { useEmailSubmit } from '../../hooks/useEmailSubmit'
import { validateName, validateEmail, validatePhone, getFieldError } from '../../utils/form-validators'
import { ALL_DIPLOMA_TITLES } from '../../constants/dept-categories.constants'
import { User, Mail, Phone, GraduationCap, CalendarDays, Building2, Briefcase, MapPin, MessageSquare, Send } from 'lucide-react'
import type { AlumniRegistrationFields } from '../../types/form.types'
import type { FormValidationError } from '../../types/form.types'

const PASS_OUT_YEARS = Array.from(
  { length: new Date().getFullYear() - 2004 },
  (_, i) => String(2005 + i),
).reverse()

const initialForm: AlumniRegistrationFields = {
  fullName: '',
  email: '',
  phone: '',
  courseCompleted: '',
  passOutYear: '',
  currentOrganization: '',
  currentDesignation: '',
  city: '',
  message: '',
}

const AlumniConnectForm = () => {
  const ref = useRevealOnScroll<HTMLElement>({ threshold: 0.1, once: true })
  const [form, setForm] = useState<AlumniRegistrationFields>(initialForm)
  const [errors, setErrors] = useState<FormValidationError[]>([])

  const { status, submit } = useEmailSubmit()

  const validate = (): FormValidationError[] => {
    const errs: FormValidationError[] = []
    const name = validateName(form.fullName)
    const email = validateEmail(form.email)
    const phone = validatePhone(form.phone)
    if (!form.courseCompleted) errs.push({ field: 'courseCompleted', message: 'Please select your course.' })
    if (!form.passOutYear) errs.push({ field: 'passOutYear', message: 'Please select your pass-out year.' })
    if (!form.city.trim()) errs.push({ field: 'city', message: 'City is required.' })
    if (name) errs.push({ field: 'fullName', message: name })
    if (email) errs.push({ field: 'email', message: email })
    if (phone) errs.push({ field: 'phone', message: phone })
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => prev.filter(err => err.field !== e.target.name))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const errs = validate()
    if (errs.length > 0) { setErrors(errs); return }
    submit('alumni', form)
  }

  if (status === 'success') {
    return (
      <section className="alumni-connect" ref={ref}>
        <div className="alumni-connect__inner page-wrapper">
          <div className="alumni-connect__success">
            <span className="alumni-connect__success-icon">✅</span>
            <h3>Welcome back to the PIONEER COLLEGE Family!</h3>
            <p>
              Your registration has been received. Our alumni coordinator will
              reach out to you shortly.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="alumni-connect" ref={ref}>
      <div className="alumni-connect__inner page-wrapper">
        <div className="alumni-connect__header reveal-up">
          <h2 className="alumni-connect__title">Join the Alumni Network</h2>
          <p className="alumni-connect__subtitle">
            Are you a PIONEER COLLEGE graduate? Register with us to stay connected,
            receive alumni updates, and inspire current students with your journey.
          </p>
        </div>

        <div className="alumni-connect__form-wrap reveal-up">
          <div className="alumni-connect__form">

            {/* Full Name */}
            <div className="alumni-connect__field">
              <label className="alumni-connect__label" htmlFor="fullName">
                Full Name <span>*</span>
              </label>
              <div className="alumni-connect__input-wrap">
                <User className="alumni-connect__input-icon" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`alumni-connect__input${getFieldError(errors, 'fullName') ? ' alumni-connect__input--error' : ''}`}
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>
              {getFieldError(errors, 'fullName') && (
                <span className="alumni-connect__error">{getFieldError(errors, 'fullName')}</span>
              )}
            </div>

            {/* Email + Phone */}
            <div className="alumni-connect__row">
              <div className="alumni-connect__field">
                <label className="alumni-connect__label" htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <div className="alumni-connect__input-wrap">
                  <Mail className="alumni-connect__input-icon" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`alumni-connect__input${getFieldError(errors, 'email') ? ' alumni-connect__input--error' : ''}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {getFieldError(errors, 'email') && (
                  <span className="alumni-connect__error">{getFieldError(errors, 'email')}</span>
                )}
              </div>
              <div className="alumni-connect__field">
                <label className="alumni-connect__label" htmlFor="phone">
                  Mobile Number <span>*</span>
                </label>
                <div className="alumni-connect__input-wrap">
                  <Phone className="alumni-connect__input-icon" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`alumni-connect__input${getFieldError(errors, 'phone') ? ' alumni-connect__input--error' : ''}`}
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                {getFieldError(errors, 'phone') && (
                  <span className="alumni-connect__error">{getFieldError(errors, 'phone')}</span>
                )}
              </div>
            </div>

            {/* Course + Year */}
            <div className="alumni-connect__row">
              <div className="alumni-connect__field">
                <label className="alumni-connect__label" htmlFor="courseCompleted">
                  Course Completed <span>*</span>
                </label>
                <div className="alumni-connect__input-wrap">
                  <GraduationCap className="alumni-connect__input-icon" />
                  <select
                    id="courseCompleted"
                    name="courseCompleted"
                    className={`alumni-connect__select${getFieldError(errors, 'courseCompleted') ? ' alumni-connect__select--error' : ''}`}
                    value={form.courseCompleted}
                    onChange={handleChange}
                  >
                    <option value="">Select your diploma</option>
                    {ALL_DIPLOMA_TITLES.map(title => (
                      <option key={title} value={title}>{title}</option>
                    ))}
                  </select>
                </div>
                {getFieldError(errors, 'courseCompleted') && (
                  <span className="alumni-connect__error">{getFieldError(errors, 'courseCompleted')}</span>
                )}
              </div>
              <div className="alumni-connect__field">
                <label className="alumni-connect__label" htmlFor="passOutYear">
                  Pass-Out Year <span>*</span>
                </label>
                <div className="alumni-connect__input-wrap">
                  <CalendarDays className="alumni-connect__input-icon" />
                  <select
                    id="passOutYear"
                    name="passOutYear"
                    className={`alumni-connect__select${getFieldError(errors, 'passOutYear') ? ' alumni-connect__select--error' : ''}`}
                    value={form.passOutYear}
                    onChange={handleChange}
                  >
                    <option value="">Select year</option>
                    {PASS_OUT_YEARS.map(yr => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>
                {getFieldError(errors, 'passOutYear') && (
                  <span className="alumni-connect__error">{getFieldError(errors, 'passOutYear')}</span>
                )}
              </div>
            </div>

            {/* Organisation + Designation */}
            <div className="alumni-connect__row">
              <div className="alumni-connect__field">
                <label className="alumni-connect__label" htmlFor="currentOrganization">
                  Current Organisation
                </label>
                <div className="alumni-connect__input-wrap">
                  <Building2 className="alumni-connect__input-icon" />
                  <input
                    id="currentOrganization"
                    name="currentOrganization"
                    type="text"
                    className="alumni-connect__input"
                    placeholder="Hospital / clinic / company name"
                    value={form.currentOrganization}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="alumni-connect__field">
                <label className="alumni-connect__label" htmlFor="currentDesignation">
                  Current Designation
                </label>
                <div className="alumni-connect__input-wrap">
                  <Briefcase className="alumni-connect__input-icon" />
                  <input
                    id="currentDesignation"
                    name="currentDesignation"
                    type="text"
                    className="alumni-connect__input"
                    placeholder="e.g. Senior Lab Technician"
                    value={form.currentDesignation}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* City */}
            <div className="alumni-connect__field">
              <label className="alumni-connect__label" htmlFor="city">
                Current City <span>*</span>
              </label>
              <div className="alumni-connect__input-wrap">
                <MapPin className="alumni-connect__input-icon" />
                <input
                  id="city"
                  name="city"
                  type="text"
                  className={`alumni-connect__input${getFieldError(errors, 'city') ? ' alumni-connect__input--error' : ''}`}
                  placeholder="City you are currently based in"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
              {getFieldError(errors, 'city') && (
                <span className="alumni-connect__error">{getFieldError(errors, 'city')}</span>
              )}
            </div>

            {/* Message */}
            <div className="alumni-connect__field">
              <label className="alumni-connect__label" htmlFor="message">
                Message / Share Your Story (optional)
              </label>
              <div className="alumni-connect__textarea-wrap">
                <MessageSquare className="alumni-connect__input-icon" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="alumni-connect__textarea"
                  placeholder="Tell us about your career journey after PIONEER COLLEGE..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="alumni-connect__submit-error">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <button
              className="alumni-connect__submit"
              onClick={handleSubmit}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting…' : (
                <>
                  Register as Alumni
                  <Send size={18} />
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AlumniConnectForm