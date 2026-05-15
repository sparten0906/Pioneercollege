// ============================================================
// DIPLOMA COURSE TYPES — 16 paramedical diploma courses
// ============================================================

export type DiplomaCategory =
  | 'lab-technology'
  | 'imaging'
  | 'ophthalmic'
  | 'neuro-cardiac'
  | 'dental-ortho'
  | 'general-clinical'

export type CourseType = 'regular' | 'counseling'

export interface SemesterSyllabus {
  semester: number
  subjects: string[]
}

export interface CareerOpportunity {
  role: string
  sector: 'government' | 'private' | 'both'
  description: string
}

export interface FeeDetails {
  admissionFee: number
  tuitionFeePerYear: number
  examFeePerYear: number
  totalFee: number
  currency: 'INR'
}

export interface DiplomaData {
  id: string
  slug: string
  type: Extract<CourseType, 'regular'>
  category: DiplomaCategory
  title: string
  shortTitle: string
  duration: string
  durationMonths: number
  totalSeats: number
  eligibility: string
  minPercentage: number
  description: string
  highlights: string[]
  syllabus: SemesterSyllabus[]
  fees: FeeDetails
  careerOpportunities: CareerOpportunity[]
  thumbnail: string
  isFeatured: boolean
  isActive: boolean
  affiliation: string
  recognizedBy: string[]
}