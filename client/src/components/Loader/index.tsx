import classNames from 'classnames'
import { LuLoader2 } from 'react-icons/lu'
import styles from './index.module.scss'

export default function Loader({ className = '' }: { className?: string; variant?: 'full-page' | 'inline' }) {
  return (
    <div
      role="alert"
      aria-label="Loading"
      className={classNames({
        [styles['loader-container']]: true,
      })}
    >
      <LuLoader2
        className={classNames({
          [styles.loader]: true,
          [className]: !!className,
          ['--rotating']: true,
        })}
      />
    </div>
  )
}
