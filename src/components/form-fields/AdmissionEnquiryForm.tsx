import { useState } from 'react'
import TextInputField from './shared-inputs/TextInputField'
import SelectDropdown from './shared-inputs/SelectDropdown'
import TextareaField from './shared-inputs/TextareaField'
import CheckboxField from './shared-inputs/CheckboxField'
import RadioButtonGroup from './shared-inputs/RadioButtonGroup'
import FormSubmitButton from './shared-inputs/FormSubmitButton'
import SuccessToast from '../feedback-indicators/SuccessToast'
import { useEmailSubmit } from '../../hooks/useEmailSubmit'
import { validateAdmissionForm, getFieldError } from '../../utils/form-validators'
import { ALL_COURSE_OPTIONS, ACADEMIC_SESSIONS, HEAR_ABOUT_OPTIONS } from '../../constants/dept-categories.constants'
import type { AdmissionFormFields, FormSubmitStatus } from '../../types/form.types'
import '../../styles/components/forms.css'

const genderOptions = [
  { value: 'male', label: 'Male', disabled: false },
  { value: 'female', label: 'Female', disabled: false },
  { value: 'other', label: 'Other', disabled: false },
]

const sessionOptions = [
  { value: '', label: 'Select Session', disabled: true },
  ...ACADEMIC_SESSIONS.map((s) => ({ value: s, label: s, disabled: false })),
]

const initialState: AdmissionFormFields = {
  studentName: '', email: '', phone: '', dateOfBirth: '', gender: 'male',
  address: '', city: '', state: 'Uttar Pradesh', qualification: '',
  percentage: '', courseInterested: '', session: '', hearAboutUs: '',
  message: '', agreeToPolicy: false,
}

const AdmissionEnquiryForm = () => {
  const [fields, setFields] = useState<AdmissionFormFields>(initialState)
  const [validationErrors, setValidationErrors] = useState<ReturnType<typeof validateAdmissionForm>>([])
  const { status, submit, setStatus } = useEmailSubmit()

  const update = (key: keyof AdmissionFormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateAdmissionForm(fields as unknown as Record<string, string | boolean>)
    setValidationErrors(errors)
    if (errors.length > 0) return
    await submit('admission', fields)
    if (status === 'success') setFields(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <TextInputField label="Student Name" type="text" placeholder="Full name as per documents" value={fields.studentName} onChange={update('studentName')} required error={getFieldError(validationErrors, 'studentName')} />
          <TextInputField label="Email Address" type="email" placeholder="your@email.com" value={fields.email} onChange={update('email')} required error={getFieldError(validationErrors, 'email')} />
        </div>
        <div className="form-row">
          <TextInputField label="Phone Number" type="tel" placeholder="10-digit mobile" value={fields.phone} onChange={update('phone')} required error={getFieldError(validationErrors, 'phone')} />
          <TextInputField label="Date of Birth" type="date" value={fields.dateOfBirth} onChange={update('dateOfBirth')} required error={getFieldError(validationErrors, 'dateOfBirth')} />
        </div>
        <RadioButtonGroup label="Gender" name="gender" options={genderOptions} value={fields.gender} onChange={(v) => setFields((p) => ({ ...p, gender: v as AdmissionFormFields['gender'] }))} required error={getFieldError(validationErrors, 'gender')} />
        <TextInputField label="Address" type="text" placeholder="Street address" value={fields.address} onChange={update('address')} required error={getFieldError(validationErrors, 'address')} />
        <div className="form-row">
          <TextInputField label="City" type="text" placeholder="Your city" value={fields.city} onChange={update('city')} required error={getFieldError(validationErrors, 'city')} />
          <TextInputField label="Qualification" type="text" placeholder="e.g. 12th PCB from UP Board" value={fields.qualification} onChange={update('qualification')} required error={getFieldError(validationErrors, 'qualification')} />
        </div>
        <div className="form-row">
          <TextInputField label="Percentage / CGPA" type="text" placeholder="e.g. 75.5" value={fields.percentage} onChange={update('percentage')} required error={getFieldError(validationErrors, 'percentage')} />
          <SelectDropdown label="Session" options={sessionOptions} value={fields.session} onChange={update('session')} required error={getFieldError(validationErrors, 'session')} />
        </div>
        <SelectDropdown label="Course Interested In" options={ALL_COURSE_OPTIONS} value={fields.courseInterested} onChange={update('courseInterested')} required error={getFieldError(validationErrors, 'courseInterested')} />
        <SelectDropdown label="How did you hear about us?" options={HEAR_ABOUT_OPTIONS} value={fields.hearAboutUs} onChange={update('hearAboutUs')} />
        <TextareaField label="Additional Message (Optional)" placeholder="Any specific questions or requirements?" value={fields.message ?? ''} onChange={update('message')} rows={3} />
        <CheckboxField
          label={<>I agree to the <a href="#" style={{ color: 'var(--color-primary)' }}>Terms & Conditions</a> and consent to be contacted</>}
          checked={fields.agreeToPolicy}
          onChange={(e) => setFields((p) => ({ ...p, agreeToPolicy: e.target.checked }))}
          error={getFieldError(validationErrors, 'agreeToPolicy')}
        />
        <div style={{ marginTop: 'var(--space-5)' }}>
          <FormSubmitButton status={status as FormSubmitStatus} label="Submit Admission Enquiry" loadingLabel="Submitting..." />
        </div>
      </form>
      {status === 'success' && <SuccessToast type="success" title="Enquiry Submitted!" message="Our admissions team will contact you within 24 hours." onClose={() => setStatus('idle')} />}
      {status === 'error' && <SuccessToast type="error" title="Submission Failed" message="Please try again or call us directly." onClose={() => setStatus('idle')} />}
    </>
  )
}

export default AdmissionEnquiryForm