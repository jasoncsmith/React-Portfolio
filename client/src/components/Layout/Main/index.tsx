import React from 'react'
import styles from './index.module.scss'

interface MainProps {
  children: React.ReactNode
}

function Main({ children }: MainProps) {
  return <main className={styles.app__content}>{children}</main>
}

export default Main
