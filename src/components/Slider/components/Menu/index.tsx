import { ReactNode } from 'react'
import { Project } from '../..'
import MenuItem from '../MenuItem'
import './index.scss'

interface MenuProps {
  items: Project[]
  index: number
  isPlaying: boolean
  onMenuClick: (n: number) => void
  children: ReactNode
}

const Menu = ({ items, index, isPlaying, onMenuClick, children }: MenuProps) => {
  return (
    <div className="slider__controls">
      <div className="slider__menu">
        {items.map(
          (t: Project, idx: number): JSX.Element => (
            <MenuItem
              key={`mi-${t.id}`}
              isActive={index === idx}
              onMenuClick={() => onMenuClick(idx)}
              image={items[idx].image}
              client={items[idx].client}
            />
          )
        )}

        <div className="slider__menu--play-state">{isPlaying === true ? 'Playing' : 'Paused'}</div>
      </div>

      {children}
    </div>
  )
}

export default Menu
