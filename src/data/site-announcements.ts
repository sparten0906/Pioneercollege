import type { NoticeEntry } from '../types/announcement.types'

export const siteAnnouncements: NoticeEntry[] = [
  {
    id:          'notice-001',
    title:       'Admissions Open for Session 2025–26 — All Diploma Programmes',
    description: 'Applications are now being accepted for all 16 paramedical diploma programmes for the academic session 2025–26. Limited seats available. Apply early to secure your admission.',
    tag:         'admission',
    date:        '2025-04-01',
    isNew:       true,
    isPinned:    true,
    attachmentUrl: '/static-assets/downloadable-docs/admission-form-blank.pdf',
    expiresAt:   '2025-07-31',
  },
  {
    id:          'notice-002',
    title:       'Last Date for 2024–25 End-Semester Exam Form Submission — 15 April 2025',
    description: 'Students of all batches are informed that the last date for submitting end-semester examination forms is 15 April 2025. Late submission will attract a fine of ₹500.',
    tag:         'exam',
    date:        '2025-03-25',
    isNew:       true,
    isPinned:    true,
    expiresAt:   '2025-04-15',
  },
  {
    id:          'notice-003',
    title:       'Result Declared — D. MLT 4th Semester Examination, December 2024',
    description: 'Results for Diploma in Medical Lab Technician 4th Semester examination held in December 2024 have been declared. Students can check their results on the UP Paramedical Council website.',
    tag:         'result',
    date:        '2025-03-10',
    isNew:       true,
    isPinned:    false,
  },
  {
    id:          'notice-004',
    title:       'Free BLS Certification Workshop — 10 April 2025',
    description: 'BBS Institute is organising a free Basic Life Support (BLS) certification workshop for all enrolled students on 10 April 2025. Certificate will be provided by a recognised agency. Register at the office.',
    tag:         'event',
    date:        '2025-03-20',
    isNew:       true,
    isPinned:    false,
    expiresAt:   '2025-04-10',
  },
  {
    id:          'notice-005',
    title:       'Holiday Notice — Holi 2025',
    description: 'The institute will remain closed on 14th March 2025 on account of Holi. Classes will resume on 17th March 2025 as per regular schedule.',
    tag:         'holiday',
    date:        '2025-03-10',
    isNew:       false,
    isPinned:    false,
    expiresAt:   '2025-03-17',
  },
  {
    id:          'notice-006',
    title:       'Scholarship Applications Invited — State Merit Scholarship 2024–25',
    description: 'Students belonging to SC/ST/OBC/EWS categories are invited to apply for UP Government merit scholarships. Last date for application on the UP scholarship portal is 30 April 2025.',
    tag:         'general',
    date:        '2025-03-01',
    isNew:       false,
    isPinned:    false,
    expiresAt:   '2025-04-30',
  },
  {
    id:          'notice-007',
    title:       'URGENT: Change in Examination Centre for D. Radiography Students',
    description: 'D. Medical Radiography students are informed that the examination centre has been changed. Please collect updated admit cards from the institute office before 12 April 2025.',
    tag:         'urgent',
    date:        '2025-04-05',
    isNew:       true,
    isPinned:    true,
    expiresAt:   '2025-04-20',
  },
  {
    id:          'notice-008',
    title:       'Guest Lecture — Advances in MRI Technology — 20 April 2025',
    description: 'Dr. [Name], Head of MRI Department at [Hospital], will deliver a guest lecture on recent advances in MRI technology and clinical applications. All MRI and Radiology students must attend.',
    tag:         'event',
    date:        '2025-04-02',
    isNew:       true,
    isPinned:    false,
    expiresAt:   '2025-04-20',
  },
]

export const getPinnedNotices = (): NoticeEntry[] =>
  siteAnnouncements.filter((n) => n.isPinned)

export const getNewNotices = (): NoticeEntry[] =>
  siteAnnouncements.filter((n) => n.isNew)

export const getNoticesByTag = (
  tag: NoticeEntry['tag'],
): NoticeEntry[] =>
  siteAnnouncements.filter((n) => n.tag === tag)