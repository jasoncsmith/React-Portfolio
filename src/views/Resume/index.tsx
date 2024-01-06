import pdf from '../../assets/resume-jasonsmith-01_2024.pdf';
import './index.scss';
function Resume() {
    return (
        <div id="view-resume">
            <embed
                src={pdf}
                type="application/pdf"
                height="600px"
                width="100%"
            ></embed>
        </div>
    );
}

export default Resume;
