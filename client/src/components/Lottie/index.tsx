import Lottie, { LottieComponentProps, LottieRefCurrentProps } from 'lottie-react'
import React, { useEffect, useRef } from 'react'
import loader from '../../assets/loader/loader-lottie-dots.json'
import styles from './index.module.scss'

const LottieLoader = ({ ...props }: Omit<LottieComponentProps, 'animationData'>) => {
  const ref = useRef<LottieRefCurrentProps>(null)

  // useEffect(() => {
  //   const r = ref?.current
  //   if (r) {
  //     r.setSpeed(3)
  //   }
  // }, [ref])

  return <Lottie animationData={loader} className={styles.lottie} lottieRef={ref} {...props} />
}

export default LottieLoader
