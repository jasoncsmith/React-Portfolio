// root route" since the rest of routes will render inside of it
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'
import { ToastContainer } from 'react-toastify'
import UIStore, { UIStoreContext } from '../../contexts/ui'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './index.scss'

export default function App() {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>()
  const [width_, setWidth_] = useState('100%')

  useEffect(() => {
    setWidth_(`${width}px`)
  }, [width])

  return (
    <UIStoreContext.Provider value={UIStore}>
      <div ref={ref} className="app" style={{ '--global-viewport-width': width_ } as React.CSSProperties}>
        <Header />
        <main className="app__content">
          <ToastContainer />
          <Outlet />
        </main>
        <Footer />
      </div>
    </UIStoreContext.Provider>
  )
}
