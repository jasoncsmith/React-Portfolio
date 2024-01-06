import './index.scss';
import Slider from '../../components/Slider';

function Work() {
    return (
        <div
            id="view-work"
            className="view"
        >
            <header>
                <h2>.Work.</h2>
                <h5 className="pt-1 text-slate-400">
                    Featuring my custom React Carousel
                </h5>
            </header>

            <Slider />
        </div>
    );
}
export default Work;
