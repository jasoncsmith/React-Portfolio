import { createHashRouter } from 'react-router-dom';
import App from './App';
import Work from './views/work';
import About from './views/about';
import Contact from './views/contact';
import Four04 from './views/four04';

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Four04 />,
        children: [
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/work',
                element: <Work />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

export default router;
