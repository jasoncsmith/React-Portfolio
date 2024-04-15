import { ReactNode } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import { useSliderStoreContext } from '../../contexts'

import styles from './index.module.scss'

interface CaptionContainerProps {
  children: ReactNode
}

const CaptionContainer = ({ children }: CaptionContainerProps) => {
  const { isCaptionHiding, isCaptionHidden, isCaptionShowing, slides } = useSliderStoreContext()

  if (!slides?.length) {
    return null
  }

  return (
    <div
      className={classNames({
        [styles['slider__caption-display']]: true,
        [styles['slider__caption-display--is-hidden']]: isCaptionHidden,
        [styles['slider__caption-display--is-hiding']]: isCaptionHiding,
        [styles['slider__caption-display--is-showing']]: isCaptionShowing,
      })}
    >
      {children}

      <div className={styles['caption-display__links']}></div>
    </div>
  )
}

export default observer(CaptionContainer)
