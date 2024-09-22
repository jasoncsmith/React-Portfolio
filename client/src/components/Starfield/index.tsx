import styles from './index.module.scss'

import Star from './components/Star'
import Meteor from './components/Meteor'
import SpaceShip from './components/SpaceShip'

const StarField = () => (
  <div className={styles.starField}>
    {[...Array(6).keys()].map((_, idx) => (
      <Star key={idx} type={idx === 5 ? 'simi' : undefined} />
    ))}
    <Meteor />
    <SpaceShip />
    <SpaceShip type={'three-orb'} />
  </div>
)

export default StarField
