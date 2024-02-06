import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './index.module.scss'
import classNames from 'classnames'

const urls = {
  linkedin: 'https://www.linkedin.com/in/jasoncsmithweb/',
  gitHub: 'https://github.com/jasoncsmith/',
}

function Footer() {
  return (
    <footer className={styles.app__footer}>
      <p className={styles.footer__author}>JASON SMITH</p>

      <nav className={styles.footer__nav}>
        <a
          className={classNames({
            [styles.footer__link]: true,
            [styles['footer__link-gitHub']]: true,
          })}
          rel="noreferrer"
          href={urls.gitHub}
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className={classNames({
            [styles.footer__link]: true,
            [styles['footer__link-linkedin']]: true,
          })}
          rel="noreferrer"
          href={urls.linkedin}
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </nav>

      <p className={styles.footer__copyright}>
        &copy;{new Date().getFullYear()}&nbsp;|&nbsp;jason smith&nbsp;|&nbsp;All rights reserved...
      </p>
    </footer>
  )
}

export default Footer
