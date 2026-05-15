export {}
// ============================================================
// ANNOUNCEMENT / NOTICE TYPES
// ============================================================

export type NoticeTag =
  | 'admission'
  | 'exam'
  | 'result'
  | 'event'
  | 'holiday'
  | 'general'
  | 'urgent'

export interface NoticeEntry {
  id: string
  title: string
  description?: string
  tag: NoticeTag
  date: string
  isNew: boolean
  isPinned: boolean
  attachmentUrl?: string
  expiresAt?: string
}