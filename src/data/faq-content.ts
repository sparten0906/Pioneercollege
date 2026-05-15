export interface FAQItem {
  id:       string
  question: string
  answer:   string
  category: 'admission' | 'courses' | 'fees' | 'career' | 'general'
}

export const faqItems: FAQItem[] = [
  {
    id:       'faq-001',
    category: 'admission',
    question: 'What is the minimum qualification to apply for paramedical diploma courses at BBS Institute?',
    answer:   'For most diploma programmes, you need to have passed 10+2 (Intermediate) from a recognised board with a minimum of 45% marks. Science stream (PCB/PCM) is preferred for clinical courses like MLT, Radiography, MRI, CT, Dialysis, and Cath Lab. The Diploma in Medical Assistant and Contact Lens Technician accept students from any stream with 40% marks.',
  },
  {
    id:       'faq-002',
    category: 'admission',
    question: 'Is there any entrance examination for admission to diploma programmes?',
    answer:   'No, BBS Institute does not conduct a separate entrance examination. Admission is based on merit — your 10+2 percentage. Eligible candidates are shortlisted through a merit list published on our website and notice board.',
  },
  {
    id:       'faq-003',
    category: 'admission',
    question: 'What documents are required at the time of admission?',
    answer:   'You will need: 10th and 12th marksheets and certificates, 4 passport-size photographs, Aadhaar Card, Caste Certificate (if applicable), Income Certificate (for scholarship), Transfer Certificate, and a Medical Fitness Certificate. Please bring originals and 2 self-attested copies of each document.',
  },
  {
    id:       'faq-004',
    category: 'courses',
    question: 'Are the diploma courses recognised by the government?',
    answer:   'Yes, all 16 paramedical diploma programmes offered by BBS Institute are approved and recognised by the UP Paramedical Council, Lucknow, which functions under the Ministry of Health & Family Welfare, Government of India. Graduates receive a certificate registered with UP Paramedical Council.',
  },
  {
    id:       'faq-005',
    category: 'courses',
    question: 'What is the difference between the 16 regular diploma courses and the 5 counseling courses?',
    answer:   'The 16 paramedical diploma courses (such as D. MLT, D. Radiography, D. Dialysis) are programmes directly offered and taught at BBS Institute. The 5 counseling courses (D. Pharma, ANM, GNM, BSc. Nursing, BAMS) are programmes for which BBS Institute provides admission guidance and counseling — these are taught at separate affiliated nursing or pharmacy colleges.',
  },
  {
    id:       'faq-006',
    category: 'courses',
    question: 'Do students get practical/clinical training during the course?',
    answer:   'Yes, clinical and practical training is a core component of all our programmes. Students receive hands-on training in our on-campus labs (anatomy lab, MLT lab, radiology simulation lab) and through mandatory clinical internships at affiliated hospitals and diagnostic centres.',
  },
  {
    id:       'faq-007',
    category: 'fees',
    question: 'What is the fee structure for diploma courses?',
    answer:   'Fees vary by programme and duration. One-year programmes range from approximately ₹34,000 to ₹57,000 (total). Two-year programmes range from ₹80,000 to ₹88,000 (total). Fees can be paid in instalments. Please visit the Admissions page or contact us for the exact fee structure for your chosen course.',
  },
  {
    id:       'faq-008',
    category: 'fees',
    question: 'Are scholarships available for students?',
    answer:   'Yes, multiple scholarships are available. SC/ST/OBC/EWS students can apply for UP Government post-matric scholarships through the state portal. The institute also has its own merit scholarship for students who top the UP Paramedical Council examinations.',
  },
  {
    id:       'faq-009',
    category: 'career',
    question: 'What is the placement record of BBS Institute?',
    answer:   '92% of our graduating students from the 2022–23 batch were placed within 6 months of completing their diploma. Our Placement Cell maintains active relationships with hospitals, diagnostic chains, and healthcare groups across UP and other states. Many graduates also pursue higher studies or government jobs.',
  },
  {
    id:       'faq-010',
    category: 'career',
    question: 'Can I get a government job after completing a paramedical diploma?',
    answer:   'Yes. UP government recruits paramedical technicians through UPSSSC (Uttar Pradesh Subordinate Services Selection Commission) and NHM (National Health Mission) for posts in government hospitals and PHCs. Radiographers, Lab Technicians, Dialysis Technicians, and others are regularly recruited. Having a registered diploma from UP Paramedical Council is essential for these recruitments.',
  },
  {
    id:       'faq-011',
    category: 'general',
    question: 'Is hostel facility available for outstation students?',
    answer:   'BBS Institute does not have on-campus hostel facilities at present. However, we maintain a list of verified paying guest accommodations and rental properties near the campus for outstation students. Our office can assist you in finding suitable accommodation.',
  },
  {
    id:       'faq-012',
    category: 'general',
    question: 'Does BBS Institute offer any online courses or distance learning?',
    answer:   'No. All our paramedical diploma programmes require regular physical attendance as they involve substantial practical and clinical training that cannot be conducted online. Attendance requirements are governed by UP Paramedical Council regulations.',
  },
]

export const getFAQsByCategory = (
  category: FAQItem['category'],
): FAQItem[] =>
  faqItems.filter((faq) => faq.category === category)