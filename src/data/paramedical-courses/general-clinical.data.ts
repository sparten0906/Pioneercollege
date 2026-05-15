import type { DiplomaData } from '../../types/diploma.types'
import { getCourseImage } from '../../utils/asset-path-resolver'

export const generalClinicalCourses: DiplomaData[] = [
  {
    id:             'cms-014',
    slug:           'diploma-in-cms-and-ed',
    type:           'regular',
    category:       'general-clinical',
    title:          'Diploma in CMS & ED',
    shortTitle:     'D. CMS & ED',
    duration:       '2 Years',
    durationMonths: 24,
    totalSeats:     60,
    eligibility:    '10+2 with Science (PCB) from a recognised board',
    minPercentage:  45,
    description:
      'The Diploma in Community Medical Service & Essential Drugs (CMS & ED) is a two-year programme that trains students to provide primary healthcare services in rural and semi-urban areas. Graduates are equipped to manage common illnesses, conduct first aid, administer essential drugs, and run community health camps.',
    highlights: [
      'Comprehensive training in primary healthcare and first aid',
      'Essential drug management and rational use of medicines',
      'Vaccination and immunisation programme management',
      'Maternal and child health care basics',
      'Ideal for rural health service — government scheme empanelment possible',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Human Anatomy & Physiology',
          'Pharmacology — Essential Drugs',
          'Preventive & Community Medicine',
          'First Aid & Emergency Care',
          'Primary Health Care Concepts',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Medicine — Common Diseases Management',
          'Maternal & Child Health',
          'Immunisation & Vaccination',
          'Nutrition & Health',
          'Health Records & Documentation',
        ],
      },
      {
        semester: 3,
        subjects: [
          'Surgery Basics — Wound Care & Dressings',
          'Minor Surgical Procedures Assistance',
          'Communicable Disease Control',
          'Mental Health Basics',
          'Community Health Camp Organisation',
        ],
      },
      {
        semester: 4,
        subjects: [
          'Geriatric Care',
          'Health Promotion & Education',
          'Drug Store Management',
          'Clinical Internship',
          'Project & Viva',
        ],
      },
    ],
    fees: {
      admissionFee:       8000,
      tuitionFeePerYear:  32000,
      examFeePerYear:     4000,
      totalFee:           80000,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'Community Health Worker',      sector: 'government', description: 'Provide primary healthcare in rural areas' },
      { role: 'Clinical Assistant',           sector: 'private',    description: 'Work in nursing homes and clinics' },
      { role: 'Health Camp Coordinator',      sector: 'both',       description: 'Organise and manage community health camps' },
      { role: 'Drug Store Manager',           sector: 'private',    description: 'Manage pharmacy and drug store operations' },
    ],
    thumbnail:    getCourseImage('diploma-cms-ed.webp'),
    isFeatured:   true,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'UP Paramedical Council'],
  },

  {
    id:             'critical-care-015',
    slug:           'diploma-in-critical-care-technician',
    type:           'regular',
    category:       'general-clinical',
    title:          'Diploma in Critical Care Technician',
    shortTitle:     'D. Critical Care Tech.',
    duration:       '1 Year',
    durationMonths: 12,
    totalSeats:     30,
    eligibility:    '10+2 with Science (PCB) from a recognised board',
    minPercentage:  45,
    description:
      'The Diploma in Critical Care Technician trains students to assist intensivists and critical care nurses in Intensive Care Units (ICU) and Emergency Departments. Students learn ventilator management, haemodynamic monitoring, central line care, and life support skills.',
    highlights: [
      'Ventilator modes and weaning protocol basics',
      'Haemodynamic monitoring — arterial lines, CVP, Swan-Ganz',
      'Basic Life Support (BLS) and Advanced Life Support (ALS) certified training',
      'ICU infection control and care bundles',
      'Highest-intensity paramedical role with excellent pay in private ICUs',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Anatomy & Physiology — Cardiorespiratory System',
          'Principles of Critical Care',
          'Mechanical Ventilation Basics',
          'Haemodynamic Monitoring',
          'ICU Equipment — Monitors, Pumps, Ventilators',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Advanced Ventilator Management',
          'Sepsis & Multiorgan Failure Care',
          'BLS & ALS Certification Training',
          'Neurological Monitoring in ICU',
          'Clinical Internship — ICU Posting',
        ],
      },
    ],
    fees: {
      admissionFee:       10000,
      tuitionFeePerYear:  42000,
      examFeePerYear:     4500,
      totalFee:           56500,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'ICU Technician',             sector: 'private', description: 'Assist in ICU patient care and equipment management' },
      { role: 'Ventilator Technician',      sector: 'both',    description: 'Manage mechanical ventilators in critical care' },
      { role: 'Emergency Care Technician',  sector: 'private', description: 'Work in emergency departments of hospitals' },
      { role: 'Cardiac Monitor Technician', sector: 'both',    description: 'Operate and interpret cardiac monitors in ICU' },
    ],
    thumbnail:    getCourseImage('diploma-critical-care.webp'),
    isFeatured:   true,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'UP Paramedical Council'],
  },

  {
    id:             'medical-asst-016',
    slug:           'diploma-in-medical-assistant',
    type:           'regular',
    category:       'general-clinical',
    title:          'Diploma in Medical Assistant',
    shortTitle:     'D. Medical Asst.',
    duration:       '2 Year',
    durationMonths: 24,
    totalSeats:     50,
    eligibility:    '10+2 from a recognised board',
    minPercentage:  40,
    description:
      'The Diploma in Medical Assistant is a one-year broad-based programme covering clinical, administrative, and patient care skills. Graduates can assist doctors in OPDs, manage patient records, conduct basic diagnostic tests, administer injections, and provide first aid — making them immediately employable in clinics and hospitals.',
    highlights: [
      'Injection techniques — IV, IM, SC administration',
      'Vital signs monitoring — BP, temperature, pulse, SPO2',
      'Basic wound dressing and catheterisation assistance',
      'Medical record management and prescription handling',
      'Ideal first step into healthcare for non-science students',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Anatomy & Physiology — Basics',
          'First Aid & Emergency Procedures',
          'Vital Signs Monitoring',
          'Basic Nursing Procedures',
          'Medical Terminology & Documentation',
        ],
      },
      {
        semester: 2,
        subjects: [
          'Injection & IV Fluid Administration',
          'Basic Laboratory Procedures',
          'OPD Management & Patient Care',
          'Infection Control & Sterilisation',
          'Clinical Internship',
        ],
      },{
        semester: 3,
        subjects: [
          'Wound Care & Dressing',
          'Catheterisation Assistance',
          'Medical Record Keeping',
          'Patient Communication Skills',
          'Project & Viva',
        ],
      },
      {
        semester: 4,
        subjects: [
          'Geriatric Care Basics',
          'Health Promotion & Education',
          'Pharmacy Assistance',
          'Clinical Internship — Hospital Posting',
          'Project & Viva',
        ]
      }

    ],
    fees: {
      admissionFee:       6000,
      tuitionFeePerYear:  25000,
      examFeePerYear:     3000,
      totalFee:           34000,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'Medical Assistant',       sector: 'both',    description: 'Assist doctors in OPD and clinical settings' },
      { role: 'Clinic Coordinator',      sector: 'private', description: 'Manage patient flow and records in private clinics' },
      { role: 'First Aider',             sector: 'both',    description: 'Provide emergency first aid in industrial or clinical settings' },
      { role: 'Home Care Assistant',     sector: 'private', description: 'Provide patient care in home healthcare settings' },
    ],
    thumbnail:    getCourseImage('diploma-medical-assistant.webp'),
    isFeatured:   false,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'UP Paramedical Council'],
  },
]