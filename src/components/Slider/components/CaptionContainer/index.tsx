import { ReactNode } from 'react'

import './index.scss'

interface CaptionContainerProps {
  isCaptionHiding: boolean
  isCaptionHidden: boolean
  isCaptionShowing: boolean
  children: ReactNode
}

const CaptionContainer = ({ isCaptionHiding, isCaptionHidden, isCaptionShowing, children }: CaptionContainerProps) => {
  return (
    <div
      className={
        isCaptionHiding
          ? 'slider__caption-display slider__caption-display--is-hiding'
          : isCaptionHidden
          ? 'slider__caption-display slider__caption-display--is-hidden'
          : isCaptionShowing
          ? 'slider__caption-display slider__caption-display--is-showing'
          : 'slider__caption-display'
      }
    >
      {children}

      <div className="caption-display__links"></div>
    </div>
  )
}

export default CaptionContainer
