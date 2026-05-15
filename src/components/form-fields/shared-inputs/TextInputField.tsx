import React, { type InputHTMLAttributes } from 'react'
import InlineFieldError from './InlineFieldError'
import '../../../styles/components/forms.css'

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
  icon?: React.ReactNode
}

const TextInputField = ({ label, error, required, icon, id, className, ...rest }: TextInputFieldProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="form-group">
      <label htmlFor={inputId} className="form-label">
        {label}
        {required && <span className="form-label__required" aria-hidden="true">*</span>}
      </label>
      <div className={icon ? 'form-input-wrapper' : undefined}>
        {icon && <span className="form-input-icon">{icon}</span>}
        <input
          id={inputId}
          className={`form-input${icon ? ' form-input--with-icon' : ''}${error ? ' form-input--error' : ''} ${className ?? ''}`.trim()}
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={!!error}
          required={required}
          {...rest}
        />
      </div>
      {error && <InlineFieldError id={`${inputId}-error`} message={error} />}
    </div>
  )
}

export default TextInputField