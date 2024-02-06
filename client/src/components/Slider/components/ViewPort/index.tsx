import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useSliderStoreContext } from '../../contexts'
import SlideImage from '../Image'

import styles from './index.module.scss'

const ViewPort = () => {
  const { isAnimatingRight, isAnimatingLeft, prevIndex, index, nextIndex, slides } = useSliderStoreContext()

  if (!slides?.length) {
    return null
  }

  return (
    <div className={styles.slider__viewport}>
      <div
        className={classNames({
          [styles.slider__viewport__slides]: true,
          [styles['slider__viewport__slides--is-animating-left']]: isAnimatingLeft,
          [styles['slider__viewport__slides--is-animating-right']]: isAnimatingRight,
        })}
      >
        <SlideImage {...slides[prevIndex]?.image} />
        <SlideImage {...slides[index]?.image} />
        <SlideImage {...slides[nextIndex]?.image} />
      </div>
    </div>
  )
}

export default observer(ViewPort)
