import type { SocialLink } from '../types/shared.types'

export const socialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    url:      'https://www.facebook.com/bbsinstitute',
    label:    'Follow BBS Institute on Facebook',
  },
  {
    platform: 'instagram',
    url:      'https://www.instagram.com/bbsinstitute',
    label:    'Follow BBS Institute on Instagram',
  },
  {
    platform: 'youtube',
    url:      'https://www.youtube.com/@bbsinstitute',
    label:    'Subscribe to BBS Institute on YouTube',
  },
  {
    platform: 'whatsapp',
    url:      'https://wa.me/91XXXXXXXXXX',
    label:    'Chat with BBS Institute on WhatsApp',
  },
  {
    platform: 'linkedin',
    url:      'https://www.linkedin.com/company/bbsinstitute',
    label:    'Connect with BBS Institute on LinkedIn',
  },
]

export const getWhatsAppLink = (message: string): string => {
  const base    = 'https://wa.me/91XXXXXXXXXX'
  const encoded = encodeURIComponent(message)
  return `${base}?text=${encoded}`
}

export const getAdmissionWhatsAppLink = (): string =>
  getWhatsAppLink(
    'Hello, I am interested in admission to a paramedical diploma course at BBS Institute. Please guide me.',
  )