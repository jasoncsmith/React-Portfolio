import styles from './index.module.scss'

import Star from './components/Star'
import Meteor from './components/Meteor'
import SpaceShip from './components/SpaceShip'

const StarField = () => (
  <div className={styles.starField}>
    {[...Array(5).keys()].map((_, idx) => (
      <Star key={idx} />
    ))}
    <Meteor />
    <SpaceShip />
    <SpaceShip type={'three-orb'} />
  </div>
)

export default StarField
