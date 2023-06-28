import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.scss';

const urls = {
    linkedin: 'https://www.linkedin.com/in/jasoncsmithweb/',
    gitHub: 'https://github.com/jasoncsmith/',
};

function Footer() {
    return (
        <footer className="app__footer">
            <p className="footer__author">JASON SMITH</p>

            <nav className="footer__nav">
                <a
                    className="footer__link footer__link-gitHub"
                    rel="noreferrer"
                    href={urls.gitHub}
                    target="_blank"
                >
                    <FaGithub />
                </a>
                <a
                    className="footer__link footer__link-linkedin"
                    rel="noreferrer"
                    href={urls.linkedin}
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
            </nav>

            <p className="footer__copyright">
                &copy;{new Date().getFullYear()}&nbsp;|&nbsp;jason
                smith&nbsp;|&nbsp;All rights reserved...
            </p>
        </footer>
    );
}

export default Footer;
