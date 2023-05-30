import { NavLink } from 'react-router-dom';
import './nav.scss';

function Nav() {
    return (
        <nav className="app__nav">
            <NavLink
                className="app-nav__link about"
                to="/about"
                style={{ textAlign: 'center' }}
            >
                <span className="nav__glyph share"></span>About
            </NavLink>

            <NavLink
                className="app-nav__link work"
                to="/work"
                style={{ textAlign: 'center' }}
            >
                <span className="nav__glyph cog"></span>Work
            </NavLink>

            <NavLink
                className="app-nav__link contact"
                to="/contact"
                style={{ textAlign: 'center' }}
            >
                <span className="nav__glyph mail"></span>Contact
            </NavLink>

            <NavLink
                className="app-nav__link resume"
                to="/resume"
                style={{ textAlign: 'center' }}
            >
                <span className="nav__glyph document_alt_fill"></span>Resume
            </NavLink>
        </nav>
    );
}

export default Nav;
