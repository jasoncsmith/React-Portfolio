import SlideImage, { ImageProps } from '../Image/Index'
import './index.scss'

interface ViewPortProps {
  isAnimatingRight: boolean
  isAnimatingLeft: boolean
  slideImagePrev: ImageProps
  slideImageCurrent: ImageProps
  slideImageNext: ImageProps
}

const ViewPort = ({
  isAnimatingRight,
  isAnimatingLeft,
  slideImagePrev,
  slideImageCurrent,
  slideImageNext,
}: ViewPortProps) => (
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
      <SlideImage {...slideImagePrev} />
      <SlideImage {...slideImageCurrent} />
      <SlideImage {...slideImageNext} />
    </div>
  </div>
)

export default ViewPort
