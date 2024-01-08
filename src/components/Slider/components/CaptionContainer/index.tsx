import { ReactNode } from 'react'
import { observer } from 'mobx-react'

import { useSliderStoreContext } from '../../contexts'

import './index.scss'

interface CaptionContainerProps {
  children: ReactNode
}

const CaptionContainer = ({ children }: CaptionContainerProps) => {
  const { isCaptionHiding, isCaptionHidden, isCaptionShowing } = useSliderStoreContext()

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

export default observer(CaptionContainer)
