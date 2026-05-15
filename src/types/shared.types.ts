export {}
// ============================================================
// SHARED — common types reused across the whole project
// ============================================================

export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'youtube' | 'twitter' | 'linkedin' | 'whatsapp'
  url: string
  label: string
}

export interface SeoMetaProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

export interface BreadcrumbItem {
  label: string
  path?: string
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface ApiResponse<T> {
  data: T
  status: Status
  message?: string
}

export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface DownloadLink {
  label: string
  fileName: string
  filePath: string
  fileType: 'pdf' | 'docx' | 'xlsx'
  fileSizeLabel?: string
}

export interface ContactDetails {
  address: string
  phone: string[]
  email: string[]
  mapEmbedUrl: string
  workingHours: string
}