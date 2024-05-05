import { ReactNode } from 'react'

import Button from '../../../Button'
import { ModalId, useModalContext } from '../../store'

import styles from './index.module.scss'

export function ModalCloser() {
  const { close } = useModalContext()

  return (
    <Button
      onClick={close}
      buttonType="button"
      className={`${styles['modal__btn-close']} stroke-white hover:bg-slate-600 top-3 right-3 rounded-md text-amber-400 p-0`}
      iconName="IoMdClose"
      variant="ghost"
    />
  )
}

export function ModalOpener({ children, modalId }: { children: string; modalId: ModalId }) {
  const { setModalKey } = useModalContext()

  return (
    <Button buttonType="button" onClick={() => setModalKey(modalId)}>
      {children}
    </Button>
  )
}

export function ModalTitle({ children }: { children: string | ReactNode }) {
  return <div className="text-slate-900 dark:text-white mb-5 text-base font-medium">{children}</div>
}

export function ModalContent({ children }: { children: string | ReactNode }) {
  return <div className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">{children}</div>
}
