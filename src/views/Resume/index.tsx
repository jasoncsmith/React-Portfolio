// import pdf from '../../assets/RecipientDesignation.pdf'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import useResizeObserver from 'use-resize-observer'

import Loader from '../../components/Loader'
import pdf from '../../assets/resume-jasonsmith-01_2024.pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import './index.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

function Resume() {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>()
  const [width_, setWidth_] = useState(1)
  const [numPages, setNumPages] = useState(0)

  useEffect(() => {
    setWidth_(width)
  }, [width])

  return (
    <div id="view-resume">
      <header className="view__header">
        <h2>Resume</h2>
      </header>
      <div ref={ref} className={'document-viewer'}>
        <Document
          className={'pdf-document'}
          file={pdf}
          loading={<Loader />}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {[...Array(numPages)].map((_, i) => (
            <Page
              key={`pdf_${i}_${width}`}
              className={'pdf-page'}
              renderMode={'svg'}
              width={width_}
              pageNumber={i + 1}
              renderTextLayer={false}
              loading={<Loader />}
            />
          ))}
        </Document>
      </div>
    </div>
  )
}

export default Resume
