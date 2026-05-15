export {}
// ============================================================
// FORM TYPES — all EmailJS form payloads
// ============================================================

export interface ContactFormFields {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
  agreeToPolicy: boolean
}

export interface AdmissionFormFields {
  studentName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  address: string
  city: string
  state: string
  qualification: string
  percentage: string
  courseInterested: string
  session: string
  hearAboutUs: string
  message?: string
  agreeToPolicy: boolean
}

export interface DiplomaEnquiryFields {
  name: string
  email: string
  phone: string
  courseTitle: string
  message?: string
}

export interface AlumniRegistrationFields {
  fullName: string
  email: string
  phone: string
  courseCompleted: string
  passOutYear: string
  currentOrganization?: string
  currentDesignation?: string
  city: string
  message?: string
}

export interface FormValidationError {
  field: string
  message: string
}

export type FormSubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface EmailJSPayload {
  service_id: string
  template_id: string
  user_id: string
  template_params: Record<string, string>
}