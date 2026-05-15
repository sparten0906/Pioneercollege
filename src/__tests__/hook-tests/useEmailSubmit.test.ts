import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useEmailSubmit } from '../../hooks/useEmailSubmit'

// Mock EmailJS service functions
vi.mock('../../services/emailjs-service', () => ({
  sendContactForm:      vi.fn(),
  sendAdmissionEnquiry: vi.fn(),
  sendDiplomaEnquiry:   vi.fn(),
  sendAlumniRegistration: vi.fn(),
}))

// Mock analytics service
vi.mock('../../services/analytics-service', () => ({
  trackFormSubmit: vi.fn(),
  trackFormError:  vi.fn(),
}))

import {
  sendContactForm,
  sendAdmissionEnquiry,
  sendDiplomaEnquiry,
  sendAlumniRegistration,
} from '../../services/emailjs-service'
import { trackFormSubmit, trackFormError } from '../../services/analytics-service'

const contactPayload = {
  fullName: 'Amit Kumar', email: 'amit@example.com',
  phone: '9876543210', subject: 'Enquiry', message: 'Hello', agreeToPolicy: true,
}

describe('useEmailSubmit()', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('initialises with status "idle"', () => {
    const { result } = renderHook(() => useEmailSubmit())
    expect(result.current.status).toBe('idle')
  })

  it('sets status to "submitting" immediately on submit', async () => {
    // Never resolves during the test so we can observe 'submitting'
    vi.mocked(sendContactForm).mockReturnValue(new Promise(() => {}))
    const { result } = renderHook(() => useEmailSubmit())

    act(() => { result.current.submit('contact', contactPayload) })
    expect(result.current.status).toBe('submitting')
  })

  it('sets status to "success" after successful contact submit', async () => {
    vi.mocked(sendContactForm).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('contact', contactPayload) })
    expect(result.current.status).toBe('success')
  })

  it('calls sendContactForm for "contact" form type', async () => {
    vi.mocked(sendContactForm).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('contact', contactPayload) })
    expect(sendContactForm).toHaveBeenCalledOnce()
  })

  it('calls sendAdmissionEnquiry for "admission" form type', async () => {
    vi.mocked(sendAdmissionEnquiry).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())
    const payload = { studentName: 'Riya', email: 'r@x.com', phone: '9876543210' }

    await act(async () => { await result.current.submit('admission', payload as never) })
    expect(sendAdmissionEnquiry).toHaveBeenCalledOnce()
  })

  it('calls sendDiplomaEnquiry for "diploma" form type', async () => {
    vi.mocked(sendDiplomaEnquiry).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('diploma', contactPayload) })
    expect(sendDiplomaEnquiry).toHaveBeenCalledOnce()
  })

  it('calls sendAlumniRegistration for "alumni" form type', async () => {
    vi.mocked(sendAlumniRegistration).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('alumni', contactPayload as never) })
    expect(sendAlumniRegistration).toHaveBeenCalledOnce()
  })

  it('sets status to "error" on failure', async () => {
    vi.mocked(sendContactForm).mockRejectedValue(new Error('Network error'))
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('contact', contactPayload) })
    expect(result.current.status).toBe('error')
  })

  it('calls trackFormSubmit on success', async () => {
    vi.mocked(sendContactForm).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('contact', contactPayload) })
    expect(trackFormSubmit).toHaveBeenCalledWith('contact')
  })

  it('calls trackFormError on failure', async () => {
    vi.mocked(sendContactForm).mockRejectedValue(new Error('fail'))
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('contact', contactPayload) })
    expect(trackFormError).toHaveBeenCalledWith('contact', 'emailjs_send_failed')
  })

  it('reset() sets status back to "idle"', async () => {
    vi.mocked(sendContactForm).mockResolvedValue(undefined)
    const { result } = renderHook(() => useEmailSubmit())

    await act(async () => { await result.current.submit('contact', contactPayload) })
    expect(result.current.status).toBe('success')

    act(() => { result.current.reset() })
    expect(result.current.status).toBe('idle')
  })

  it('setStatus() allows manual override of status', () => {
    const { result } = renderHook(() => useEmailSubmit())
    act(() => { result.current.setStatus('error') })
    expect(result.current.status).toBe('error')
  })
})
