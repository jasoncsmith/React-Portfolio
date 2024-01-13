import pdf from '../../assets/resume-jasonsmith-01_2024.pdf'
import './index.scss'
function Resume() {
  return (
    <div id="view-resume">
      <header className="view__header">
        <h2>Resume</h2>
      </header>
      <div className={'document-viewer'}>
        <object data={pdf} type="application/pdf" width="100%" height="700px" aria-label="resume"></object>
      </div>
    </div>
  )
}

export default Resume
