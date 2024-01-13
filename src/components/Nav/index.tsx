import { NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import classNames from 'classnames'

interface IconProps {
  icon: string
  children?: string
}

const Icon = ({ icon, children }: IconProps) => <span className={`nav__glyph ${icon}`}>{children}</span>

interface NavItemProps {
  className: string
  href: string
  icon: string
  text: string
  onClick: () => void
}

const NavItem = ({ className, href, icon, text, onClick }: NavItemProps) => {
  return (
    <NavLink className={`app-nav__link ${className}`} to={href} onClick={onClick}>
      <Icon icon={icon} />
      {text}
    </NavLink>
  )
}

function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(open => !open)
  }

  return (
    <nav className="app__nav">
      <div
        onClick={handleClick}
        className={classNames({ 'app-nav__trigger': true, 'app-nav__trigger--is-active': isOpen })}
      >
        <Icon icon="layers" />
      </div>
      <div className={classNames({ 'app-nav__wrapper': true, 'app-nav__wrapper--is-open': isOpen })}>
        <NavItem onClick={handleClick} className="about" href="/about" icon="share" text="About" />
        <NavItem onClick={handleClick} className="work" href="/work" icon="cog" text="Work" />
        <NavItem onClick={handleClick} className="contact" href="/contact" icon="mail" text="Contact" />
        <NavItem onClick={handleClick} className="resume" href="/resume" icon="document_alt_fill" text="Resume" />
      </div>
    </nav>
  )
}

export default Nav
