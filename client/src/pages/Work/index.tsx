import Page from '../../components/Layout/Page'
import Slider from '../../components/Slider'
import styles from './index.module.scss'

function Work() {
  return (
    <Page className={styles.page}>
      <Page.Header title="Work" tagline="Featuring my Custom-Built Responsive React Carousel" />
      <Page.Content>
        <Slider />
      </Page.Content>
    </Page>
  )
}

export default Work
