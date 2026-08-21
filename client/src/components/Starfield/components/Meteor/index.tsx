import styles from './index.module.scss'

const Meteor = ({
  duration,
  launch,
  delay,
  startX,
}: {
  duration?: number
  delay?: number
  startX?: number
  launch: boolean
}) => (
  <span
    style={{
      animationDuration: duration ? `${duration}s` : undefined,
      animationDelay: delay ? `${delay}s` : undefined,
      left: `${startX}%`,
    }}
    className={`${styles.meteor} ${launch ? styles['meteor--launch'] : ''}`}
    onAnimationEnd={e => {
      e.currentTarget.classList.remove(styles['meteor--launch'])
    }}
  ></span>
)

export default Meteor
