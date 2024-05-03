import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { useOnKeyCode, useOnOutsideClick } from '../../hooks/useOnOutsideClick'
import { ModalId, ModalProvider, useModalContext } from './store'

import { ModalCloseWarning } from './components/ModalWarning'
import { ModalOpener, ModalCloser, ModalTitle, ModalContent } from './components/ModalContent'
import Fade from '../Fade'

const defaults = {
  closeOnEscape: true,
  closeOnOutsideClick: true,
  externalOpener: false,
  warnBeforeClose: [],
}
interface ModalProps {
  children: ReactNode
  // if warnBeforeClose is supplied then a Modal.ModalCloseWarning component must be passed as children otherwise user will be stuck
  warnBeforeClose?: ModalId[]
}

interface ModalWindowProps {
  modalId: ModalId
  children: ReactNode[] | ReactNode
  // defines if modal needs to be opened externally without the internal Modal.Opener component
  externalOpen?: boolean
  // allows resetting the useState prop so it can be triggered again
  externalReset?: Dispatch<SetStateAction<boolean>>
  closeOnEsc?: boolean
  closeOnOutsideClick?: boolean
}

interface ModalBodyProps {
  children: ReactNode
  closeOnEsc: boolean
  closeOnOutsideClick: boolean
}

function Modal({ children, warnBeforeClose = defaults.warnBeforeClose }: ModalProps) {
  return <ModalProvider warnBeforeClose={warnBeforeClose}>{children}</ModalProvider>
}

function Overlay({ children }: { children: ReactNode }) {
  return (
    <div className="modal-overlay fixed top-0 left-0 bg-black/70 w-full h-full z-30" role="presentation">
      {children}
    </div>
  )
}

function ModalWindow({
  modalId,
  closeOnEsc = defaults.closeOnEscape,
  closeOnOutsideClick = defaults.closeOnOutsideClick,
  externalOpen = defaults.externalOpener,
  externalReset,
  children,
}: ModalWindowProps) {
  const { modalKey, setModalKey } = useModalContext()

  useEffect(() => {
    externalOpen && setModalKey(modalId)
  }, [externalOpen])

  useEffect(() => {
    // once modal is closed, reset external opener so it can be trigger again
    !modalKey && externalReset?.(false)
  }, [modalKey])

  if (modalKey !== modalId) {
    return null
  }

  return createPortal(
    <Overlay>
      <Fade animationTranslate={false}>
        <ModalBody closeOnEsc={closeOnEsc} closeOnOutsideClick={closeOnOutsideClick}>
          {children}
        </ModalBody>
      </Fade>
    </Overlay>,
    document.body
  )
}

function ModalBody({ children, closeOnEsc, closeOnOutsideClick }: ModalBodyProps) {
  const { close } = useModalContext()
  const ref = useRef(null)

  useOnOutsideClick<HTMLDivElement>(ref, close, closeOnOutsideClick)
  useOnKeyCode<HTMLDivElement>(ref, close, closeOnEsc ? 'Escape' : '')

  return (
    <div
      role="dialog"
      ref={ref}
      className="absolute w-11/12 md:w-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-slate-800 rounded-lg p-6 ring-1 ring-slate-700 shadow-xl z-50"
    >
      {children}
    </div>
  )
}

Modal.ModalWindow = ModalWindow
Modal.ModalOpener = ModalOpener
Modal.ModalCloser = ModalCloser
Modal.ModalTitle = ModalTitle
Modal.ModalContent = ModalContent
Modal.ModalCloseWarning = ModalCloseWarning

export default Modal
