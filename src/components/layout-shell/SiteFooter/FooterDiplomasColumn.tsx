import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { getCourseDetailPath } from '../../../constants/route-paths.constants'

const popularCourses = [
  { title: 'Diploma in Medical Lab Technician', slug: 'diploma-in-medical-lab-technician' },
  { title: 'Diploma in Medical Radiography',    slug: 'diploma-in-medical-radiography' },
  { title: 'Diploma in Dialysis Technician',    slug: 'diploma-in-dialysis-technician' },
  { title: 'Diploma in Cath Lab Technology',    slug: 'diploma-in-cath-lab-technology' },
  { title: 'Diploma in MRI Technician',         slug: 'diploma-in-mri-technician' },
  { title: 'Diploma in Critical Care Technician',slug:'diploma-in-critical-care-technician' },
  { title: 'Diploma in X-Ray and ECG Technician',slug:'diploma-in-x-ray-and-ecg-technician' },
  { title: 'Diploma in CMS & ED',               slug: 'diploma-in-cms-and-ed' },
]

const FooterDiplomasColumn = () => (
  <div>
    <h3 className="footer-col__heading">Popular Courses</h3>
    <ul className="footer-col__list">
      {popularCourses.map((c) => (
        <li key={c.slug}>
          <Link to={getCourseDetailPath(c.slug)} className="footer-col__link">
            <Star size={12} fill="currentColor" style={{ color: 'var(--color-accent)', opacity: 0.7, flexShrink: 0 }} />
            {c.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterDiplomasColumn