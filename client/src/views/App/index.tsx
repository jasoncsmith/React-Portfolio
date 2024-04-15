// root route" since the rest of routes will render inside of it
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'
import { ToastContainer } from 'react-toastify'
import UIStore, { UIStoreContext } from '../../contexts/ui'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function App() {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>()
  const [width_, setWidth_] = useState('100%')
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathname])

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
