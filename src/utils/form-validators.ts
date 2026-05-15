export {}
// ============================================================
// FORM VALIDATORS — manual field-level validation helpers
// Used by ContactForm, AdmissionForm, DiplomaEnquiryForm
// ============================================================

import type { FormValidationError } from '../types/form.types'

// ---- Individual field validators ----

export const validateRequired = (
  value: string,
  fieldLabel: string,
): string | null => {
  if (!value || !value.trim()) return `${fieldLabel} is required.`
  return null
}

export const validateMinLength = (
  value: string,
  min: number,
  fieldLabel: string,
): string | null => {
  if (value.trim().length < min)
    return `${fieldLabel} must be at least ${min} characters.`
  return null
}

export const validateMaxLength = (
  value: string,
  max: number,
  fieldLabel: string,
): string | null => {
  if (value.trim().length > max)
    return `${fieldLabel} must not exceed ${max} characters.`
  return null
}

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) return 'Email address is required.'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim()))
    return 'Please enter a valid email address.'
  return null
}

export const validatePhone = (phone: string): string | null => {
  if (!phone.trim()) return 'Phone number is required.'
  const phoneRegex = /^[6-9]\d{9}$/
  const cleaned    = phone.replace(/[\s\-+]/g, '')
  if (!phoneRegex.test(cleaned))
    return 'Please enter a valid 10-digit Indian mobile number.'
  return null
}

export const validatePercentage = (value: string): string | null => {
  if (!value.trim()) return 'Percentage is required.'
  const num = parseFloat(value)
  if (isNaN(num) || num < 0 || num > 100)
    return 'Please enter a valid percentage between 0 and 100.'
  return null
}

export const validateSelect = (
  value: string,
  fieldLabel: string,
): string | null => {
  if (!value || value === '')
    return `Please select a ${fieldLabel}.`
  return null
}

export const validateCheckbox = (
  checked: boolean,
  message: string,
): string | null => {
  if (!checked) return message
  return null
}

export const validateName = (name: string): string | null => {
  const required = validateRequired(name, 'Full name')
  if (required) return required
  const min = validateMinLength(name, 3, 'Full name')
  if (min) return min
  const nameRegex = /^[a-zA-Z\s.'-]+$/
  if (!nameRegex.test(name.trim()))
    return 'Name should only contain letters, spaces, or dots.'
  return null
}

// ---- Full form validators ----

export const validateContactForm = (
  fields: Record<string, string | boolean>,
): FormValidationError[] => {
  const errors: FormValidationError[] = []

  const name    = validateName(fields.fullName as string)
  const email   = validateEmail(fields.email as string)
  const phone   = validatePhone(fields.phone as string)
  const subject = validateRequired(fields.subject as string, 'Subject')
  const message = validateMinLength(fields.message as string, 20, 'Message')
  const policy  = validateCheckbox(
    fields.agreeToPolicy as boolean,
    'You must agree to the privacy policy.',
  )

  if (name)    errors.push({ field: 'fullName', message: name })
  if (email)   errors.push({ field: 'email',    message: email })
  if (phone)   errors.push({ field: 'phone',    message: phone })
  if (subject) errors.push({ field: 'subject',  message: subject })
  if (message) errors.push({ field: 'message',  message: message })
  if (policy)  errors.push({ field: 'agreeToPolicy', message: policy })

  return errors
}

export const validateAdmissionForm = (
  fields: Record<string, string | boolean>,
): FormValidationError[] => {
  const errors: FormValidationError[] = []

  const name       = validateName(fields.studentName as string)
  const email      = validateEmail(fields.email as string)
  const phone      = validatePhone(fields.phone as string)
  const dob        = validateRequired(fields.dateOfBirth as string, 'Date of birth')
  const gender     = validateSelect(fields.gender as string, 'gender')
  const address    = validateRequired(fields.address as string, 'Address')
  const city       = validateRequired(fields.city as string, 'City')
  const qual       = validateRequired(fields.qualification as string, 'Qualification')
  const percentage = validatePercentage(fields.percentage as string)
  const course     = validateSelect(fields.courseInterested as string, 'course')
  const session    = validateSelect(fields.session as string, 'session')
  const policy     = validateCheckbox(
    fields.agreeToPolicy as boolean,
    'You must agree to the terms.',
  )

  if (name)       errors.push({ field: 'studentName',      message: name })
  if (email)      errors.push({ field: 'email',            message: email })
  if (phone)      errors.push({ field: 'phone',            message: phone })
  if (dob)        errors.push({ field: 'dateOfBirth',      message: dob })
  if (gender)     errors.push({ field: 'gender',           message: gender })
  if (address)    errors.push({ field: 'address',          message: address })
  if (city)       errors.push({ field: 'city',             message: city })
  if (qual)       errors.push({ field: 'qualification',    message: qual })
  if (percentage) errors.push({ field: 'percentage',       message: percentage })
  if (course)     errors.push({ field: 'courseInterested', message: course })
  if (session)    errors.push({ field: 'session',          message: session })
  if (policy)     errors.push({ field: 'agreeToPolicy',    message: policy })

  return errors
}

export const validateDiplomaEnquiry = (
  fields: Record<string, string>,
): FormValidationError[] => {
  const errors: FormValidationError[] = []

  const name  = validateName(fields.name as string)
  const email = validateEmail(fields.email as string)
  const phone = validatePhone(fields.phone as string)

  if (name)  errors.push({ field: 'name',  message: name })
  if (email) errors.push({ field: 'email', message: email })
  if (phone) errors.push({ field: 'phone', message: phone })

  return errors
}

// ---- Helper — get error for a specific field ----
export const getFieldError = (
  errors: FormValidationError[],
  field: string,
): string | undefined =>
  errors.find((e) => e.field === field)?.message

// ---- Helper — check if form has any errors ----
export const hasErrors = (errors: FormValidationError[]): boolean =>
  errors.length > 0