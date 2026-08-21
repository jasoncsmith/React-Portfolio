import Page from '../../components/Layout/Page'
import AboutMe from '../../components/About'
import StarField from '../../components/Starfield'

import styles from './index.module.scss'
import Lake from '../../components/About/components/Lake'
import { useEffect } from 'react'
import { useSpace } from '../../components/Starfield/spaceshipAnimation'

function About() {
  const { play } = useSpace()
  useEffect(() => {
    play()
  }, [])

  return (
    <Page className={styles.page}>
      <Page.Header
        className={styles.page__header}
        title={
          <span className={styles.title}>
            <strong className={styles.title__caption}>
              Portfolio <span className={styles.title__of}>of</span>
            </strong>
            <span className={styles.title__name}>Jason Smith</span>
            <strong className={styles.title__profession}>Fullstack Developer</strong>
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
