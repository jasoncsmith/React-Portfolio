import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from '../Icon'
// import './index.scss';
// using TailwindCSS for Modal

export interface ModalProps {
  isVisible: boolean
  title: string
  content: string
  hideModal: () => {}
}

function Modal({ isVisible, hideModal, title, content }: ModalProps): React.ReactPortal | null {
  const btnCloseRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function keylogger(e: KeyboardEvent): void {
      const key: string = e.key

      if (key === 'Escape') {
        // close on escape
        hideModal()
      } else if (key === 'Tab' || key === 'Enter') {
        // trap and keep focus in modal.
        btnCloseRef.current && btnCloseRef.current.focus()
      }
    }

    if (isVisible) {
      document.addEventListener('keyup', keylogger)
    } else {
      document.removeEventListener('keyup', keylogger)
    }

    return () => document.removeEventListener('keyup', keylogger)
  }, [isVisible, hideModal])

  return isVisible
    ? createPortal(
        <>
          <div className="modal-overlay fixed top-0 left-0 bg-black opacity-70 w-full h-full z-30"></div>
          <div className="modal-wrap fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto z-40">
            <div className="modal absolute w-11/12 md:w-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-slate-800 rounded-lg p-6 ring-1 ring-slate-700 shadow-xl z-50">
              {title && (
                <h3 className="text-slate-900 dark:text-white mb-5 text-base font-medium">{title}</h3>
              )}
              <div className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">{content}</div>

              <button
                className="stroke-white hover:bg-slate-600 absolute top-3 right-3 p-1 rounded-md"
                type="button"
                ref={btnCloseRef}
                onClick={hideModal}
              >
                <Icon iconName="IoMdClose" color="#eabb00" size="22px" />
              </button>
            </div>
          </div>
        </>,
        document.body
      )
    : null
}

export default Modal
