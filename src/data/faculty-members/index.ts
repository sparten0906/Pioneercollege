import { basicScienceFaculty }  from './basic-science.faculty'
import { clinicalFaculty }       from './clinical-dept.faculty'
import { administrativeStaff }  from './administrative.staff'
import type { FacultyMember }   from '../../types/faculty.types'
import type { FacultyDepartment } from '../../types/faculty.types'

export const ALL_FACULTY: FacultyMember[] = [
  ...basicScienceFaculty,
  ...clinicalFaculty,
]

export { basicScienceFaculty, clinicalFaculty, administrativeStaff }

export const getFacultyByDept = (dept: FacultyDepartment): FacultyMember[] =>
  ALL_FACULTY.filter((f) => f.department === dept && f.isActive)

export const getHODs = (): FacultyMember[] =>
  ALL_FACULTY.filter((f) => f.isHOD && f.isActive)