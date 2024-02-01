import { observer } from 'mobx-react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

import { useSliderStoreContext } from '../../contexts'
import './index.scss'

const Nav = () => {
  const { goToPrevious, goToNext } = useSliderStoreContext()

  return (
    <nav className="slider__nav">
      <button type="button" className="slider__nav__btn slider__nav__btn--prev" onClick={goToPrevious}>
        Previous
      </button>
      <IoChevronBack className={'slider__nav__btn-icon'} onClick={goToPrevious} />

      <button type="button" className="slider__nav__btn slider__nav__btn--next" onClick={goToNext}>
        Next
      </button>
      <IoChevronForward className={'slider__nav__btn-icon'} onClick={goToNext} />
    </nav>
  )
}
export default observer(Nav)
