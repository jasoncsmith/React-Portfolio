import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Icon from '../../../Icon'
import styles from './index.module.scss'
import React from 'react'

interface NavItemProps {
  className?: string
  href: string
  icon:
    | 'IoCogOutline'
    | 'IoMailOutline'
    | 'IoDocumentOutline'
    | 'IoShareSocialOutline'
    | 'IoLayersOutline'
    | 'FaLinkedin'
    | 'FaGithub'
  onClick: (e: React.MouseEvent) => void
  children: string
  isOffSite?: boolean
}

const NavItem = ({ href, icon, onClick, children, isOffSite = false }: NavItemProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles['nav-item'], {
          [styles['nav-item--is-active']]: isActive,
          [styles['nav-item--is-offsite']]: isOffSite === true,
        })
      }
      to={href}
      onClick={onClick}
      referrerPolicy={isOffSite ? 'no-referrer' : undefined}
      target={isOffSite ? '_blank' : undefined}
    >
      <span className={styles['nav-item__wrap']}>
        <Icon
          iconName={icon}
          className={classNames(styles['nav-item__icon'], styles[`nav-item__icon--${icon}`])}
        />
        {children}
      </span>
      {isOffSite && <Icon iconName={'IoExitOutline'} />}
    </NavLink>
  )
}

export default NavItem
