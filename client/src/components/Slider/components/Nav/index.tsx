import { observer } from 'mobx-react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import classNames from 'classnames'

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
      <IoChevronBack className={styles['slider__nav__btn-icon']} onClick={goToPrevious} />

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
      <IoChevronForward className={styles['slider__nav__btn-icon']} onClick={goToNext} />
    </nav>
  )
}
export default observer(Nav)
