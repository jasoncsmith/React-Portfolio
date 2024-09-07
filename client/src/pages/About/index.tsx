import Page from '../../components/Layout/Page'
import AboutMe from '../../components/About'
import StarField from '../../components/Starfield'

import styles from './index.module.scss'

function About() {
  return (
    <Page className={styles.page}>
      <Page.Header
        title={
          <span className={styles.title}>
            <strong className={styles.title__caption}>Portfolio</strong>
            <span className={styles.title__of}> of </span>
            <br />
            <strong className={styles.tite__name}>Jason Smith</strong>
          </span>
        }
      />

      <Page.Content>
        <StarField />
        <AboutMe />
      </Page.Content>
    </Page>
  )
}

export default About
