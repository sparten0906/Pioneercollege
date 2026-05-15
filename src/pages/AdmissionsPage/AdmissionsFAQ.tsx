import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import FaqAccordionList from '../../components/accordion-elements/FaqAccordionList'
import { getFAQsByCategory } from '../../data/faq-content'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const AdmissionsFAQ = () => {
  /*
   * useRevealOnScroll — wraps the FAQ section container.
   * The accordion list itself uses .reveal-up so it slides
   * up when this section comes into view.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  /*
   * Show admission FAQs first, then fees, then courses,
   * then career — most relevant for the Admissions page.
   * Filter out general/other categories.
   */
  const admissionFAQs = getFAQsByCategory('admission')
  const feeFAQs = getFAQsByCategory('fees')
  const courseFAQs = getFAQsByCategory('courses')
  const careerFAQs = getFAQsByCategory('career')

  const orderedFAQs = [
    ...admissionFAQs,
    ...feeFAQs,
    ...courseFAQs,
    ...careerFAQs,
  ]

  return (
    <div className="admissions-faq" ref={sectionRef}>
      <SectionTitleBlock
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions we receive from prospective students and parents."
        align="center"
        accentWord="Frequently Asked"
      />

      <div
        className="reveal-up"
        style={{ maxWidth: '780px', margin: '0 auto' }}
      >
        <FaqAccordionList faqs={orderedFAQs} />
        
      </div>
    </div>
  )
}

export default AdmissionsFAQ