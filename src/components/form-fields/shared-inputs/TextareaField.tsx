import type { TextareaHTMLAttributes } from 'react'
import InlineFieldError from './InlineFieldError'
import '../../../styles/components/forms.css'

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  required?: boolean
}

const TextareaField = ({ label, error, required, id, ...rest }: TextareaFieldProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="form-group">
      <label htmlFor={inputId} className="form-label">
        {label}
        {required && <span className="form-label__required" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={inputId}
        className={`form-textarea${error ? ' form-textarea--error' : ''}`}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={!!error}
        required={required}
        {...rest}
      />
      {error && <InlineFieldError id={`${inputId}-error`} message={error} />}
    </div>
  )
}

export default TextareaField