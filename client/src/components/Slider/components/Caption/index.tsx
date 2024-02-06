import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useSliderStoreContext } from '../../contexts'

import styles from './index.module.scss'

const Caption = () => {
  const { isAnimatingRight, isAnimatingLeft, slides, index } = useSliderStoreContext()

  const slide = slides?.[index]

  if (!slide) {
    return null
  }

  return (
    <div
      className={classNames({
        [styles['caption-display__caption']]: true,
        [styles['caption--is-updating']]: isAnimatingRight || isAnimatingLeft,
      })}
    >
      <h5 className={styles.caption__subtitle}>Client</h5>
      <p className={styles['caption__client-name']}>{slide.client}</p>

      <h5 className={styles.caption__subtitle}>Project</h5>
      <p>
        {slide.projectName} ({slide.year})
      </p>

      <h5 className={styles.caption__subtitle}>Skills</h5>
      <p>{slide.skills}</p>
    </div>
  )
}

export default observer(Caption)
