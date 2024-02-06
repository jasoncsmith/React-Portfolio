import { useState } from 'react'
import classNames from 'classnames'

import { ImageProps } from '../Image'

import styles from './index.module.scss'

interface MenuItemProps {
  isActive: boolean
  image: ImageProps
  client: string
  onMenuClick: () => void
}

const MenuItem = ({ isActive, onMenuClick, image, client }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { alt, name } = image

  return (
    <div
      className={classNames({
        [styles.menuItem]: true,
        [styles['menuItem--selected']]: isActive,
      })}
    >
      <button
        type="button"
        onClick={onMenuClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {alt}
      </button>

      {isHovered === true ? (
        <div className={styles.menuItem__thumbnail}>
          <h5>{client}</h5>
          <img className={styles.menuItem__img} src={`images/${name}`} alt={alt} title={alt} height={100} />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default MenuItem
