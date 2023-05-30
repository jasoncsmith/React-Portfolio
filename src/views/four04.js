import { useRouteError } from 'react-router-dom';
import './four04.scss';

const Four04 = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div id="error-404">
            <h1>404</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default Four04;
