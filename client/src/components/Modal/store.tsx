import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from 'react'

export type ModalId = 'contact' | 'test' | ''

interface ModalContextProps {
  close: () => void
  setModalKey: Dispatch<SetStateAction<ModalId>>
  modalKey: ModalId
  setWarn: Dispatch<SetStateAction<boolean>>
  warn: boolean
}

interface ModalProvider {
  children: ReactNode
  // if warnBeforeClose is supplied then a Modal.ModalCloseWarning component must be passed as children
  // otherwise user will be stuck
  warnBeforeClose?: ModalId[]
}

export const ModalContext = createContext<ModalContextProps | null>(null)

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('cannot use context outside of provider')
  }

  return context
}

export const ModalProvider = ({ children, warnBeforeClose }: ModalProvider) => {
  const [modalKey, setModalKey] = useState<ModalId>('')
  const [warn, setWarn] = useState(false)

  const close = useCallback(() => {
    if (Array.isArray(warnBeforeClose) && warnBeforeClose.includes(modalKey)) {
      setWarn(true)
      return
    }

    setModalKey('')
  }, [warnBeforeClose?.length, modalKey])

  return (
    <ModalContext.Provider value={{ modalKey, setModalKey, close, warn, setWarn }}>
      {children}
    </ModalContext.Provider>
  )
}
