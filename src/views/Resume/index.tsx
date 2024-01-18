import useResizeObserver from 'use-resize-observer'

import pdf from '../../assets/docs/resume-jasonsmith-01_2024.pdf'
import Document from './components/Document'
import { BsDownload } from 'react-icons/bs'
import './index.scss'

function Resume() {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>()

  return (
    <div id="view-resume">
      <header className="view__header">
        <h2>Resume</h2>
      </header>

      <div ref={ref} className={'document-viewer'}>
        <a className="download-link" href={pdf} target="_blank" rel="noreferrer" title="Download Resume">
          Download <BsDownload className={'download-link__svg'} />
        </a>
        <Document width={width} file={pdf} />
        <a className="download-link" href={pdf} target="_blank" rel="noreferrer" title="Download Resume">
          Download <BsDownload className={'download-link__svg'} />
        </a>
      </div>
    </div>
  )
}

export default Resume
