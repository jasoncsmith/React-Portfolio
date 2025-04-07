import classNames from 'classnames'
import { LuLoaderCircle } from 'react-icons/lu'
import styles from './index.module.scss'
// export declare const LuLoaderCircle: IconType
// export declare const LuLoaderPinwheel: IconType
// export declare const LuLoader: IconType

export default function Loader({ className = '' }: { className?: string; variant?: 'full-page' | 'inline' }) {
  return (
    <div
      role="alert"
      aria-label="Loading"
      className={classNames({
        [styles['loader-container']]: true,
      })}
    >
      <LuLoaderCircle
        className={classNames({
          [styles.loader]: true,
          [className]: !!className,
          ['--rotating']: true,
        })}
      />
    </div>
  )
}
