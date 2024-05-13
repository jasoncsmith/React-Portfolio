// root route" since the rest of routes will render inside of it
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'
import { ToastContainer } from 'react-toastify'
import UIStore, { UIStoreContext } from './contexts/ui'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Main from './components/Layout/Main'
import Logo from './components/Logo'
import Nav from './components/Nav'

export default function App() {
  const { ref, width: observerWidth = 1 } = useResizeObserver<HTMLDivElement>()
  const [width, setWidth] = useState('100%')
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setWidth(`${observerWidth}px`)
  }, [observerWidth])

  return (
    <UIStoreContext.Provider value={UIStore}>
      <div ref={ref} className="app" style={{ '--global-viewport-width': width } as React.CSSProperties}>
        <Header>
          <Logo />
          <Nav />
        </Header>
        <Main>
          <ToastContainer />
          <Outlet />
        </Main>
        <Footer />
      </div>
    </UIStoreContext.Provider>
  )
}
