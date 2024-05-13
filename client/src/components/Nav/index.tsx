import React from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react'

import { useUIStoreContext } from '../../contexts/ui'
import { urls } from '../Layout/Footer'

import NavTrigger from './components/NavTrigger'
import NavItem from './components/NavItem'

import styles from './index.module.scss'

function Nav(): React.JSX.Element {
  const { isNavOpen, setIsNavOpen } = useUIStoreContext()

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation()

    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className={styles['app-nav']}>
      <NavTrigger isActive={isNavOpen} onClick={handleClick} />

      <div
        onClick={handleClick}
        className={classNames(styles['app-nav__wrapper'], {
          [styles['app-nav__wrapper--is-nav-open']]: isNavOpen,
        })}
      >
        <NavItem onClick={handleClick} href="/about" icon="IoShareSocialOutline">
          About
        </NavItem>
        <NavItem onClick={handleClick} href="/work" icon="IoCogOutline">
          Work
        </NavItem>
        <NavItem onClick={handleClick} href="/contact" icon="IoMailOutline">
          Contact
        </NavItem>
        <NavItem onClick={handleClick} href="/resume" icon="IoDocumentOutline">
          Resume
        </NavItem>

        <hr />

        <NavItem onClick={handleClick} icon="FaGithub" href={urls.gitHub} isOffSite={true}>
          GitHub
        </NavItem>
        <NavItem onClick={handleClick} icon="FaLinkedin" href={urls.linkedin} isOffSite={true}>
          Linked In
        </NavItem>
      </div>
    </nav>
  )
}
export default observer(Nav)
