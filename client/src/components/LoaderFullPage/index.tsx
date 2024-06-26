import classNames from 'classnames'
import styles from './index.module.scss'

export default function LoaderFullPage({ className = '' }: { className?: string }) {
  return (
    <div
      role="alert"
      aria-label="Loading"
      className={classNames({
        [styles['loader-container']]: true,
      })}
    >
      <div
        className={classNames({
          [styles.loader]: true,
          [className]: !!className,
        })}
      />
    </div>
  )
}
