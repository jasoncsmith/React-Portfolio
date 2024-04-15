import classNames from 'classnames'
import { LuLoader2 } from 'react-icons/lu'
import styles from './index.module.scss'

export default function Loader({
  className = '',
  variant = 'inline',
}: {
  className?: string
  variant?: 'full-page' | 'inline'
}) {
  return (
    <div
      className={classNames({
        [styles['loader-container']]: true,
        [styles[`--${variant}`]]: true,
      })}
    >
      <LuLoader2
        className={classNames({
          [styles.loader]: true,
          [styles[`--${variant}`]]: true,
          [className]: !!className,
        })}
      />
    </div>
  )
}
