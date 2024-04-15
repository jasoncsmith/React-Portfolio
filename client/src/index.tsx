import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.scss'

const App = lazy(() => import('./views/App'))
const Work = lazy(() => import('./views/Work'))
const About = lazy(() => import('./views/About'))
const Contact = lazy(() => import('./views/Contact'))
const Resume = lazy(() => import('./views/Resume'))

import LoaderFullPage from './components/LoaderFullPage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Suspense fallback={<LoaderFullPage />}>
      <QueryClientProvider client={new QueryClient({})}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Navigate replace to={'about'} />} />
              <Route path="about" element={<About />} />
              <Route path="work" element={<Work />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume />} />

              <Route path="*" element={<Navigate replace to="/about" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  </StrictMode>
)
