import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import './index.scss'

const Four04 = () => {
  const error = useRouteError()

  const msg = isRouteErrorResponse(error)
    ? error.statusText || 'Unknown Error'
    : error instanceof Error
    ? error.message
    : 'Unknown Error'

  return (
    <div id="error-404">
      <h1>404</h1>
      <p>{msg}</p>
    </div>
  )
}

export default Four04
