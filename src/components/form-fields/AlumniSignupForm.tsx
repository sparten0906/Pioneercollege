import { useState } from 'react'
import TextInputField from './shared-inputs/TextInputField'
import SelectDropdown from './shared-inputs/SelectDropdown'
import TextareaField from './shared-inputs/TextareaField'
import FormSubmitButton from './shared-inputs/FormSubmitButton'
import SuccessToast from '../feedback-indicators/SuccessToast'
import { useEmailSubmit } from '../../hooks/useEmailSubmit'
import { ALL_DIPLOMA_TITLES } from '../../constants/dept-categories.constants'
import type { AlumniRegistrationFields, FormSubmitStatus } from '../../types/form.types'

const courseOptions = [
  { value: '', label: 'Select your course', disabled: true },
  ...ALL_DIPLOMA_TITLES.map((t) => ({ value: t, label: t, disabled: false })),
]

const yearOptions = [
  { value: '', label: 'Year of passing', disabled: true },
  ...Array.from({ length: 20 }, (_, i) => {
    const y = (new Date().getFullYear() - i).toString()
    return { value: y, label: y, disabled: false }
  }),
]

const AlumniSignupForm = () => {
  const [fields, setFields] = useState<AlumniRegistrationFields>({
    fullName: '', email: '', phone: '', courseCompleted: '',
    passOutYear: '', currentOrganization: '', currentDesignation: '', city: '', message: '',
  })
  const { status, submit, setStatus } = useEmailSubmit()

  const update = (key: keyof AlumniRegistrationFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((p) => ({ ...p, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submit('alumni', fields)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <TextInputField label="Full Name" type="text" value={fields.fullName} onChange={update('fullName')} required placeholder="Your full name" />
          <TextInputField label="Email Address" type="email" value={fields.email} onChange={update('email')} required placeholder="your@email.com" />
        </div>
        <div className="form-row">
          <TextInputField label="Phone Number" type="tel" value={fields.phone} onChange={update('phone')} required placeholder="10-digit mobile" />
          <TextInputField label="City" type="text" value={fields.city} onChange={update('city')} required placeholder="Your current city" />
        </div>
        <div className="form-row">
          <SelectDropdown label="Course Completed" options={courseOptions} value={fields.courseCompleted} onChange={update('courseCompleted')} required />
          <SelectDropdown label="Year of Passing" options={yearOptions} value={fields.passOutYear} onChange={update('passOutYear')} required />
        </div>
        <div className="form-row">
          <TextInputField label="Current Organisation (Optional)" type="text" value={fields.currentOrganization ?? ''} onChange={update('currentOrganization')} placeholder="Where do you work?" />
          <TextInputField label="Current Designation (Optional)" type="text" value={fields.currentDesignation ?? ''} onChange={update('currentDesignation')} placeholder="Your job title" />
        </div>
        <TextareaField label="Message (Optional)" value={fields.message ?? ''} onChange={update('message')} placeholder="Share your experience at PIONEER COLLEGE..." rows={4} />
        <div style={{ marginTop: 'var(--space-5)' }}>
          <FormSubmitButton status={status as FormSubmitStatus} label="Register as Alumni" />
        </div>
      </form>
      {status === 'success' && <SuccessToast type="success" title="Registered!" message="Welcome to the PIONEER COLLEGE Alumni Network. We will be in touch soon." onClose={() => setStatus('idle')} />}
      {status === 'error' && <SuccessToast type="error" title="Failed" message="Please try again." onClose={() => setStatus('idle')} />}
    </>
  )
}

export default AlumniSignupForm