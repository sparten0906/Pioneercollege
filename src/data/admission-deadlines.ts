export interface AdmissionDate {
  id:          string
  event:       string
  date:        string
  description: string
  isImportant: boolean
}

export interface EligibilityCriteria {
  courseGroup:  string
  courses:      string[]
  qualification:string
  minMarks:     string
  ageLimit:     string
  subjects:     string
}

export const admissionDates: AdmissionDate[] = [
  { id: 'date-001', event: 'Admission form available',       date: '2025-04-01', description: 'Admission forms for session 2025–26 available at institute office and website.',         isImportant: true },
  { id: 'date-002', event: 'Last date — form submission',    date: '2025-07-15', description: 'Last date for submission of filled admission forms with all required documents.',          isImportant: true },
  { id: 'date-003', event: 'Merit list — 1st list',          date: '2025-07-22', description: 'First merit list published on notice board and institute website.',                       isImportant: true },
  { id: 'date-004', event: 'Fee payment — 1st list',         date: '2025-07-25', description: 'Students in 1st merit list to deposit fees and confirm admission.',                       isImportant: true },
  { id: 'date-005', event: 'Merit list — 2nd list',          date: '2025-07-29', description: 'Second merit list for remaining vacant seats after 1st list confirmation.',               isImportant: false },
  { id: 'date-006', event: 'Classes commence',               date: '2025-08-01', description: 'Orientation and commencement of classes for session 2025–26.',                            isImportant: true },
  { id: 'date-007', event: 'Last date — direct admission',   date: '2025-08-15', description: 'Last date for direct admission to any remaining vacant seats.',                           isImportant: false },
]

export const eligibilityCriteriaList: EligibilityCriteria[] = [
  {
    courseGroup:   'All 2-Year Diploma Programmes',
    courses:       ['D. MLT', 'D. Radiography', 'D. Optometry & CL', 'D. Dental Hygiene', 'D. CMS & ED'],
    qualification: '10+2 (Intermediate) from a recognised board',
    minMarks:      '45% aggregate in qualifying examination',
    ageLimit:      '17 to 30 years as on 1 August 2025',
    subjects:      'Science stream preferred (PCB/PCM); some courses accept any stream',
  },
  {
    courseGroup:   'All 1-Year Diploma Programmes',
    courses:       ['D. Dialysis', 'D. MRI Tech', 'D. CT Tech', 'D. Cath Lab', 'D. Neuro Tech', 'D. Ophthalmic', 'D. Ortho Tech', 'D. Critical Care', 'D. X-Ray & ECG'],
    qualification: '10+2 (Intermediate) from a recognised board',
    minMarks:      '40% to 45% aggregate (varies by course)',
    ageLimit:      '17 to 30 years as on 1 August 2025',
    subjects:      'Science stream preferred; non-science accepted for Ortho Tech and Medical Assistant',
  },
  {
    courseGroup:   'Diploma in Medical Assistant',
    courses:       ['D. Medical Assistant'],
    qualification: '10+2 (Intermediate) from any stream',
    minMarks:      '40% aggregate',
    ageLimit:      '17 to 30 years as on 1 August 2025',
    subjects:      'Any stream — Science, Commerce, Arts',
  },
]

export const requiredDocuments: string[] = [
  '10th (High School) Marksheet and Certificate — original and 2 self-attested photocopies',
  '12th (Intermediate) Marksheet and Certificate — original and 2 self-attested photocopies',
  '4 recent passport-size photographs (white background)',
  'Aadhaar Card — original and 2 photocopies',
  'Caste Certificate (SC/ST/OBC candidates) — issued by competent authority',
  'Income Certificate (for scholarship eligibility)',
  'Transfer Certificate from last attended institution',
  'Migration Certificate (if from a board other than UP Board)',
  'Character Certificate from last institution',
  'Domicile Certificate (UP candidates)',
  'Medical fitness certificate from a registered medical practitioner',
]