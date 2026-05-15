import '../../styles/components/spinner.css'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'accent' | 'white'
  label?: string
}

const LoadingSpinner = ({ size = 'md', variant = 'primary', label = 'Loading...' }: LoadingSpinnerProps) => (
  <div className="loading-overlay" role="status" aria-live="polite">
    <div className={`spinner spinner--${size} spinner--${variant}`} aria-hidden="true" />
    <p className="loading-overlay__text">{label}</p>
  </div>
)

export default LoadingSpinner