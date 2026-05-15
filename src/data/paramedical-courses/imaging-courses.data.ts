import type { DiplomaData } from '../../types/diploma.types'
import { getCourseImage } from '../../utils/asset-path-resolver'

export const imagingCourses: DiplomaData[] = [
  {
    id:             'radiography-006',
    slug:           'diploma-in-medical-radiography',
    type:           'regular',
    category:       'imaging',
    title:          'Diploma in Medical Radiography',
    shortTitle:     'D. Radiography',
    duration:       '2 Years',
    durationMonths: 24,
    totalSeats:     40,
    eligibility:    '10+2 with Science (PCB/PCM) from a recognised board',
    minPercentage:  45,
    description:
      'The Diploma in Medical Radiography is a two-year programme that trains students in the production of diagnostic X-ray images for clinical use. Students master patient positioning, exposure technique, darkroom and digital processing, and radiation protection to work as radiographers in hospitals and imaging centres.',
    highlights: [
      'Training on analogue and digital radiography systems (CR & DR)',
      'Radiation protection — AERB guidelines compliance',
      'Positioning techniques for all body regions',
      'Clinical internship in radiology departments',
      'Government jobs available via UPSSSC and NHM recruitment',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Human Anatomy & Physiology',
          'Principles of Radiographic Exposure',
          'Radiographic Equipment & Accessories',
          'Radiation Biology & Protection',
          'Darkroom Techniques & Processing',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Radiographic Positioning — Chest & Abdomen',
          'Radiographic Positioning — Skeletal System',
          'Contrast Media Studies',
          'Paediatric Radiography',
          'Practical — Positioning Lab I',
        ],
      },
      {
        semester: 3,
        subjects: [
          'Digital Radiography Systems (CR & DR)',
          'Mammography Basics',
          'Fluoroscopy & Special Procedures',
          'Radiographic Image Quality',
          'Practical — Positioning Lab II',
        ],
      },
      {
        semester: 4,
        subjects: [
          'Computed Radiography Interpretation',
          'Dental Radiography',
          'Hospital Infection Control',
          'Clinical Internship',
          'Research Project & Viva',
        ],
      },
    ],
    fees: {
      admissionFee:       8000,
      tuitionFeePerYear:  35000,
      examFeePerYear:     4000,
      totalFee:           86000,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'Radiographer',              sector: 'both',       description: 'Produce X-ray images in hospital radiology departments' },
      { role: 'Radiographic Technologist', sector: 'government', description: 'Work in government hospitals via UPSSSC recruitment' },
      { role: 'Imaging Centre Technician', sector: 'private',    description: 'Operate standalone diagnostic imaging centres' },
      { role: 'Dental Radiographer',       sector: 'private',    description: 'Perform dental X-rays in dental clinics' },
    ],
    thumbnail:    getCourseImage('diploma-radiography.webp'),
    isFeatured:   true,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'AERB', 'UP Paramedical Council'],
  },

  {
    id:             'xray-ecg-007',
    slug:           'diploma-in-x-ray-and-ecg-technician',
    type:           'regular',
    category:       'imaging',
    title:          'Diploma in X-Ray and ECG Technician',
    shortTitle:     'D. X-Ray & ECG',
    duration:       '1 Year',
    durationMonths: 12,
    totalSeats:     50,
    eligibility:    '10+2 with Science from a recognised board',
    minPercentage:  40,
    description:
      'This combined one-year diploma covers both X-ray radiography and electrocardiography, making graduates highly versatile for small hospitals, nursing homes, and community health centres where a single technician needs to perform both diagnostic imaging and cardiac screening functions.',
    highlights: [
      'Dual skill — X-Ray operation and ECG recording',
      'Highly demanded in nursing homes and community hospitals',
      'Training in 12-lead ECG interpretation basics',
      'Portable X-ray and bedside ECG techniques',
      'Quickly employable after one-year course',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Anatomy & Physiology — Chest & Heart',
          'Principles of X-Ray Production',
          'Radiation Safety & Protection',
          'Basic Radiographic Positioning',
          'ECG — Basics & Lead Placement',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Digital X-Ray Operation',
          '12-Lead ECG Recording & Artefact Recognition',
          'Holter & Stress ECG Basics',
          'Patient Communication & Care',
          'Clinical Internship',
        ],
      },
    ],
    fees: {
      admissionFee:       6000,
      tuitionFeePerYear:  28000,
      examFeePerYear:     3500,
      totalFee:           37500,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'X-Ray & ECG Technician', sector: 'both',    description: 'Dual-role technician in hospitals and clinics' },
      { role: 'Cardiac Technician',     sector: 'private', description: 'Perform ECG and basic cardiac diagnostics' },
      { role: 'Radiography Assistant',  sector: 'both',    description: 'Assist in radiology departments' },
    ],
    thumbnail:    getCourseImage('diploma-xray-ecg.webp'),
    isFeatured:   true,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'UP Paramedical Council'],
  },
]