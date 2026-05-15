import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface Step {
  number: number
  title: string
  desc: string
  tip: string
  tipIcon: React.ReactNode
}

const LightbulbIcon = () => (
  <svg className="step-item__tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="step-item__tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
)

const CheckIcon = () => (
  <svg className="step-item__tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="step-item__tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const StarIcon = () => (
  <svg className="step-item__tip-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const steps: Step[] = [
  {
    number: 1,
    title: 'Choose Your Course',
    desc: 'Browse our 16 paramedical diploma programmes and shortlist the one that matches your educational background and career interests. Check the eligibility criteria for your chosen course — most require 10+2 with Science and minimum 45% marks.',
    tip: 'Not sure? Call us — our counselors will guide you to the right course based on your background.',
    tipIcon: <PhoneIcon />,
  },
  {
    number: 2,
    title: 'Collect the Admission Form',
    desc: 'Download the admission form from this page or collect a physical copy from the institute office. Fill in all sections clearly in block letters. Avoid overwriting or correction fluid on the form.',
    tip: 'Download the form from this page — it is the same as the office copy.',
    tipIcon: <LightbulbIcon />,
  },
  {
    number: 3,
    title: 'Gather Required Documents',
    desc: 'Arrange all required original documents and make 2 self-attested photocopies of each. You will need: 10th and 12th marksheets and certificates, Aadhaar card, 4 passport-size photographs (white background), and caste/income certificate if applicable.',
    tip: 'Keep all originals in a separate file — originals are verified but not retained.',
    tipIcon: <CheckIcon />,
  },
  {
    number: 4,
    title: 'Submit the Form',
    desc: 'Submit the completed form along with all photocopies at the institute admissions counter. Office hours are Monday to Saturday, 9 AM to 5 PM. You may also submit this online enquiry form and we will guide you through the remaining steps.',
    tip: 'Arrive before 3 PM on the last date to avoid queues.',
    tipIcon: <ClockIcon />,
  },
  {
    number: 5,
    title: 'Merit List & Seat Confirmation',
    desc: 'Admissions are merit-based. After the last date for form submission, a merit list is published on our notice board and website. Students in the merit list must pay their fees within the stipulated time to confirm their seat.',
    tip: 'Check the notice board and website daily after the deadline — lists are published within 7 days.',
    tipIcon: <LightbulbIcon />,
  },
  {
    number: 6,
    title: 'Pay Fees & Begin Classes',
    desc: 'Pay the required fees at the institute accounts office or via bank transfer as per instructions. Collect your admission receipt, library card, and identity card. Classes begin on 1st August as per the academic calendar.',
    tip: 'Keep your fee receipt safe — it is required for examinations and certificate verification.',
    tipIcon: <StarIcon />,
  },
]

const HowToApplySteps = () => {
  /*
   * useRevealOnScroll attaches an IntersectionObserver to the container ref.
   * When child elements with .reveal-up or .reveal-left classes enter the
   * viewport, the hook adds .is-visible to trigger the CSS transition
   * defined in src/styles/animations/reveal-transitions.css
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  return (
    <div className="how-to-apply" ref={sectionRef}>
      <SectionTitleBlock
        title="How to Apply"
        subtitle="Follow these six steps to complete your admission to BBS Institute — no entrance exam required."
        align="center"
        accentWord="How to Apply"
      />

      <div className="steps-timeline">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`step-item reveal-up stagger-${Math.min(index + 1, 8)}`}
          >
            <div className="step-item__number-wrap">
              <div className="step-item__number">{step.number}</div>
            </div>

            <div className="step-item__body">
              <h3 className="step-item__title">{step.title}</h3>
              <p className="step-item__desc">{step.desc}</p>
              <span className="step-item__tip">
                {step.tipIcon}
                {step.tip}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowToApplySteps