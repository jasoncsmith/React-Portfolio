import classNames from 'classnames'
import styles from './index.module.scss'

interface SpaceShipProps {
  type?: 'predator' | 'deathstar'
  launch?: boolean
  launchDelay?: number
  inline?: boolean
}

const DeathStar = ({ launch = false, launchDelay }: SpaceShipProps) => {
  return (
    <span
      style={{ animationDelay: launchDelay ? `${launchDelay}s` : undefined }}
      className={classNames({
        [styles['spaceship--deathstar']]: true,
        [styles['spaceship--deathstar--launch']]: launch,
      })}
      onAnimationEnd={e => {
        if (launch) {
          e.currentTarget.classList.remove(styles['spaceship--deathstar--launch'])
        }
      }}
    >
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
    </span>
  )
}

const Predator = ({ launch = false, launchDelay, inline }: SpaceShipProps) => {
  const rotationEffectDelay = launchDelay ? launchDelay + 2 : undefined
  const pulseEffectDelay = 0
  return (
    <span
      style={{
        animationDelay: launchDelay
          ? `${launchDelay}s, ${rotationEffectDelay}s, ${pulseEffectDelay}s`
          : undefined,
        position: inline ? 'relative' : 'absolute',
      }}
      className={classNames({
        [styles['spaceship--predator']]: true,
        [styles['spaceship--predator--launch']]: launch,
        [styles['spaceship--inline']]: inline,
      })}
      onAnimationEnd={e => {
        if (launch) {
          e.currentTarget.classList.remove(styles['spaceship--predator--launch'])
        }
      }}
    >
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
    </span>
  )
}

const SpaceShip = ({ type = 'deathstar', launch = false, launchDelay, inline }: SpaceShipProps) => {
  return type === 'deathstar' ? (
    <DeathStar launch={launch} launchDelay={launchDelay} inline={inline} />
  ) : type === 'predator' ? (
    <Predator launch={launch} launchDelay={launchDelay} inline={inline} />
  ) : null
}

export default SpaceShip
