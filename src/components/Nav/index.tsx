import { NavLink } from 'react-router-dom'
import './index.scss'

interface IconProps {
  icon: string
  children: string
}

const Icon = ({ icon, children }: IconProps) => (
  <span>
    <span className={`nav__glyph ${icon}`}></span>
    {children}
  </span>
)

interface NavItemProps {
  className: string
  href: string
  icon: string
  text: string
}

const NavItem = ({ className, href, icon, text }: NavItemProps) => {
  return (
    <NavLink className={`app-nav__link ${className}`} to={href}>
      <Icon icon={icon}>{text}</Icon>
    </NavLink>
  )
}

function Nav(): JSX.Element {
  return (
    <nav className="app__nav">
      <NavItem className="about" href="/about" icon="share" text="About" />
      <NavItem className="work" href="/work" icon="cog" text="Work" />
      <NavItem className="contact" href="/contact" icon="mail" text="Contact" />
      <NavItem className="resume" href="/resume" icon="document_alt_fill" text="Resume" />
    </nav>
  )
}

export default Nav
