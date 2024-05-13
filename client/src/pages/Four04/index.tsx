import { isRouteErrorResponse, useLocation, useNavigate, useRouteError } from 'react-router-dom'
import Button from '../../components/Button'

import styles from './index.module.scss'

const Four04 = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const msg = isRouteErrorResponse(error)
    ? error.statusText || 'Unknown Error'
    : error instanceof Error
    ? error.message
    : 'Unknown Error'

  return (
    <div className={styles['four-oh-four']}>
      <h1>404</h1>
      <p>
        This page does not exist <span style={{ color: '#777' }}>{pathname}</span>
        <br />
        {!!msg && <span style={{ color: 'red' }}>{msg}</span>}
      </p>
      <Button buttonType="button" onClick={() => navigate(-1)}>
        Take me back
      </Button>
    </div>
  )
}

export default Four04
