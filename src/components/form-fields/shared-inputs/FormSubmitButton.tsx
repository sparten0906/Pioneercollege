import PrimaryBtn from '../../button-elements/PrimaryBtn'
import type { FormSubmitStatus } from '../../../types/form.types'

interface FormSubmitButtonProps {
  status: FormSubmitStatus
  label?: string
  loadingLabel?: string
}

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
)

const FormSubmitButton = ({ status, label = 'Send Message', loadingLabel = 'Sending...' }: FormSubmitButtonProps) => (
  <PrimaryBtn
    type="submit"
    fullWidth
    loading={status === 'submitting'}
    disabled={status === 'submitting'}
    icon={status !== 'submitting' ? <SendIcon /> : undefined}
    iconPosition="right"
    size="lg"
  >
    {status === 'submitting' ? loadingLabel : label}
  </PrimaryBtn>
)

export default FormSubmitButton