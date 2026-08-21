import styles from './index.module.scss'

import Star from './components/Star'
import Meteor from './components/Meteor'
import SpaceShip from './components/SpaceShip'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpace } from './spaceshipAnimation'

const config = {
  meteorOneDelay: 1,
  meteorOneDuration: 1,
  meteorOneX: 75,

  meteorTwoDelay: 2,
  meteorTwoDuration: 2,
  meteorTwoX: 87,

  meteorThreeDelay: 3,
  meteorThreeDuration: 5,
  meteorThreeX: 72,
}

const StarField = function () {
  const { playing } = useSpace()
  const timer = useRef<number | null>(null)
  const timer1 = useRef<number | null>(null)
  const timer2 = useRef<number | null>(null)

  const [liftOff, setLiftOff] = useState(false)
  const [liftOffDeathstar, setLiftOffDeathstar] = useState(false)
  const [fireMeteors, setFireMeteors] = useState(false)

  const playAnimation = useCallback(
    function () {
      stopAnimation()

      timer.current = window.setTimeout(setFireMeteors, 15, true)
      timer1.current = window.setTimeout(setLiftOffDeathstar, 3500, true)
      timer2.current = window.setTimeout(setLiftOff, 7500, true)
    },
    [setLiftOff, setLiftOffDeathstar, setFireMeteors]
  )

  const stopAnimation = useCallback(
    function () {
      setLiftOff(false)
      setLiftOffDeathstar(false)
      setFireMeteors(false)

      timer.current !== null && window.clearTimeout(timer.current)
      timer1.current !== null && window.clearTimeout(timer1.current)
      timer2.current !== null && window.clearTimeout(timer2.current)
    },
    [setLiftOff, setLiftOffDeathstar, setFireMeteors]
  )

  useEffect(() => {
    if (playing === true) {
      playAnimation()
    } else {
      stopAnimation()
    }
  }, [playing])

  // TODO: put delay as config on starships? then dont need to cleartiemouts and just one launch command?

  return (
    <div className={styles.starField}>
      {[...Array(6).keys()].map((_, idx) => (
        <Star key={idx} type={idx === 5 ? 'simi' : undefined} />
      ))}
      <Meteor
        launch={fireMeteors}
        delay={config.meteorOneDelay}
        duration={config.meteorOneDuration}
        startX={config.meteorOneX}
      />
      <Meteor
        launch={fireMeteors}
        delay={config.meteorTwoDelay}
        duration={config.meteorTwoDuration}
        startX={config.meteorTwoX}
      />
      <Meteor
        launch={fireMeteors}
        delay={config.meteorThreeDelay}
        duration={config.meteorThreeDuration}
        startX={config.meteorThreeX}
      />

      <SpaceShip type="deathstar" launchMode={liftOffDeathstar} />
      <SpaceShip type="predator" launchMode={liftOff} inline={false} />
    </div>
  )
}

export default StarField
