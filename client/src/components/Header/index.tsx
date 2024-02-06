import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useUIStoreContext } from '../../contexts/ui'

import Nav from '../Nav'
import styles from './index.module.scss'

function Header() {
  const [hidden, setHidden] = useState(false)
  const { scrollY, scrollingDown } = useUIStoreContext()

  useEffect(() => {
    setHidden(scrollY > 35 && scrollingDown)
  }, [scrollY, scrollingDown])

  return (
    <header className={classNames({ [styles.app__header]: true, [styles['app__header--hidden']]: hidden })}>
      <Nav />
    </header>
  )
}

export default observer(Header)
