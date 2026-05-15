export {}
// ============================================================
// FACULTY TYPES
// ============================================================

export type FacultyDepartment =
  | 'basic-science'
  | 'clinical'
  | 'administration'

export type Designation =
  | 'Professor'
  | 'Associate Professor'
  | 'Assistant Professor'
  | 'Lecturer'
  | 'Lab Technician'
  | 'Clinical Instructor'
  | 'Head of Department'
  | 'Principal'
  | 'Vice Principal'
  | 'Director'
  | 'Registrar'
  | 'Librarian'
  | 'Accountant'
  | 'Placement Officer'

export interface Qualification {
  degree: string
  specialization?: string
  institution: string
  year: number
}

export interface FacultyMember {
  id: string
  name: string
  designation: Designation
  department: FacultyDepartment
  subjectsTaught: string[]
  qualifications: Qualification[]
  experience: number
  photo: string
  email?: string
  bio: string
  isHOD: boolean
  isActive: boolean
  joinedYear: number
}

export interface AdminStaffMember {
  id: string
  name: string
  designation: Designation
  department: 'administration'
  photo: string
  email?: string
  phone?: string
  isActive: boolean
}