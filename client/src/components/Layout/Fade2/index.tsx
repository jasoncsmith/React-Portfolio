import React, { ReactNode, useEffect, useState } from 'react'
import './index.scss'
/**
 * accredation: https://czaplinski.io/blog/super-easy-animation-with-react-hooks/
 */
const Fade = ({ show, speed = '0.3s', children }: { show: boolean; speed?: string; children: ReactNode }) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return shouldRender ? (
    <div style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} ${speed}` }} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  ) : null
}

export default Fade
