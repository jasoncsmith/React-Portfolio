import React from 'react'
import styles from './index.module.scss'

interface PageProps {
  children: React.ReactNode
  className?: string
}
interface HeaderProps {
  children?: React.ReactNode
  title: string | React.ReactNode
  tagline?: string
  className?: string
}

function Page({ children, className = '' }: PageProps) {
  return <div className={`${styles.page} ${className}`}>{children}</div>
}

function Header({ children, title, tagline, className = '' }: HeaderProps) {
  return (
    <div className={`${styles.page__header} ${className}`}>
      <h1>{title}</h1>
      {!!tagline && <h5 className={styles.header__tagline}>{tagline}</h5>}
      {children}
    </div>
  )
}

function Content({ children }: PageProps) {
  return <section className={styles.page__content}>{children}</section>
}

function Footer({ children }: PageProps) {
  return <div className={styles.page__footer}>{children}</div>
}

Page.Header = Header
Page.Content = Content
Page.Footer = Footer

export default Page
