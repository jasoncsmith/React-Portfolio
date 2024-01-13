// root route" since the rest of routes will render inside of it
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './index.scss'

export default function App() {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>()
  const [width_, setWidth_] = useState('195px')

  useEffect(() => {
    setWidth_(`${width}px`)
  }, [width])

  return (
    <div ref={ref} style={{ '--global-viewport-width': width_ } as React.CSSProperties} className="app">
      <Header />
      <main className="app__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
