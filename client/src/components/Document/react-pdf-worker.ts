import { pdfjs } from 'react-pdf'

// versions mismatch with the react-pdf versions so you have to ensure you load the correct version of pdfjs-dist
// has been pain to find the correct version check the react-pdf repo on npm for instructions
// https://www.npmjs.com/package/react-pdf/v/9.2.1

export default pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
