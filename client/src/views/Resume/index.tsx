import useResizeObserver from 'use-resize-observer'

import pdf from '../../assets/docs/jasonsmith-frontend.pdf'

import Document from '../../components/Document'
import Button from '../../components/Button'
import Fade from '../../components/Layout/Fade'

import styles from './index.module.scss'

function Resume() {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>()

  return (
    <div className={styles['view-resume']}>
      <header className={styles['view__header']}>
        <h2>Resume</h2>
      </header>
      <section>
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
      </section>
    </div>
  )
}

export default Resume
