import { observer } from 'mobx-react'
import classNames from 'classnames'

import Icon from '../../../Icon'
import { useSliderStoreContext } from '../../contexts'

import styles from './index.module.scss'

const Nav = () => {
  const { goToPrevious, goToNext } = useSliderStoreContext()

  return (
    <nav className={styles.slider__nav}>
      <button
        type="button"
        className={classNames({
          [styles.slider__nav__btn]: true,
          [styles['slider__nav__btn--prev']]: true,
        })}
        onClick={goToPrevious}
      >
        Previous
      </button>
      <span className={styles['slider__nav__btn-icon']} onClick={goToPrevious}>
        <Icon iconName="IoChevronBack" />
      </span>
      <button
        type="button"
        className={classNames({
          [styles.slider__nav__btn]: true,
          [styles['slider__nav__btn--next']]: true,
        })}
        onClick={goToNext}
      >
        Next
      </button>
      <span className={styles['slider__nav__btn-icon']} onClick={goToNext}>
        <Icon iconName="IoChevronForward" />
      </span>{' '}
    </nav>
  )
}
export default observer(Nav)
