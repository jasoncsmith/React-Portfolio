import Icon from '../Icon'
import styles from './index.module.scss'
import classNames from 'classnames'

export const urls = {
  linkedin: 'https://www.linkedin.com/in/jasoncsmithweb/',
  gitHub: 'https://github.com/jasoncsmith/',
}

function Footer() {
  return (
    <footer className={styles.app__footer}>
      <div className={styles.footer__container}>
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
            <Icon iconName="FaGithub" />
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
            <Icon iconName="FaLinkedin" />
          </a>
        </nav>

        <p className={styles.footer__copyright}>
          &copy;{new Date().getFullYear()}&nbsp;|&nbsp;jason smith&nbsp;|&nbsp;All rights reserved...
        </p>
      </div>
    </footer>
  )
}

export default Footer
