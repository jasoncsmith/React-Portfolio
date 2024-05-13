import React from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useUIStoreContext } from '../../../contexts/ui'

import styles from './index.module.scss'

function Header({ children }: { children: React.ReactNode }) {
  const { isNavOpen, shouldHideHeader, scrollY } = useUIStoreContext()

  return (
    <header
      className={classNames([styles.app__header], {
        [styles['app__header--hidden']]: shouldHideHeader,
        [styles['app__header--solid-bg']]: isNavOpen || scrollY > 150,
      })}
    >
      {children}
    </header>
  )
}

export default observer(Header)
