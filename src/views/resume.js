import pdf from '../assets/jasoncsmith-resume-2023-05-26.pdf';
import './resume.scss';

function Resume() {
    return (
        <div id="view-resume">
            <embed
                src={pdf}
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="600px"
                width="100%"
            ></embed>
        </div>
    );
}

export default Resume;