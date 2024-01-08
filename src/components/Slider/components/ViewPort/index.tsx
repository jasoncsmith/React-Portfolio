import SlideImage, { ImageProps } from '../Image/Index'

import './index.scss'

interface ViewPortProps {
  isAnimatingRight: boolean
  isAnimatingLeft: boolean
  previousImage: ImageProps
  currentImage: ImageProps
  nextImage: ImageProps
}

const ViewPort = ({ isAnimatingRight, isAnimatingLeft, previousImage, currentImage, nextImage }: ViewPortProps) => (
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
      <SlideImage {...previousImage} />
      <SlideImage {...currentImage} />
      <SlideImage {...nextImage} />
    </div>
  </div>
)

export default ViewPort
