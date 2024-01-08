import { ReactNode } from 'react'
import { observer } from 'mobx-react'

import { useSliderStoreContext } from '../../contexts'

import './index.scss'

export interface SliderConteainerProps {
  children: ReactNode
}

const SliderContainer = ({ children }: SliderConteainerProps) => {
  const { isCaptionHidden, play, pause } = useSliderStoreContext()

  return (
    <div
      className={isCaptionHidden ? 'slider__container slider__container--captions-hidden' : 'slider__container'}
      onMouseOver={() => pause()}
      onMouseLeave={() => play()}
    >
      {children}
    </div>
  )
}

export default observer(SliderContainer)
