import type { CounselingProgram } from '../../types/counseling.types'
import { getCounselingImage } from '../../utils/asset-path-resolver'

export const counselingPrograms: CounselingProgram[] = [
  {
    id:          'd-pharma',
    slug:        'd-pharma',
    type:        'counseling',
    title:       'D. Pharma',
    fullTitle:   'Diploma in Pharmacy',
    duration:    '2 Years',
    eligibility: '10+2 with Physics, Chemistry & Biology/Mathematics — minimum 50%',
    description:
      'D. Pharma (Diploma in Pharmacy) is a two-year pharmacy diploma regulated by the Pharmacy Council of India. BBS Institute offers counseling guidance for students seeking admission to D. Pharma programmes at approved pharmacy institutes in Uttar Pradesh.',
    scope: [
      'Registration with State Pharmacy Council after passing both years',
      'Eligible to open a retail pharmacy or medical store',
      'Employment in hospital pharmacies, manufacturing, and QC labs',
      'Pathway to B. Pharma for further studies',
    ],
    keySubjects: [
      'Pharmaceutics', 'Pharmaceutical Chemistry',
      'Pharmacognosy', 'Pharmacology & Toxicology',
      'Biochemistry & Clinical Pathology', 'Hospital & Community Pharmacy',
    ],
    admissionProcess:
      'Admission through UP State Pharmacy Council counseling. BBS Institute provides complete guidance from form filling to seat allotment.',
    thumbnail:                getCounselingImage('counseling-d-pharma.webp'),
    externalCounselingBody:   'UP State Pharmacy Council / PCI',
    isActive:                 true,
  },

  {
    id:          'anm',
    slug:        'anm',
    type:        'counseling',
    title:       'ANM',
    fullTitle:   'Auxiliary Nurse Midwifery',
    duration:    '2 Years',
    eligibility: '10th Pass (High School) with minimum 45% marks',
    description:
      'ANM (Auxiliary Nurse Midwifery) is a two-year nursing programme that trains female candidates in basic nursing care, midwifery, and community health. BBS Institute counsels students for admission to ANM programmes at UP State Medical Faculty approved schools of nursing.',
    scope: [
      'Registration with Indian Nursing Council and State Nursing Council',
      'Employment in PHCs, CHCs, sub-health centres under NHM',
      'ASHA supervisor and ANM government posts',
      'Foundation for GNM nursing programme',
    ],
    keySubjects: [
      'Community Health Nursing', 'Primary Healthcare',
      'Midwifery & Obstetrical Nursing', 'Health Promotion',
      'Child Health Nursing', 'First Aid',
    ],
    admissionProcess:
      'Admission through UP State Medical Faculty counseling. BBS Institute assists with document verification, registration, and college allotment process.',
    thumbnail:                getCounselingImage('counseling-anm.webp'),
    externalCounselingBody:   'UP State Medical Faculty / UPSMF',
    isActive:                 true,
  },

  {
    id:          'gnm',
    slug:        'gnm',
    type:        'counseling',
    title:       'GNM',
    fullTitle:   'General Nursing & Midwifery',
    duration:    '3 Years + 6 Months Internship',
    eligibility: '10+2 with Science (PCB) — minimum 40%',
    description:
      'GNM (General Nursing & Midwifery) is a 3.5-year nursing programme recognised by the Indian Nursing Council. It covers general nursing, midwifery, and community health nursing. BBS Institute guides students through the UPSMF counseling process for admission to government and private nursing schools.',
    scope: [
      'Registered Nurse & Registered Midwife (RNRM) license',
      'Employment in government hospitals, private hospitals and nursing homes',
      'Abroad opportunities in UK, Australia, Gulf countries',
      'Eligibility for B.Sc Nursing (Post Basic) for career advancement',
    ],
    keySubjects: [
      'Anatomy & Physiology', 'Medical Surgical Nursing',
      'Obstetric & Gynaecological Nursing', 'Paediatric Nursing',
      'Mental Health Nursing', 'Community Health Nursing',
    ],
    admissionProcess:
      'Admission through UPSMF counseling. BBS Institute provides step-by-step guidance including UP counseling portal registration, document upload, choice filling and reporting.',
    thumbnail:                getCounselingImage('counseling-gnm.webp'),
    externalCounselingBody:   'UP State Medical Faculty / UPSMF',
    isActive:                 true,
  },

  {
    id:          'bsc-nursing',
    slug:        'bsc-nursing',
    type:        'counseling',
    title:       'BSc. Nursing',
    fullTitle:   'Bachelor of Science in Nursing',
    duration:    '4 Years',
    eligibility: '10+2 with PCB — minimum 45% marks, age 17–35 years',
    description:
      'BSc. Nursing is a four-year undergraduate nursing degree that is the gold standard nursing qualification in India. Graduates are eligible for nursing officer posts in AIIMS, ESIC, Railways, and all state governments. BBS Institute counsels students for NEET-qualified admission to nursing colleges across Uttar Pradesh.',
    scope: [
      'Nursing Officer posts in Central Government (AIIMS, ESIC, Railways)',
      'State Government Staff Nurse posts via UPSSSC',
      'International nursing opportunities (UK NMC, NCLEX for USA, IELTS for Australia)',
      'M.Sc Nursing and further academic career',
    ],
    keySubjects: [
      'Anatomy, Physiology & Microbiology', 'Nutrition & Biochemistry',
      'Medical-Surgical Nursing', 'Child Health & Paediatric Nursing',
      'Mental Health Nursing', 'Midwifery & Obstetric Nursing',
      'Community Health Nursing', 'Nursing Research',
    ],
    admissionProcess:
      'Admission through NEET score + UPSMF / state counseling. BBS Institute helps students with NEET registration, choice locking, document verification and college reporting formalities.',
    thumbnail:                getCounselingImage('counseling-bsc-nursing.webp'),
    externalCounselingBody:   'UP State Medical Faculty (UPSMF) / INC',
    isActive:                 true,
  },

  {
    id:          'bams',
    slug:        'bams',
    type:        'counseling',
    title:       'BAMS',
    fullTitle:   'Bachelor of Ayurvedic Medicine & Surgery',
    duration:    '5.5 Years (including 1 Year Internship)',
    eligibility: '10+2 with PCB — minimum 50%, NEET qualified',
    description:
      'BAMS (Bachelor of Ayurvedic Medicine & Surgery) is a five-and-a-half year undergraduate programme regulated by the Central Council of Indian Medicine (CCIM). Graduates are registered medical practitioners eligible to prescribe Ayurvedic medicines and perform minor surgeries. BBS Institute guides students through UP AYUSH counseling.',
    scope: [
      'Registered Ayurvedic Practitioner under CCIM',
      'Government Medical Officer posts in AYUSH departments',
      'Own Ayurvedic clinic or wellness centre',
      'MD (Ayu) specialisation for academic and clinical career',
      'Growing demand — National AYUSH Mission expansion',
    ],
    keySubjects: [
      'Padartha Vigyana & Ayurveda Itihas', 'Sanskrit & Samskrita',
      'Rachana Sharira (Anatomy)', 'Kriya Sharira (Physiology)',
      'Dravyaguna (Pharmacology)', 'Roga Nidana (Pathology)',
      'Kayachikitsa (Internal Medicine)', 'Shalya Tantra (Surgery)',
      'Prasuti & Streeroga', 'Agada Tantra (Toxicology)',
    ],
    admissionProcess:
      'Admission through NEET + UP AYUSH Admissions Counseling. BBS Institute provides end-to-end support including NEET application, UP counseling registration, document verification and college allocation.',
    thumbnail:                getCounselingImage('counseling-bams.webp'),
    externalCounselingBody:   'UP AYUSH Admissions / CCIM',
    isActive:                 true,
  },
]