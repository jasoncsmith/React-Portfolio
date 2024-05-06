import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'
function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink to="/about">
        <img src="images/favicon.png" alt="Logo" width={32} height={32} />
      </NavLink>
    </div>
  )
}
export default Logo
