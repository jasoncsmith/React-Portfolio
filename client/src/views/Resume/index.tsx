import useResizeObserver from 'use-resize-observer'

import pdf from '../../assets/docs/resume-jasonsmith-01_2024.pdf'
import Document from '../../components/Document'
import Button from '../../components/Button'
import Fade from '../../components/Fade'

import './index.scss'

function Resume() {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>()

  return (
    <div id="view-resume">
      <header className="view__header">
        <h2>Resume</h2>
      </header>

      <Fade>
        <div ref={ref} className={'document-viewer'}>
          <Button
            buttonType="link"
            href={pdf}
            iconName={'BsDownload'}
            className={'document-viewer__button'}
            title="Download Resume"
          >
            Download
          </Button>
          <Document width={width} file={pdf} />
          <Button
            buttonType="link"
            href={pdf}
            iconName={'BsDownload'}
            className={'document-viewer__button'}
            title="Download Resume"
          >
            Download
          </Button>
        </div>
      </Fade>
    </div>
  )
}

export default Resume
