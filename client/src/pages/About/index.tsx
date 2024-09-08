import Page from '../../components/Layout/Page'
import AboutMe from '../../components/About'
import StarField from '../../components/Starfield'

import styles from './index.module.scss'
import Lake from '../../components/About/components/Lake'

function About() {
  return (
    <Page className={styles.page}>
      <Page.Header
        title={
          <span className={styles.title}>
            {/* <span className={styles.title__of}> of </span> */}
            <span className={styles.title__name}>
              <strong className={styles.title__caption}>Portfolio</strong>
              Jason Smith
              <strong className={styles.title__profession}>Frontend Developer</strong>
            </span>
          </span>
        }
      />

      <Page.Content>
        <StarField />
        <AboutMe />
        <Lake />
      </Page.Content>
    </Page>
  )
}

export default About
