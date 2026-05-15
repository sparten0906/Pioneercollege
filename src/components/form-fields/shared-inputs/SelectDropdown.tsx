import type { SelectHTMLAttributes } from 'react'
import type { SelectOption } from '../../../types/shared.types'
import InlineFieldError from './InlineFieldError'
import '../../../styles/components/forms.css'

interface SelectDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
  error?: string
  required?: boolean
}

const SelectDropdown = ({ label, options, error, required, id, ...rest }: SelectDropdownProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="form-group">
      <label htmlFor={inputId} className="form-label">
        {label}
        {required && <span className="form-label__required" aria-hidden="true">*</span>}
      </label>
      <select
        id={inputId}
        className={`form-select${error ? ' form-select--error' : ''}`}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={!!error}
        required={required}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <InlineFieldError id={`${inputId}-error`} message={error} />}
    </div>
  )
}

export default SelectDropdown