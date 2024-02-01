import { SLIDE_WIDTH } from '../../constants'
import './index.scss'

export interface ImageProps {
  width?: string
  height?: string
  alt: string
  name: string
}

const SlideImage = ({ name, alt, width = SLIDE_WIDTH }: ImageProps) => {
  return <img className="slider__slide" src={`images/${name}`} alt={alt} title={alt} />
}
export default SlideImage
