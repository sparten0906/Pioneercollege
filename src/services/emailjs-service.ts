import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../constants/emailjs.constants'
import type {
  ContactFormFields,
  AdmissionFormFields,
  DiplomaEnquiryFields,
  AlumniRegistrationFields,
} from '../types/form.types'

// Initialise EmailJS once — call this in main.tsx before rendering
export const initEmailJS = (): void => {
  emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY })
}

// ---- Contact Form ----
export const sendContactForm = async (
  fields: ContactFormFields,
): Promise<void> => {
  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_CONTACT,
    {
      from_name:    fields.fullName,
      from_email:   fields.email,
      phone:        fields.phone,
      subject:      fields.subject,
      message:      fields.message,
    },
  )
}

// ---- Admission Enquiry Form ----
export const sendAdmissionEnquiry = async (
  fields: AdmissionFormFields,
): Promise<void> => {
  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ADMISSION,
    {
      student_name:       fields.studentName,
      email:              fields.email,
      phone:              fields.phone,
      dob:                fields.dateOfBirth,
      gender:             fields.gender,
      address:            `${fields.address}, ${fields.city}, ${fields.state}`,
      qualification:      fields.qualification,
      percentage:         fields.percentage,
      course_interested:  fields.courseInterested,
      session:            fields.session,
      hear_about_us:      fields.hearAboutUs,
      message:            fields.message ?? '',
    },
  )
}

// ---- Diploma Enquiry (inline form on course detail page) ----
export const sendDiplomaEnquiry = async (
  fields: DiplomaEnquiryFields,
): Promise<void> => {
  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_DIPLOMA_ENQ,
    {
      from_name:    fields.name,
      from_email:   fields.email,
      phone:        fields.phone,
      course_title: fields.courseTitle,
      message:      fields.message ?? 'No additional message.',
    },
  )
}

// ---- Alumni Registration Form ----
export const sendAlumniRegistration = async (
  fields: AlumniRegistrationFields,
): Promise<void> => {
  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ALUMNI,
    {
      full_name:            fields.fullName,
      email:                fields.email,
      phone:                fields.phone,
      course_completed:     fields.courseCompleted,
      pass_out_year:        fields.passOutYear,
      current_organisation: fields.currentOrganization ?? 'Not provided',
      current_designation:  fields.currentDesignation  ?? 'Not provided',
      city:                 fields.city,
      message:              fields.message ?? '',
    },
  )
}