import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
// import {RouterProvider} from 'react-router-dom'
import './index.css' // import first so less specificity

import App from './views/App'
import Work from './views/Work'
import About from './views/About'
import Contact from './views/Contact'
import Resume from './views/Resume'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Route>
    </Routes>
  </HashRouter>
)
