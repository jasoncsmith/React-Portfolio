import { ReactNode } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import Loader from '../../../Loader'

import { useSliderStoreContext } from '../../contexts'

import styles from './index.module.scss'

export interface SliderConteainerProps {
  children: ReactNode
}

const SliderContainer = ({ children }: SliderConteainerProps) => {
  const { isCaptionHidden, play, pause, slides } = useSliderStoreContext()

  if (!slides?.length) {
    return <Loader className={styles.loader} />
  }

  return (
    <div
      className={classNames({
        [styles.slider__container]: true,
        [styles['slider__container--captions-hidden']]: isCaptionHidden,
      })}
      onMouseOver={() => pause()}
      onMouseLeave={() => play()}
    >
      {children}
    </div>
  )
}

export default observer(SliderContainer)
