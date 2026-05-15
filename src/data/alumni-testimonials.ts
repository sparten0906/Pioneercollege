import { getAlumniImage } from '../utils/asset-path-resolver'

export interface AlumniTestimonial {
  id:             string
  name:           string
  course:         string
  passOutYear:    number
  currentRole:    string
  organisation:   string
  location:       string
  quote:          string
  photo:          string
  isFeatured:     boolean
}

export const alumniTestimonials: AlumniTestimonial[] = [
  {
    id:           'alum-001',
    name:         'Priya Sharma',
    course:       'Diploma in Medical Lab Technician',
    passOutYear:  2021,
    currentRole:  'Senior Lab Technician',
    organisation: 'Medanta Hospital',
    location:     'Lucknow, UP',
    quote:        'BBS Institute gave me a solid foundation in clinical laboratory techniques. The hands-on lab training was exceptional and the faculty always went the extra mile to help us understand complex concepts. I cleared my UP Paramedical Council exam in the first attempt and got placed at Medanta within three months of graduating.',
    photo:        getAlumniImage('alumnus-photo-01.webp'),
    isFeatured:   true,
  },
  {
    id:           'alum-002',
    name:         'Rahul Kumar Gupta',
    course:       'Diploma in Medical Radiography',
    passOutYear:  2020,
    currentRole:  'CT/MRI Technician',
    organisation: 'Sanjay Gandhi PGI',
    location:     'Lucknow, UP',
    quote:        'I joined BBS Institute after 12th and the two-year radiography programme completely transformed my career. The clinical posting at the affiliated hospital gave me real-world exposure. Now I work at SGPGI and I am always grateful to my teachers who taught us positioning techniques with such patience and dedication.',
    photo:        getAlumniImage('alumnus-photo-02.webp'),
    isFeatured:   true,
  },
  {
    id:           'alum-003',
    name:         'Anjana Patel',
    course:       'Diploma in Dialysis Technician',
    passOutYear:  2022,
    currentRole:  'Dialysis Technician',
    organisation: 'Kidney Care Centre',
    location:     'Kanpur, UP',
    quote:        'The Dialysis Technician programme at BBS was very comprehensive. We got training on Fresenius machines from Day 1 and the faculty made sure every student understood both the technical and patient care aspects. I now manage a dialysis unit independently and the institute\'s training is the backbone of my confidence.',
    photo:        getAlumniImage('alumnus-photo-03.webp'),
    isFeatured:   true,
  },
  {
    id:           'alum-004',
    name:         'Mohammad Shadab Ansari',
    course:       'Diploma in X-Ray and ECG Technician',
    passOutYear:  2023,
    currentRole:  'X-Ray & ECG Technician',
    organisation: 'District Hospital',
    location:     'Sitapur, UP',
    quote:        'Coming from a small town, BBS Institute was the best decision of my life. The combined X-Ray and ECG course got me placed in a government district hospital. The faculty are very approachable and the institute campus is clean and well-maintained. I recommend BBS to every student who wants to build a healthcare career.',
    photo:        getAlumniImage('alumnus-photo-04.webp'),
    isFeatured:   true,
  },
]

export const getFeaturedTestimonials = (): AlumniTestimonial[] =>
  alumniTestimonials.filter((t) => t.isFeatured)