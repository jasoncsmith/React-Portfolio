import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useUIStoreContext } from '../../contexts/ui'

import Nav from '../Nav'
import styles from './index.module.scss'
import Logo from '../Logo'

function Header() {
  const { isNavOpen, shouldHideHeader } = useUIStoreContext()

  return (
    <header
      className={classNames([styles.app__header], {
        [styles['app__header--hidden']]: shouldHideHeader,
        [styles['app__header--nav-open']]: isNavOpen,
      })}
    >
      <Logo />
      <Nav />
    </header>
  )
}

export default observer(Header)
