import { observer } from 'mobx-react'

import { useSliderStoreContext } from '../../contexts'
import SlideImage from '../Image/Index'

import './index.scss'

const ViewPort = () => {
  const { isAnimatingRight, isAnimatingLeft, prevIndex, index, nextIndex, slides } = useSliderStoreContext()

  return (
    <div className="slider__viewport">
      <div
        className={
          isAnimatingRight
            ? 'slider__viewport__slides slider__viewport__slides--is-animating-right'
            : isAnimatingLeft
            ? 'slider__viewport__slides slider__viewport__slides--is-animating-left'
            : 'slider__viewport__slides'
        }
      >
        <SlideImage {...slides[prevIndex]?.image} />
        <SlideImage {...slides[index]?.image} />
        <SlideImage {...slides[nextIndex]?.image} />
      </div>
    </div>
  )
}

export default observer(ViewPort)
