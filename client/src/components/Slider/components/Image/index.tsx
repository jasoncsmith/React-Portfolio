// import { SLIDE_WIDTH } from '../../constants'
import styles from './index.module.scss'

export interface ImageProps {
  width?: string
  height?: string
  alt: string
  name: string
}

const SlideImage = ({ name, alt }: ImageProps) => {
  return <img className={styles.slider__slide} src={`images/${name}`} alt={alt} title={alt} />
}
export default SlideImage
