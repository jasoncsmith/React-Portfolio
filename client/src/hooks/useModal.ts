import { useState } from 'react'

import Modal from '../components/Modal'

interface UseModalReturnType {
  isVisible: boolean
  toggleIsVisible: () => void
  Modal: typeof Modal
}

function useModal(): UseModalReturnType {
  const [isVisible, setIsVisible] = useState(false)

  const toggleIsVisible = () => setIsVisible(!isVisible)

  return {
    isVisible,
    toggleIsVisible,
    Modal,
  }
}

export default useModal
