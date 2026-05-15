import SectionTitleBlock from '../../components/section-blocks/SectionTitleBlock'
import AnchorLinkBtn from '../../components/button-elements/AnchorLinkBtn'
import { requiredDocuments } from '../../data/admission-deadlines'
import { getDocPath } from '../../utils/asset-path-resolver'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

interface DocEntry {
  name: string
  note: string
}

/* Split each raw string into a name + note pair for richer display */
const parseDocEntry = (raw: string): DocEntry => {
  const parts = raw.split(' — ')
  return {
    name: parts[0]?.trim() ?? raw,
    note: parts[1]?.trim() ?? '',
  }
}

const CheckIcon = () => (
  <svg className="doc-item__check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const DocumentsChecklist = () => {
  /*
   * useRevealOnScroll — wraps the checklist container.
   * Each .doc-item carries .reveal-up and will animate in
   * as the section enters the viewport.
   */
  const sectionRef = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    once: true,
  })

  const parsedDocs = requiredDocuments.map(parseDocEntry)

  return (
    <div className="documents-checklist" ref={sectionRef}>
      <SectionTitleBlock
        title="Documents Required"
        subtitle="Bring originals and two self-attested photocopies of each document on the day of admission."
        align="center"
        accentWord="Documents Required"
      />

      <div className="documents-checklist__grid">
        {parsedDocs.map((doc, index) => (
          <div
            key={doc.name}
            className={`doc-item reveal-up stagger-${Math.min(index + 1, 8)}`}
          >
            <div className="doc-item__check">
              <CheckIcon />
            </div>
            <div className="doc-item__text">
              <p className="doc-item__name">{doc.name}</p>
              {doc.note && (
                <p className="doc-item__note">{doc.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Download bar */}
      <div className="documents-checklist__download-bar reveal-up">
        <p className="documents-checklist__download-text">
          <strong>Need a printable checklist?</strong> Download the admission
          form and document checklist PDF to carry during your visit.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <AnchorLinkBtn
            href={getDocPath('admission-form-blank.pdf')}
            download
            icon={<DownloadIcon />}
          >
            Admission Form
          </AnchorLinkBtn>
          <AnchorLinkBtn
            href={getDocPath('bbs-prospectus-2024-25.pdf')}
            download
            icon={<DownloadIcon />}
          >
            Prospectus
          </AnchorLinkBtn>
        </div>
      </div>
    </div>
  )
}

export default DocumentsChecklist