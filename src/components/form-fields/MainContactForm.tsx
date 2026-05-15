import { useState } from 'react'
import TextInputField from './shared-inputs/TextInputField'
import TextareaField from './shared-inputs/TextareaField'
import CheckboxField from './shared-inputs/CheckboxField'
import FormSubmitButton from './shared-inputs/FormSubmitButton'
import SuccessToast from '../feedback-indicators/SuccessToast'
import { useEmailSubmit } from '../../hooks/useEmailSubmit'
import { validateContactForm, getFieldError } from '../../utils/form-validators'
import type { ContactFormFields, FormSubmitStatus } from '../../types/form.types'
import '../../styles/components/forms.css'

const initialState: ContactFormFields = {
  fullName: '', email: '', phone: '', subject: '', message: '', agreeToPolicy: false,
}

const UserIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>

const MainContactForm = () => {
  const [fields, setFields] = useState<ContactFormFields>(initialState)
  const [validationErrors, setValidationErrors] = useState<ReturnType<typeof validateContactForm>>([])
  const { status, submit, setStatus } = useEmailSubmit()

  const update = (key: keyof ContactFormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateContactForm(fields as unknown as Record<string, string | boolean>)
    setValidationErrors(errors)
    if (errors.length > 0) return
    await submit('contact', fields)
    if (status === 'success') setFields(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <TextInputField label="Full Name" type="text" placeholder="Your full name" value={fields.fullName} onChange={update('fullName')} required icon={<UserIcon />} error={getFieldError(validationErrors, 'fullName')} />
          <TextInputField label="Email Address" type="email" placeholder="your@email.com" value={fields.email} onChange={update('email')} required icon={<MailIcon />} error={getFieldError(validationErrors, 'email')} />
        </div>
        <div className="form-row">
          <TextInputField label="Phone Number" type="tel" placeholder="10-digit mobile number" value={fields.phone} onChange={update('phone')} required icon={<PhoneIcon />} error={getFieldError(validationErrors, 'phone')} />
          <TextInputField label="Subject" type="text" placeholder="What is this about?" value={fields.subject} onChange={update('subject')} required error={getFieldError(validationErrors, 'subject')} />
        </div>
        <TextareaField label="Message" placeholder="Write your message here (minimum 20 characters)..." value={fields.message} onChange={update('message')} required rows={5} error={getFieldError(validationErrors, 'message')} />
        <CheckboxField
          label={<>I agree to the <a href="#" style={{ color: 'var(--color-primary)' }}>Privacy Policy</a> of PIONEER COLLEGE</>}
          checked={fields.agreeToPolicy}
          onChange={(e) => setFields((p) => ({ ...p, agreeToPolicy: e.target.checked }))}
          error={getFieldError(validationErrors, 'agreeToPolicy')}
        />
        <div style={{ marginTop: 'var(--space-5)' }}>
          <FormSubmitButton status={status as FormSubmitStatus} label="Send Message" />
        </div>
      </form>
      {status === 'success' && (
        <SuccessToast
          type="success"
          title="Message Sent!"
          message="Thank you for reaching out. We will get back to you within 24 hours."
          onClose={() => setStatus('idle')}
        />
      )}
      {status === 'error' && (
        <SuccessToast
          type="error"
          title="Failed to Send"
          message="Something went wrong. Please try again or call us directly."
          onClose={() => setStatus('idle')}
        />
      )}
    </>
  )
}

export default MainContactForm