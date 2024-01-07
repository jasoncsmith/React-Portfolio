import { ImageProps } from '../Image/Index'
import './index.scss'

export interface Slide {
  id: number
  projectName: string
  client: string
  skills: string
  year: number
  image: ImageProps
}

interface CaptionProps {
  isUpdating: boolean
  slide: Slide
}

const Caption = ({ isUpdating, slide }: CaptionProps) => (
  <div className={isUpdating ? 'caption-display__caption caption--is-updating' : 'caption-display__caption'}>
    <h5 className="caption__subtitle">Client</h5>
    <p className="caption__client-name">{slide.client}</p>

    <h5 className="caption__subtitle">Project</h5>
    <p>
      {slide.projectName} ({slide.year})
    </p>

    <h5 className="caption__subtitle">Skills</h5>
    <p>{slide.skills}</p>
  </div>
)

export default Caption
