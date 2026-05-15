import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

// Stub services before importing the form
vi.mock('../../services/emailjs-service', () => ({
  sendContactForm: vi.fn(),
}))
vi.mock('../../services/analytics-service', () => ({
  trackFormSubmit: vi.fn(),
  trackFormError:  vi.fn(),
}))

import { sendContactForm } from '../../services/emailjs-service'
import MainContactForm from '../../components/form-fields/MainContactForm'

const renderForm = () =>
  render(
    <MemoryRouter>
      <MainContactForm />
    </MemoryRouter>,
  )

describe('MainContactForm', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('renders all required fields', () => {
    renderForm()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    renderForm()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors if submitted with empty fields', async () => {
    const user = userEvent.setup()
    renderForm()

    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/full name is required/i)).toBeInTheDocument()
    })
    expect(screen.getByText(/email address is required/i)).toBeInTheDocument()
    expect(screen.getByText(/phone number is required/i)).toBeInTheDocument()
  })

  it('shows invalid email error for bad email', async () => {
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByLabelText(/email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/valid email address/i)).toBeInTheDocument()
    })
  })

  it('shows invalid phone error for bad number', async () => {
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByLabelText(/phone/i), '12345')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/10-digit/i)).toBeInTheDocument()
    })
  })

  it('does not call sendContactForm when validation fails', async () => {
    const user = userEvent.setup()
    renderForm()

    await user.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => { expect(sendContactForm).not.toHaveBeenCalled() })
  })

  it('calls sendContactForm with valid data', async () => {
    vi.mocked(sendContactForm).mockResolvedValue(undefined)
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByLabelText(/full name/i), 'Amit Kumar')
    await user.type(screen.getByLabelText(/email/i), 'amit@example.com')
    await user.type(screen.getByLabelText(/phone/i), '9876543210')
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with enough length.')
    const policyCheck = screen.queryByLabelText(/privacy policy/i)
    if (policyCheck) await user.click(policyCheck)

    await user.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => { expect(sendContactForm).toHaveBeenCalledOnce() })
  })

  it('shows success message after successful submission', async () => {
    vi.mocked(sendContactForm).mockResolvedValue(undefined)
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByLabelText(/full name/i), 'Amit Kumar')
    await user.type(screen.getByLabelText(/email/i), 'amit@example.com')
    await user.type(screen.getByLabelText(/phone/i), '9876543210')
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with enough length.')
    const policyCheck = screen.queryByLabelText(/privacy policy/i)
    if (policyCheck) await user.click(policyCheck)

    await user.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => {
      expect(screen.getByText(/message sent|success|thank you/i)).toBeInTheDocument()
    })
  })

  it('shows error message when EmailJS fails', async () => {
    vi.mocked(sendContactForm).mockRejectedValue(new Error('EmailJS failed'))
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByLabelText(/full name/i), 'Amit Kumar')
    await user.type(screen.getByLabelText(/email/i), 'amit@example.com')
    await user.type(screen.getByLabelText(/phone/i), '9876543210')
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with enough length.')
    const policyCheck = screen.queryByLabelText(/privacy policy/i)
    if (policyCheck) await user.click(policyCheck)

    await user.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => {
      expect(screen.getByText(/error|failed|try again/i)).toBeInTheDocument()
    })
  })
})
