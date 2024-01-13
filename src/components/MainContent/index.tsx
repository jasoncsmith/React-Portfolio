import React, { ReactNode } from 'react'
import './index.scss'
interface ContentMainProps {
  children: ReactNode
}

function ContentMain({ children }: ContentMainProps) {
  return <main className="app__content">{children}</main>
}

export default ContentMain
