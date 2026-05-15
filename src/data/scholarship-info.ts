export interface ScholarshipInfo {
  id:            string
  name:          string
  offeredBy:     'government' | 'institute' | 'external'
  eligibility:   string[]
  amount:        string
  applicationProcess: string
  deadline?:     string
  website?:      string
}

export const scholarships: ScholarshipInfo[] = [
  {
    id:          'sch-001',
    name:        'UP Post-Matric Scholarship (SC/ST/OBC/General-EWS)',
    offeredBy:   'government',
    eligibility: [
      'Must be domiciled in Uttar Pradesh',
      'Annual family income below ₹2 lakh (General-EWS/OBC) or ₹2.5 lakh (SC/ST)',
      'Must be enrolled in an approved institute',
      'Must not be availing any other government scholarship simultaneously',
    ],
    amount:              'Tuition fee reimbursement + maintenance allowance (as per UP Govt. norms)',
    applicationProcess:  'Apply online at scholarship.up.gov.in. Institute registration number required. Institute will verify the application.',
    deadline:            '2025-10-31',
    website:             'https://scholarship.up.gov.in',
  },
  {
    id:          'sch-002',
    name:        'BBS Institute Merit Scholarship',
    offeredBy:   'institute',
    eligibility: [
      'Must be a current student of BBS Institute',
      'Must rank in Top 3 in UP Paramedical Council semester/annual examinations',
      'Must have at least 85% attendance in the previous academic year',
    ],
    amount:              '50% fee waiver for the subsequent year (awarded annually)',
    applicationProcess:  'No application required. Awarded automatically to qualifying students based on UP Paramedical Council results. Announced at Annual Day.',
  },
  {
    id:          'sch-003',
    name:        'National Scholarship Portal — Central Sector Scheme',
    offeredBy:   'government',
    eligibility: [
      'Family annual income below ₹8 lakh',
      'Must not be availing any state scholarship simultaneously',
      'Minimum 80% marks in 12th standard',
    ],
    amount:              '₹10,000 per annum for diploma students',
    applicationProcess:  'Apply at scholarships.gov.in (National Scholarship Portal) after fresh registration each academic year.',
    website:             'https://scholarships.gov.in',
  },
  {
    id:          'sch-004',
    name:        'Minority Community Scholarship — UP Govt.',
    offeredBy:   'government',
    eligibility: [
      'Must belong to a recognised minority community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)',
      'Domiciled in Uttar Pradesh',
      'Annual family income below ₹2 lakh',
    ],
    amount:              'As per UP Government notification (fee reimbursement)',
    applicationProcess:  'Apply through UP Scholarship Portal (scholarship.up.gov.in) under the Minority category.',
    website:             'https://scholarship.up.gov.in',
  },
]