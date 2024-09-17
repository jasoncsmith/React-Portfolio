import styles from './index.module.scss'

interface SpaceShipProps {
  type?: 'three-orb' | 'death-star'
}

const SpaceShip = ({ type = 'death-star' }: SpaceShipProps) => (
  <span className={`${type === 'three-orb' ? styles.spaceShipThreeOrb : styles.spaceShip} }`}>
    <span className={type === 'three-orb' ? styles.orbThreeOrb : styles.orb}></span>
    <span className={type === 'three-orb' ? styles.orbThreeOrb : styles.orb}></span>
    <span className={type === 'three-orb' ? styles.orbThreeOrb : styles.orb}></span>
  </span>
)

export default SpaceShip
