import type { AdminStaffMember } from '../../types/faculty.types'
import { getFacultyImage } from '../../utils/asset-path-resolver'

export const administrativeStaff: AdminStaffMember[] = [
  {
    id:          'staff-001',
    name:        'Mr. Hemant Lal Gupta',
    designation: 'Registrar',
    department:  'administration',
    photo:       getFacultyImage('faculty-admin-dept', 'staff-registrar.webp'),
    email:       'registrar@bbsinstitute.ac.in',
    phone:       '+91-XXXXXXXXXX',
    isActive:    true,
  },
  {
    id:          'staff-002',
    name:        'Ms. Rekha Tripathi',
    designation: 'Librarian',
    department:  'administration',
    photo:       getFacultyImage('faculty-admin-dept', 'staff-librarian.webp'),
    email:       'library@bbsinstitute.ac.in',
    isActive:    true,
  },
  {
    id:          'staff-003',
    name:        'Mr. Santosh Kumar Verma',
    designation: 'Accountant',
    department:  'administration',
    photo:       getFacultyImage('faculty-admin-dept', 'staff-accountant.webp'),
    email:       'accounts@bbsinstitute.ac.in',
    isActive:    true,
  },
  {
    id:          'staff-004',
    name:        'Ms. Priyanka Singh',
    designation: 'Placement Officer',
    department:  'administration',
    photo:       getFacultyImage('faculty-admin-dept', 'staff-placement-officer.webp'),
    email:       'placements@bbsinstitute.ac.in',
    phone:       '+91-XXXXXXXXXX',
    isActive:    true,
  },
]