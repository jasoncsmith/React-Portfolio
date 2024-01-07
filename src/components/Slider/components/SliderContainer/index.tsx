import { ReactNode } from 'react'
import './index.scss'

export interface ImageProps {
  isCaptionHidden: boolean
  onMouseOver: () => void
  onMouseLeave: () => void
  children: ReactNode
}

const SliderContainer = ({ isCaptionHidden, onMouseOver, onMouseLeave, children }: ImageProps) => {
  return (
    <div
      className={isCaptionHidden ? 'slider__container slider__container--captions-hidden' : 'slider__container'}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
export default SliderContainer
