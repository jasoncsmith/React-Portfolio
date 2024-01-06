import { createHashRouter } from 'react-router-dom';

import App from './views/App';
import Work from './views/Work';
import About from './views/About';
import Contact from './views/Contact';
import Four04 from './views/Four04';

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
