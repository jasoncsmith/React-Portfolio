import styles from './index.module.scss'

import Star from './components/Star'
import Meteor from './components/Meteor'

const StarField = () => (
  <div className={styles.starField}>
    {[...Array(5).keys()].map((_, idx) => (
      <Star key={idx} />
    ))}
    <Meteor />
  </div>
)

export default StarField
