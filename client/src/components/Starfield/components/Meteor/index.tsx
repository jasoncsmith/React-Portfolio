import styles from './index.module.scss'

const Meteor = ({ duration }: { duration?: number }) => (
  <span
    style={{ animationDuration: duration ? `${duration}s` : undefined }}
    className={`${styles.meteor} }`}
  ></span>
)

export default Meteor
