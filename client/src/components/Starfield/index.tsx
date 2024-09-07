import styles from './index.module.scss'

import Star from './components/Star'

const StarField = () => (
  <div className={styles.starField}>
    {[...Array(5).keys()].map(_ => (
      <Star />
    ))}
  </div>
)

export default StarField
