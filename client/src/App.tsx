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

const formatWidth = (width: number): string => (width >= 1000 ? 1000 + 'px' : width - 32 + 'px')

export default function App() {
  const [currentWidth, setCurrentWidth] = useState(formatWidth(window.innerWidth))
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(formatWidth(window.innerWidth))
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
