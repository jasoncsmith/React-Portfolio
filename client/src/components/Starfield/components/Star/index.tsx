import styles from './index.module.scss'

interface StarProps {
  type?: 'simi'
}

const Star = ({ type }: StarProps) => (
  <span className={`${styles.star}${type === 'simi' ? styles[' star--simi'] : ''}`}></span>
)

export default Star
