import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import type { NoticeEntry } from '../types/announcement.types'
import { siteAnnouncements } from '../data/site-announcements'
import { isExpired } from '../utils/date-formatter'

interface NoticeContextValue {
  allNotices:     NoticeEntry[]
  pinnedNotices:  NoticeEntry[]
  newNotices:     NoticeEntry[]
  activeNotices:  NoticeEntry[]
  totalCount:     number
  newCount:       number
}

const NoticeContext = createContext<NoticeContextValue | null>(null)

export const NoticeProvider = ({ children }: { children: ReactNode }) => {
  const [notices, setNotices] = useState<NoticeEntry[]>([])

  useEffect(() => {
    // Filter out expired notices on mount
    const active = siteAnnouncements.filter((n) => !isExpired(n.expiresAt))
    setNotices(active)
  }, [])

  const pinnedNotices = notices.filter((n) => n.isPinned)
  const newNotices    = notices.filter((n) => n.isNew)

  const value: NoticeContextValue = {
    allNotices:    notices,
    activeNotices: notices,
    pinnedNotices,
    newNotices,
    totalCount:    notices.length,
    newCount:      newNotices.length,
  }

  return (
    <NoticeContext.Provider value={value}>
      {children}
    </NoticeContext.Provider>
  )
}

export const useNotices = (): NoticeContextValue => {
  const ctx = useContext(NoticeContext)
  if (!ctx) {
    throw new Error('useNotices must be used inside <NoticeProvider>')
  }
  return ctx
}

export default NoticeContext