import React, { type InputHTMLAttributes } from 'react'
import InlineFieldError from './InlineFieldError'
import '../../../styles/components/forms.css'

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode
  error?: string
}

const CheckboxField = ({ label, error, id, ...rest }: CheckboxFieldProps) => {
  const inputId = id ?? 'checkbox-field'
  return (
    <div className="form-group" style={{ marginBottom: 0 }}>
      <label className="form-checkbox-wrap" htmlFor={inputId}>
        <input type="checkbox" id={inputId} className="form-checkbox" aria-invalid={!!error} {...rest} />
        <span className="form-checkbox-label">{label}</span>
      </label>
      {error && <InlineFieldError message={error} />}
    </div>
  )
}

export default CheckboxField