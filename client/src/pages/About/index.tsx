import Page from '../../components/Layout/Page'
import AboutMe from '../../components/About'

import styles from './index.module.scss'

function About() {
  return (
    <Page className={styles.page}>
      <Page.Header
        title={
          <span className={styles.title}>
            <strong className="caption">Portfolio</strong>
            <span className={styles.title__of}> of </span>
            <br />
            <strong className="name">Jason Smith</strong>
          </span>
        }
      />
      <Page.Content>
        <AboutMe />
      </Page.Content>
    </Page>
  )
}

export default About
