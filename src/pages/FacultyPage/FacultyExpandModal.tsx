import type { FacultyMember } from '../../types/faculty.types'
import FacultyProfileModal from '../../components/modal-elements/FacultyProfileModal'

interface FacultyExpandModalProps {
  member:  FacultyMember | null
  isOpen:  boolean
  onClose: () => void
}

/*
 * FacultyExpandModal is a thin wrapper around the reusable
 * FacultyProfileModal component from Phase 5 components.
 *
 * Keeping it as a separate file in the page folder rather than
 * inlining the modal in index.tsx serves two purposes:
 *
 * 1. index.tsx stays clean — the modal logic is clearly separated
 * 2. If FacultyPage ever needs a custom modal layout beyond what
 *    FacultyProfileModal provides, this is the right place to
 *    override or extend without touching the shared component.
 *
 * The isOpen + member props both come from useModalControl in index.tsx.
 * FacultyProfileModal handles its own portal via React.createPortal
 * so the modal always renders at the document.body level regardless
 * of where in the tree this component is placed.
 */
const FacultyExpandModal = ({
  member,
  isOpen,
  onClose,
}: FacultyExpandModalProps) => {
  /*
   * Pass the member directly to FacultyProfileModal.
   * When isOpen is false, FacultyProfileModal renders null internally
   * (handled inside the ModalWrapper which checks isOpen before
   * creating the portal). The 300ms data-clear delay in useModalControl
   * ensures the exit animation completes before member becomes null.
   */
  return (
    <FacultyProfileModal
      member={isOpen ? member : null}
      onClose={onClose}
    />
  )
}

export default FacultyExpandModal