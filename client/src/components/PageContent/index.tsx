import { ReactNode } from 'react'
import './index.scss'

interface ContentPageProps {
  children: ReactNode
}

function ContentPage({ children }: ContentPageProps) {
  return <main className="app__content">{children}</main>
}

export default ContentPage
