import { ReactNode } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useSliderStoreContext } from '../../contexts'

import './index.scss'

export interface SliderConteainerProps {
  children: ReactNode
}

const SliderContainer = ({ children }: SliderConteainerProps) => {
  const { isCaptionHidden, play, pause } = useSliderStoreContext()

  return (
    <div
      className={classNames({
        slider__container: true,
        'slider__container--captions-hidden': isCaptionHidden,
      })}
      onMouseOver={() => pause()}
      onMouseLeave={() => play()}
    >
      {children}
    </div>
  )
}

export default observer(SliderContainer)
