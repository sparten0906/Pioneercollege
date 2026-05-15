import { useState } from 'react'
import TextInputField from './shared-inputs/TextInputField'
import TextareaField from './shared-inputs/TextareaField'
import FormSubmitButton from './shared-inputs/FormSubmitButton'
import SuccessToast from '../feedback-indicators/SuccessToast'
import { useEmailSubmit } from '../../hooks/useEmailSubmit'
import { validateDiplomaEnquiry, getFieldError } from '../../utils/form-validators'
import type { DiplomaEnquiryFields, FormSubmitStatus } from '../../types/form.types'

interface DiplomaEnquiryFormProps { courseTitle: string }

const DiplomaEnquiryForm = ({ courseTitle }: DiplomaEnquiryFormProps) => {
  const [fields, setFields] = useState<DiplomaEnquiryFields>({ name: '', email: '', phone: '', courseTitle, message: '' })
  const [validationErrors, setValidationErrors] = useState<ReturnType<typeof validateDiplomaEnquiry>>([])
  const { status, submit, setStatus } = useEmailSubmit()

  const update = (key: keyof DiplomaEnquiryFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((p) => ({ ...p, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateDiplomaEnquiry(fields as unknown as Record<string, string>)
    setValidationErrors(errors)
    if (errors.length > 0) return
    await submit('diploma', fields)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <TextInputField label="Your Name" type="text" placeholder="Full name" value={fields.name} onChange={update('name')} required error={getFieldError(validationErrors, 'name')} />
        <TextInputField label="Email" type="email" placeholder="your@email.com" value={fields.email} onChange={update('email')} required error={getFieldError(validationErrors, 'email')} />
        <TextInputField label="Phone" type="tel" placeholder="10-digit mobile" value={fields.phone} onChange={update('phone')} required error={getFieldError(validationErrors, 'phone')} />
        <TextareaField label="Message (Optional)" placeholder="Any questions about this course?" value={fields.message ?? ''} onChange={update('message')} rows={3} />
        <FormSubmitButton status={status as FormSubmitStatus} label="Send Enquiry" />
      </form>
      {status === 'success' && <SuccessToast type="success" title="Enquiry Sent!" message="We will call you back shortly." onClose={() => setStatus('idle')} />}
      {status === 'error' && <SuccessToast type="error" title="Failed to Send" message="Please try again." onClose={() => setStatus('idle')} />}
    </>
  )
}

export default DiplomaEnquiryForm