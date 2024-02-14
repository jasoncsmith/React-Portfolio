import React from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

function NavTrigger({
  isActive,
  onClick,
}: {
  isActive: boolean
  onClick: (e: React.MouseEvent) => void
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles['nav-trigger'], {
        [styles['nav-trigger--is-active']]: isActive,
      })}
    >
      <div className={styles['nav-trigger__wrapper']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  )
}

export default NavTrigger
