import useResizeObserver from 'use-resize-observer'

import pdf from '../../assets/docs/jasonsmith-frontend.pdf'

import Page from '../../components/Layout/Page'
import Document from '../../components/Document'
import Fade from '../../components/Layout/Fade'
import Button from '../../components/Button'

import styles from './index.module.scss'

function Resume() {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>()

  return (
    <Page className={styles.page}>
      <Page.Header title="Resume" />
      <Page.Content>
        <Fade>
          <div ref={ref} className={styles['document-viewer']}>
            <Button
              buttonType="link"
              href={pdf}
              iconName={'BsDownload'}
              className={styles['document-viewer__button']}
              title="Download Resume"
            >
              Download
            </Button>
            <Document width={width} file={pdf} className={styles['react-pdf-viewer']} />
            <Button
              buttonType="link"
              href={pdf}
              iconName={'BsDownload'}
              className={styles['document-viewer__button']}
              title="Download Resume"
            >
              Download
            </Button>
          </div>
        </Fade>
      </Page.Content>
    </Page>
  )
}

export default Resume
