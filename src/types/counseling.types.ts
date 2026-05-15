export {}
// ============================================================
// COUNSELING COURSE TYPES — 5 counseling programs
// ============================================================

export type CounselingCourseId =
  | 'd-pharma'
  | 'anm'
  | 'gnm'
  | 'bsc-nursing'
  | 'bams'

export interface CounselingInstitute {
  name: string
  location: string
  affiliation: string
}

export interface CounselingProgram {
  id: CounselingCourseId
  slug: string
  type: 'counseling'
  title: string
  fullTitle: string
  duration: string
  eligibility: string
  description: string
  scope: string[]
  keySubjects: string[]
  admissionProcess: string
  thumbnail: string
  affiliatedInstitutes?: CounselingInstitute[]
  isActive: boolean
  externalCounselingBody: string
}