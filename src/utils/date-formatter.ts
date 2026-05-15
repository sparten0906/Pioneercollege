export {}
// ============================================================
// DATE FORMATTER — consistent date display across the site
// ============================================================

// "2024-08-15" → "15 August 2024"
export const formatFullDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  })
}

// "2024-08-15" → "Aug 15, 2024"
export const formatShortDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', {
    day:   'numeric',
    month: 'short',
    year:  'numeric',
  })
}

// "2024-08-15" → "Aug 2024"
export const formatMonthYear = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    year:  'numeric',
  })
}

// "2024-08-15" → "15"
export const formatDay = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', { day: '2-digit' })
}

// "2024-08-15" → "AUG"
export const formatMonthShort = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase()
}

// "2024-08-15" → "2024"
export const formatYear = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.getFullYear().toString()
}

// Check if a date is in the future (for upcoming events)
export const isFutureDate = (dateStr: string): boolean => {
  return new Date(dateStr) > new Date()
}

// Check if a notice has expired
export const isExpired = (expiresAt?: string): boolean => {
  if (!expiresAt) return false
  return new Date(expiresAt) < new Date()
}

// Time-ago for announcements: "2 days ago", "1 week ago"
export const timeAgo = (dateStr: string): string => {
  const date = new Date(dateStr)
  const now  = new Date()
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diff < 60)              return 'Just now'
  if (diff < 3600)            return `${Math.floor(diff / 60)} minutes ago`
  if (diff < 86400)           return `${Math.floor(diff / 3600)} hours ago`
  if (diff < 604800)          return `${Math.floor(diff / 86400)} days ago`
  if (diff < 2592000)         return `${Math.floor(diff / 604800)} weeks ago`
  if (diff < 31536000)        return `${Math.floor(diff / 2592000)} months ago`
  return `${Math.floor(diff / 31536000)} years ago`
}

// Format duration string for display
// "18 months" or build from month count
export const formatDuration = (months: number): string => {
  if (months < 12) return `${months} Month${months > 1 ? 's' : ''}`
  const years  = Math.floor(months / 12)
  const rem    = months % 12
  const yLabel = `${years} Year${years > 1 ? 's' : ''}`
  if (rem === 0) return yLabel
  return `${yLabel} ${rem} Month${rem > 1 ? 's' : ''}`
}