import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

interface FadeProps {
  animationToggle?: boolean
  animationTranslate?: boolean
  children: React.ReactNode
}

const Fade = ({ children, animationToggle = false, animationTranslate = true }: FadeProps) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref?.current
    if (!currentRef) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (animationToggle === true) {
          setIsVisible(entry.isIntersecting)
        } else {
          entry.isIntersecting && setIsVisible(true)
        }
      })
    })

    observer.observe(currentRef)

    return () => observer.unobserve(currentRef)
  })

  return (
    <div
      ref={ref}
      className={classNames({
        [styles.base]: true,
        [styles['base--is-hidden']]: !isVisible,
        [styles['base--has-translate']]: animationTranslate,
      })}
    >
      {children}
    </div>
  )
}

export default Fade
