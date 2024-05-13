import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import LoaderFullPage from './components/LoaderFullPage'

import './index.scss'
import Four04 from './pages/Four04'

const App = lazy(() => import('./App'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,

    children: [
      {
        path: '/',
        element: <Navigate to="about" replace />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: '*',
        element: <Four04 />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Suspense fallback={<LoaderFullPage />}>
      <QueryClientProvider client={new QueryClient({})}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  </StrictMode>
)
