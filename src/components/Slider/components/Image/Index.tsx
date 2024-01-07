const slideWidth = 495

export interface ImageProps {
  width: string
  height: string
  alt: string
  name: string
}

const SlideImage = ({ name, alt }: ImageProps) => {
  return <img className="slider__slide" src={`images/${name}`} alt={alt} title={alt} height={350} width={slideWidth} />
}
export default SlideImage
