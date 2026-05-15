import { useState, useCallback } from 'react'
import type { FormSubmitStatus } from '../types/form.types'
import type {
  ContactFormFields,
  AdmissionFormFields,
  DiplomaEnquiryFields,
  AlumniRegistrationFields,
} from '../types/form.types'
import {
  sendContactForm,
  sendAdmissionEnquiry,
  sendDiplomaEnquiry,
  sendAlumniRegistration,
} from '../services/emailjs-service'
import { trackFormSubmit, trackFormError } from '../services/analytics-service'

type FormType = 'contact' | 'admission' | 'diploma' | 'alumni'

type FormPayload =
  | ContactFormFields
  | AdmissionFormFields
  | DiplomaEnquiryFields
  | AlumniRegistrationFields

interface UseEmailSubmitReturn {
  status:    FormSubmitStatus
  submit:    (formType: FormType, payload: FormPayload) => Promise<void>
  setStatus: React.Dispatch<React.SetStateAction<FormSubmitStatus>>
  reset:     () => void
}

/**
 * Handles EmailJS form submission with status tracking.
 * Shared by all 4 form components so they don't
 * repeat try/catch and status management logic.
 *
 * Usage:
 *   const { status, submit, setStatus } = useEmailSubmit()
 *   await submit('contact', formFields)
 *   // status is 'success' or 'error' after submission
 */
export const useEmailSubmit = (): UseEmailSubmitReturn => {
  const [status, setStatus] = useState<FormSubmitStatus>('idle')

  const submit = useCallback(
    async (formType: FormType, payload: FormPayload): Promise<void> => {
      setStatus('submitting')

      try {
        switch (formType) {
          case 'contact':
            await sendContactForm(payload as ContactFormFields)
            break
          case 'admission':
            await sendAdmissionEnquiry(payload as AdmissionFormFields)
            break
          case 'diploma':
            await sendDiplomaEnquiry(payload as DiplomaEnquiryFields)
            break
          case 'alumni':
            await sendAlumniRegistration(payload as AlumniRegistrationFields)
            break
        }

        setStatus('success')
        trackFormSubmit(formType)
      } catch (err) {
        console.error(`[useEmailSubmit] ${formType} form failed:`, err)
        setStatus('error')
        trackFormError(formType, 'emailjs_send_failed')
      }
    },
    [],
  )

  const reset = useCallback(() => setStatus('idle'), [])

  return { status, submit, setStatus, reset }
}