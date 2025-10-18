import styles from './index.module.scss'

import Star from './components/Star'
import Meteor from './components/Meteor'
import SpaceShip from './components/SpaceShip'

const StarField = () => (
  <div className={styles.starField}>
    {[...Array(6).keys()].map((_, idx) => (
      <Star key={idx} type={idx === 5 ? 'simi' : undefined} />
    ))}
    <Meteor duration={1} startX={75} />
    <Meteor duration={2} delay={2} startX={87} />
    <Meteor duration={5} delay={3} startX={72} />
    <SpaceShip type="deathstar" launch={true} launchDelay={4} />
    <SpaceShip type="predator" launch={true} launchDelay={8} />
  </div>
)

export default StarField
