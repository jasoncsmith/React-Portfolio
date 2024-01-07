import './index.scss'

export interface NavProps {
  onPrevious: () => void
  onNext: () => void
}

const Nav = ({ onPrevious, onNext }: NavProps) => {
  return (
    <nav className="slider__nav">
      <button type="button" className="slider__nav__btn slider__nav__btn--prev" onClick={onPrevious}>
        Previous
      </button>

      <button type="button" className="slider__nav__btn slider__nav__btn--next" onClick={onNext}>
        Next
      </button>
    </nav>
  )
}
export default Nav
