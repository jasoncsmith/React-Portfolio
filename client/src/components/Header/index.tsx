import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import { useUIStoreContext } from '../../contexts/ui'

import Nav from '../Nav'
import './index.scss'

function Header() {
  const [hidden, setHidden] = useState(false)
  const { scrollY, scrollingDown } = useUIStoreContext()

  useEffect(() => {
    setHidden(scrollY > 35 && scrollingDown)
  }, [scrollY, scrollingDown])

  return (
    <header className={classNames({ app__header: true, 'app__header--hidden': hidden })}>
      <Nav />
    </header>
  )
}

export default observer(Header)