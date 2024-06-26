import { Document, Page, pdfjs, DocumentProps } from 'react-pdf'
import { useState } from 'react'
import classNames from 'classnames'

import Loader from '../Loader'

import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import styles from './index.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

interface DocProps extends DocumentProps {
  width: number
  className?: string
}

const _Document = ({ width, file, className = '' }: DocProps) => {
  const [numPages, setNumPages] = useState(0)

  return (
    <Document
      file={file}
      className={classNames({
        [className]: !!className,
      })}
      loading={<Loader className={styles['pdf-loader']} />}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {[...Array(numPages)].map((_, i) => (
        <Page
          key={`pdf_${i}_${width}`}
          className={styles['pdf-page']}
          width={width - 4} // better way to subtract for border
          pageNumber={i + 1}
          renderMode={'svg'}
          renderTextLayer={false}
          loading={<Loader />}
        />
      ))}
    </Document>
  )
}

export default _Document
