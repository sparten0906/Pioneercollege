import type { SelectOption } from '../../../types/shared.types'
import InlineFieldError from './InlineFieldError'
import '../../../styles/components/forms.css'

interface RadioButtonGroupProps {
  label: string
  name: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

const RadioButtonGroup = ({ label, name, options, value, onChange, error, required }: RadioButtonGroupProps) => (
  <div className="form-group">
    <span className="form-label">
      {label}
      {required && <span className="form-label__required" aria-hidden="true">*</span>}
    </span>
    <div className="form-radio-group" role="radiogroup" aria-label={label}>
      {options.map((opt) => (
        <label key={opt.value} className="form-radio-wrap">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="form-radio"
            disabled={opt.disabled}
          />
          <span className="form-radio-label">{opt.label}</span>
        </label>
      ))}
    </div>
    {error && <InlineFieldError message={error} />}
  </div>
)

export default RadioButtonGroup