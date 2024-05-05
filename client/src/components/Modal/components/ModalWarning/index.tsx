import { ReactNode } from 'react'
import Button from '../../../Button'
import Inline from '../../../Layout/Inline'
import styles from './index.module.scss'
import { useModalContext } from '../../store'
import Fade from '../../../Layout/Fade'

export function DefaultWarnMessage() {
  return <h5 className="text-lg text-white text-center mb-8">You will lose any unsaved changes. Continue?</h5>
}

export function ModalCloseWarning({ children }: { children?: ReactNode }) {
  const { setModalKey, setWarn, warn } = useModalContext()

  if (!warn) {
    return null
  }

  return (
    <Fade animationTranslate={false}>
      <div
        className={`${styles.modal__warning} absolute w-full h-full top-0 left-0 dark:bg-slate-800 rounded-lg p-6 ring-1 ring-slate-700 shadow-xl z-50 text-white`}
      >
        {children ? children : <DefaultWarnMessage />}
        <Inline x="center">
          <Button buttonType="button" variant="primary" onClick={() => setWarn(false)}>
            Stay
          </Button>
          <Button
            buttonType="button"
            variant="ghost"
            onClick={() => {
              setWarn(false)
              setModalKey('')
            }}
          >
            Leave
          </Button>
        </Inline>
      </div>
    </Fade>
  )
}
