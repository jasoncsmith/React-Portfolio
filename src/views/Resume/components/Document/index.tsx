import { Document, Page, pdfjs, DocumentProps } from 'react-pdf'

import { useState } from 'react'

import Loader from '../../../../components/Loader'

import './index.scss'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

interface DocProps extends DocumentProps {
  width: number
}

const _Document = ({ width, file }: DocProps) => {
  const [numPages, setNumPages] = useState(0)

  return (
    <Document
      file={file}
      className={'pdf-document'}
      loading={<Loader className={'document-viewer__loader'} />}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {[...Array(numPages)].map((_, i) => (
        <Page
          key={`pdf_${i}_${width}`}
          className={'pdf-page'}
          width={width - 4} // better way to subtract for border
          pageNumber={i + 1}
          renderMode={'svg'}
          renderTextLayer={false}
          loading={<Loader className={'document-viewer__loader'} />}
        />
      ))}
    </Document>
  )
}

export default _Document
