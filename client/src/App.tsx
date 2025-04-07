// root route" since the rest of routes will render inside of it
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import UIStore, { UIStoreContext } from './contexts/ui'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Main from './components/Layout/Main'
import Logo from './components/Logo'
import Nav from './components/Nav'

export default function App() {
  const [currentWidth, setCurrentWidth] = useState(`${window.innerWidth}px`)
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(`${window.innerWidth}px`)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <UIStoreContext.Provider value={UIStore}>
      <div className="app" style={{ '--global-viewport-width': currentWidth } as React.CSSProperties}>
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
