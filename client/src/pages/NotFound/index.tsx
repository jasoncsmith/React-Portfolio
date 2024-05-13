import { isRouteErrorResponse, useLocation, useNavigate, useRouteError } from 'react-router-dom'
import Button from '../../components/Button'
import Page from '../../components/Layout/Page'

import styles from './index.module.scss'

const NotFound = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const msg = isRouteErrorResponse(error) ? error.statusText : error instanceof Error ? error.message : ''

  return (
    <Page className={styles['four-oh-four']}>
      <Page.Content>
        <h1>404</h1>
        <p>
          This page does not exist <span style={{ color: '#777' }}>{pathname}</span>
          <br />
          {!!msg && <span style={{ color: 'red' }}>{msg}</span>}
        </p>
        <Button buttonType="button" onClick={() => navigate(-1)}>
          Take me back
        </Button>
      </Page.Content>
    </Page>
  )
}

export default NotFound
