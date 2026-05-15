import type { DiplomaData } from '../../types/diploma.types'
import { getCourseImage } from '../../utils/asset-path-resolver'

export const dentalOrthoCourses: DiplomaData[] = [
  {
    id:             'dental-012',
    slug:           'diploma-in-dental-hygiene',
    type:           'regular',
    category:       'dental-ortho',
    title:          'Diploma in Dental Hygiene',
    shortTitle:     'D. Dental Hygiene',
    duration:       '2 Years',
    durationMonths: 24,
    totalSeats:     40,
    eligibility:    '10+2 with Science (PCB) from a recognised board',
    minPercentage:  45,
    description:
      'The Diploma in Dental Hygiene trains students in preventive dental care, oral health promotion, scaling and polishing, dental X-rays, and chairside assistance to dentists. Graduates work as dental hygienists in dental clinics, hospitals, and community dental health programmes.',
    highlights: [
      'Clinical training in scaling, root planing and polishing',
      'Dental radiography — periapical, bitewing and panoramic X-rays',
      'Fluoride application and fissure sealant techniques',
      'Oral health education and community outreach',
      'Government jobs in PHCs and District Hospitals',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Dental Anatomy & Oral Histology',
          'Oral Physiology & Nutrition',
          'Preventive Dentistry',
          'Dental Radiology — Basics',
          'Sterilisation & Infection Control in Dentistry',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Dental Materials Science',
          'Scaling & Root Planing Techniques',
          'Oral Pathology — Common Conditions',
          'Fluoride Therapy & Pit & Fissure Sealants',
          'Dental Radiology — Practical',
        ],
      },
      {
        semester: 3,
        subjects: [
          'Periodontology',
          'Paediatric Dental Hygiene',
          'Pharmacology for Dental Hygienists',
          'Community Dental Health',
          'Chairside Assistance — Practical',
        ],
      },
      {
        semester: 4,
        subjects: [
          'Special Needs Dentistry',
          'Oral Health Promotion',
          'Dental Practice Management',
          'Clinical Internship',
          'Research Project & Viva',
        ],
      },
    ],
    fees: {
      admissionFee:       8000,
      tuitionFeePerYear:  34000,
      examFeePerYear:     4000,
      totalFee:           84000,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'Dental Hygienist',           sector: 'both',       description: 'Provide preventive dental care and oral hygiene instruction' },
      { role: 'Dental Assistant',           sector: 'private',    description: 'Assist dentists during procedures' },
      { role: 'Community Dental Educator',  sector: 'government', description: 'Conduct oral health awareness programmes' },
      { role: 'School Dental Health Worker',sector: 'government', description: 'Implement school dental health programmes' },
    ],
    thumbnail:    getCourseImage('diploma-dental-hygiene.webp'),
    isFeatured:   false,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'Dental Council of India', 'UP Paramedical Council'],
  },

  {
    id:             'ortho-013',
    slug:           'diploma-in-ortho-technician',
    type:           'regular',
    category:       'dental-ortho',
    title:          'Diploma in Ortho Technician',
    shortTitle:     'D. Ortho Tech.',
    duration:       '1 Year',
    durationMonths: 12,
    totalSeats:     30,
    eligibility:    '10+2 from a recognised board',
    minPercentage:  40,
    description:
      'The Diploma in Ortho Technician (Orthopaedic Technician) trains students in the fabrication, fitting, and repair of orthopaedic appliances — plaster of paris casts, splints, traction devices, and basic prosthetics. Graduates assist orthopaedic surgeons in OPDs, emergency departments, and operation theatres.',
    highlights: [
      'Plaster cast application and removal techniques',
      'Splint fabrication and fitting',
      'Traction setup and maintenance',
      'Pre and post-operative orthopaedic care',
      'High demand in orthopaedic hospitals and trauma centres',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Musculoskeletal Anatomy',
          'Principles of Orthopaedic Technology',
          'Plaster of Paris Techniques',
          'Splinting & Bandaging',
          'Orthopaedic Instruments & Equipment',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Traction & External Fixation',
          'Post-operative Orthopaedic Care',
          'Basic Prosthetics & Orthotics',
          'Rehabilitation — Introduction',
          'Clinical Internship in Orthopaedic Dept.',
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
      { role: 'Orthopaedic Technician', sector: 'both',    description: 'Apply casts, splints and traction in orthopaedic units' },
      { role: 'Trauma Care Technician', sector: 'private', description: 'Work in trauma and emergency orthopaedic departments' },
      { role: 'Prosthetics Assistant',  sector: 'both',    description: 'Support prosthetics and orthotics fitment centres' },
    ],
    thumbnail:    getCourseImage('diploma-ortho-tech.webp'),
    isFeatured:   false,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'UP Paramedical Council'],
  },
]