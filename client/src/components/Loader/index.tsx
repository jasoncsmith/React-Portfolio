import classNames from 'classnames'
import { LuLoader2 } from 'react-icons/lu'
import styles from './index.module.scss'

export default function Loader({ className = '' }: { className?: string }) {
  return (
    <div className={styles['loader-container']}>
      <LuLoader2 className={classNames({ [styles.loader]: true, [className]: !!className })} />
    </div>
  )
}
