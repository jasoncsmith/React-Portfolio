import styles from './index.module.scss'

interface SpaceShipProps {
  type?: 'predator' | 'deathstar'
  launch?: boolean
  launchDelay?: number
}

const DeathStar = ({ launch = false, launchDelay }: { launch?: boolean; launchDelay?: number }) => {
  return (
    <span
      style={{ animationDelay: launchDelay ? `${launchDelay}s` : undefined }}
      className={`${styles['spaceship--deathstar']} ${
        launch ? `${styles['spaceship--deathstar--launch']}` : ''
      }`}
    >
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
    </span>
  )
}

const Predator = ({ launch = false, launchDelay }: { launch?: boolean; launchDelay?: number }) => {
  const rotationEffectDelay = launchDelay ? launchDelay + 2 : undefined
  const pulseEffectDelay = 0
  return (
    <span
      style={{
        animationDelay: launchDelay
          ? `${launchDelay}s, ${rotationEffectDelay}s, ${pulseEffectDelay}s`
          : undefined,
      }}
      className={`${styles['spaceship--predator']} ${
        launch ? `${styles['spaceship--predator--launch']}` : ''
      }`}
    >
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
      <span className={styles.orb}></span>
    </span>
  )
}

const SpaceShip = ({ type = 'deathstar', launch = false, launchDelay }: SpaceShipProps) => {
  return type === 'deathstar' ? (
    <DeathStar launch={launch} launchDelay={launchDelay} />
  ) : type === 'predator' ? (
    <Predator launch={launch} launchDelay={launchDelay} />
  ) : null
}

export default SpaceShip
