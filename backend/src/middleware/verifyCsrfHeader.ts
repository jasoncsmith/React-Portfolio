import logger from '../utils/logger'
import { type Request, type Response, type NextFunction } from 'express'

const verifyCsrfHeader = (req: Request, res: Response, next: NextFunction) => {
  //cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#employing-custom-request-headers-for-ajaxapi
  // csrf mitigation as csurf is depreccated
  // when used in conjunction with cors allowed origins
  if (req.headers['x-appheader'] !== '1') {
    logger.error(`CSRF header missing or invalid for ${req.method} ${req.originalUrl} from ${req.ip}`)

    res.status(401).send('Unauthorized')
    return
  }

  next()
}

export default verifyCsrfHeader
