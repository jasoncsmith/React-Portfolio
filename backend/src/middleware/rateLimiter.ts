import { type NextFunction, type Request, type Response } from 'express'
import { rateLimit, type Options } from 'express-rate-limit'

const rateLimiter = (limit: number = 2, minutes: number = 1) => {
  return rateLimit({
    windowMs: minutes * 60 * 1000,
    limit,
    message: 'You have exceeded your request limit.',
    handler: (_req: Request, res: Response, _next: NextFunction, options: Options) => {
      return res.status(options.statusCode).json({ error: options.message })
    },
    validate: { ip: false }, // this was throwing errors in localhost: ValidationError: An undefined 'request.ip' was detected.
    standardHeaders: 'draft-7', // provides informational headers letting you know your retry status, etc.
  })
}

export default rateLimiter
