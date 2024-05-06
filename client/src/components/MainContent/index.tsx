import { ReactNode } from 'react'
import styles from './index.module.scss'

interface ContentMainProps {
  children: ReactNode
}

function ContentMain({ children }: ContentMainProps) {
  return <main className={styles.app__content}>{children}</main>
}

export default ContentMain
