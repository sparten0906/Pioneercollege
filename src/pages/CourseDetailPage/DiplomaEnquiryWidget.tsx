import DiplomaEnquiryForm from '../../components/form-fields/DiplomaEnquiryForm'

interface DiplomaEnquiryWidgetProps {
  courseTitle: string
}

const MessageIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const DiplomaEnquiryWidget = ({ courseTitle }: DiplomaEnquiryWidgetProps) => {
  return (
    <div className="enquiry-widget">
      {/* Header */}
      <div className="enquiry-widget__header">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-1)',
          }}
        >
          <MessageIcon />
          <h3 className="enquiry-widget__header-title">
            Enquire About This Course
          </h3>
        </div>
        <p className="enquiry-widget__header-sub">
          We will call you back within 24 hours
        </p>
      </div>

      {/* Form body */}
      <div className="enquiry-widget__body">
        <DiplomaEnquiryForm courseTitle={courseTitle} />
      </div>
    </div>
  )
}

export default DiplomaEnquiryWidget