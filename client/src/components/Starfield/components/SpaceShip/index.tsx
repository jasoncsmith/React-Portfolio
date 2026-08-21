import classNames from 'classnames'
import styles from './index.module.scss'
import { useSpace } from '../../spaceshipAnimation'

interface SpaceShipProps {
  type?: 'predator' | 'deathstar'
  launchMode?: boolean
  inline?: boolean
}

const DeathStar = ({ launchMode = false }: SpaceShipProps) => {
  return (
    <span
      className={classNames({
        [styles['spaceship--deathstar']]: true,
        [styles['spaceship--deathstar--launch']]: launchMode,
      })}
      onAnimationEnd={e => {
        e.currentTarget.classList.remove(styles['spaceship--deathstar--launch'])
      }}
    >
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
    </span>
  )
}

const Predator = ({ launchMode = false, inline }: SpaceShipProps) => {
  // Hacky: {pause} but this is the last ship to launchMode so need to know when done
  // so can replay animation

  const { pause } = useSpace()
  return (
    <span
      style={{
        position: inline ? 'relative' : 'absolute',
      }}
      className={classNames({
        [styles['spaceship--predator']]: true,
        [styles['spaceship--predator--launch']]: launchMode,
        [styles['spaceship--inline']]: inline,
      })}
      onAnimationEnd={e => {
        e.currentTarget.classList.remove(styles['spaceship--predator--launch'])
        pause()
      }}
    >
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
    </span>
  )
}

const SpaceShip = ({ type = 'deathstar', launchMode = false, inline }: SpaceShipProps) => {
  return type === 'deathstar' ? (
    <DeathStar launchMode={launchMode} />
  ) : type === 'predator' ? (
    <Predator launchMode={launchMode} inline={inline} />
  ) : null
}

export default SpaceShip
