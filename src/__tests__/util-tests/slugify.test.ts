import { describe, it, expect } from 'vitest'
import { slugify, deslugify, courseTitleToSlug } from '../../utils/slugify'

describe('slugify()', () => {
  it('lowercases the input', () => {
    expect(slugify('Diploma In MLT')).toBe('diploma-in-mlt')
  })

  it('replaces spaces with hyphens', () => {
    expect(slugify('medical lab technician')).toBe('medical-lab-technician')
  })

  it('replaces underscores with hyphens', () => {
    expect(slugify('medical_lab_technician')).toBe('medical-lab-technician')
  })

  it('removes special characters except hyphens', () => {
    expect(slugify('Diploma in CMS & ED')).toBe('diploma-in-cms-ed')
  })

  it('handles ampersand correctly', () => {
    expect(slugify('Dental & Ortho Technology')).toBe('dental-ortho-technology')
  })

  it('collapses multiple consecutive hyphens', () => {
    expect(slugify('X--Ray  Technician')).toBe('x-ray-technician')
  })

  it('strips leading and trailing hyphens', () => {
    expect(slugify('  Radiology  ')).toBe('radiology')
  })

  it('handles trailing punctuation (dots)', () => {
    expect(slugify('Diploma in Optometry and Contact Lens Tech.')).toBe(
      'diploma-in-optometry-and-contact-lens-tech',
    )
  })

  it('handles X-Ray with hyphen in input', () => {
    expect(slugify('Diploma in X-Ray and ECG Technician')).toBe(
      'diploma-in-x-ray-and-ecg-technician',
    )
  })

  it('returns empty string for empty input', () => {
    expect(slugify('')).toBe('')
  })

  it('handles numeric characters', () => {
    expect(slugify('B.Sc Nursing 3rd Year')).toBe('bsc-nursing-3rd-year')
  })

  it('strips multiple special symbols', () => {
    expect(slugify('!!!Hello World!!!')).toBe('hello-world')
  })

  it('handles already-slugified input unchanged (idempotent)', () => {
    const slug = 'diploma-in-mlt'
    expect(slugify(slug)).toBe(slug)
  })
})

describe('deslugify()', () => {
  it('converts hyphens to spaces and capitalises each word', () => {
    expect(deslugify('diploma-in-mlt')).toBe('Diploma In Mlt')
  })

  it('handles single word', () => {
    expect(deslugify('radiology')).toBe('Radiology')
  })

  it('handles multi-segment slug', () => {
    expect(deslugify('diploma-in-x-ray-and-ecg-technician')).toBe(
      'Diploma In X Ray And Ecg Technician',
    )
  })
})

describe('courseTitleToSlug()', () => {
  it('is an alias for slugify and produces the same result', () => {
    const title = 'Diploma in Medical Lab Technician'
    expect(courseTitleToSlug(title)).toBe(slugify(title))
  })

  it('works for counseling course titles', () => {
    expect(courseTitleToSlug('D.Pharma Counseling')).toBe('dpharma-counseling')
  })
})
