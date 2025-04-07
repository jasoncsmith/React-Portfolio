import pdf from '../../assets/docs/jasonsmithfullstack.pdf'

import Page from '../../components/Layout/Page'
import Document from '../../components/Document'
import Fade from '../../components/Layout/Fade'
import Button from '../../components/Button'

import styles from './index.module.scss'
import { useEffect, useState } from 'react'

const formatWidth = (width: number) => (width >= 1000 ? 1000 : width - 32)

function Resume() {
  const [currentWidth, setCurrentWidth] = useState(formatWidth(window.innerWidth))

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(formatWidth(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Page className={styles.page}>
      <Page.Header title="Resume" />
      <Page.Content>
        <Fade>
          <div className={styles['document-viewer']}>
            <Button
              buttonType="link"
              href={pdf}
              iconName={'BsDownload'}
              className={styles['document-viewer__button']}
              title="Download Resume"
            >
              Download
            </Button>
            <Document width={currentWidth} file={pdf} className={styles['react-pdf-viewer']} />
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
