import styles from './index.module.scss'

const Meteor = ({ duration, delay, startX }: { duration?: number; delay?: number; startX?: number }) => (
  <span
    style={{
      animationDuration: duration ? `${duration}s` : undefined,
      animationDelay: delay ? `${delay}s` : undefined,
      left: `${startX}%`,
    }}
    className={`${styles.meteor} }`}
  ></span>
)

export default Meteor
