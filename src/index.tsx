import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// import {RouterProvider} from 'react-router-dom'
import App from './App';
import Work from './views/work';
import About from './views/about';
import Contact from './views/contact';
import Resume from './views/resume';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <HashRouter>
        <Routes>
            <Route
                path="/"
                element={<App />}
            >
                <Route
                    index
                    element={<About />}
                />
                <Route
                    path="about"
                    element={<About />}
                />
                <Route
                    path="work"
                    element={<Work />}
                />
                <Route
                    path="contact"
                    element={<Contact />}
                />
                <Route
                    path="resume"
                    element={<Resume />}
                />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/about"
                            replace
                        />
                    }
                />
            </Route>
        </Routes>
    </HashRouter>
);
