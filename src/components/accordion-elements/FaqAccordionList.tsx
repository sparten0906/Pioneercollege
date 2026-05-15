import { useState } from 'react'
import type { FAQItem } from '../../data/faq-content'
import '../../styles/components/accordion.css'

interface FaqAccordionListProps {
  faqs: FAQItem[]
}

const ChevronIcon = () => (
  <svg className="accordion-trigger__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const QuestionMarkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-primary)', flexShrink: 0 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const FaqAccordionList = ({ faqs }: FaqAccordionListProps) => {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="accordion">
      {faqs.map((faq) => (
        <div key={faq.id} className={`accordion-item${openId === faq.id ? ' is-open' : ''}`}>
          <button
            className="accordion-trigger"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            aria-expanded={openId === faq.id}
          >
            <QuestionMarkIcon />
            <span className="accordion-trigger__text">{faq.question}</span>
            <ChevronIcon />
          </button>
          <div className={`accordion-panel${openId === faq.id ? ' is-open' : ''}`}>
            <div className="accordion-panel__content">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqAccordionList