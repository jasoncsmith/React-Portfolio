import { useRouteError } from 'react-router-dom'
import './index.scss'

const Four04 = () => {
  const error: any = useRouteError()
  const msg =
    error && typeof error.statusText === 'string'
      ? error.statusText
      : typeof error.message === 'string'
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
