import { observer } from 'mobx-react'

import { useSliderStoreContext } from '../../contexts'

import './index.scss'

const Caption = () => {
  const { isAnimatingRight, isAnimatingLeft, slides, index } = useSliderStoreContext()
  const slide = slides[index]

  return (
    <div
      className={
        isAnimatingRight || isAnimatingLeft
          ? 'caption-display__caption caption--is-updating'
          : 'caption-display__caption'
      }
    >
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
}

export default observer(Caption)
