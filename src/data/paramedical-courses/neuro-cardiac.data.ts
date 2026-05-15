import type { DiplomaData } from '../../types/diploma.types'
import { getCourseImage } from '../../utils/asset-path-resolver'

export const neuroCardiacCourses: DiplomaData[] = [
  {
    id:             'neuro-011',
    slug:           'diploma-in-clinical-neuro-technology',
    type:           'regular',
    category:       'neuro-cardiac',
    title:          'Diploma in Clinical Neuro Technology',
    shortTitle:     'D. Neuro Tech.',
    duration:       '1 Year',
    durationMonths: 12,
    totalSeats:     30,
    eligibility:    '10+2 with Science (PCB) from a recognised board',
    minPercentage:  45,
    description:
      'The Diploma in Clinical Neuro Technology trains students to perform and assist in neurodiagnostic procedures — including Electroencephalography (EEG), Electromyography (EMG), Nerve Conduction Studies (NCS), and Evoked Potentials. Graduates work alongside neurologists in neurology departments.',
    highlights: [
      'EEG electrode placement using 10-20 international system',
      'EMG and NCS technique training',
      'Visual, Auditory and Somatosensory Evoked Potentials',
      'Polysomnography (sleep study) basics',
      'Highly specialised — limited competition and good pay scale',
    ],
    syllabus: [
      {
        semester: 1,
        subjects: [
          'Neuroanatomy & Neurophysiology',
          'EEG — Principles & Equipment',
          'Electrode Placement — 10-20 System',
          'Normal & Abnormal EEG Patterns',
          'Patient Preparation & Safety',
        ],
      },
      {
        semester: 2,
        subjects: [
          'EMG & Nerve Conduction Studies',
          'Evoked Potentials — VEP, BAEP, SSEP',
          'Polysomnography Basics',
          'Intraoperative Neurophysiology Monitoring',
          'Clinical Internship in Neurology Dept.',
        ],
      },
    ],
    fees: {
      admissionFee:       8000,
      tuitionFeePerYear:  38000,
      examFeePerYear:     4000,
      totalFee:           50000,
      currency:           'INR',
    },
    careerOpportunities: [
      { role: 'EEG Technician',              sector: 'both',    description: 'Record and maintain EEG studies in neurology units' },
      { role: 'EMG/NCS Technician',          sector: 'private', description: 'Perform nerve conduction and muscle studies' },
      { role: 'Neurodiagnostic Technologist',sector: 'both',    description: 'Work in neurodiagnostics labs of major hospitals' },
      { role: 'Sleep Lab Technician',        sector: 'private', description: 'Conduct polysomnography studies in sleep clinics' },
    ],
    thumbnail:    getCourseImage('diploma-neuro-tech.webp'),
    isFeatured:   false,
    isActive:     true,
    affiliation:  'UP Paramedical Council, Lucknow',
    recognizedBy: ['Ministry of Health & Family Welfare', 'UP Paramedical Council'],
  },
]