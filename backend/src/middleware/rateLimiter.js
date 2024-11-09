import { rateLimit } from 'express-rate-limit'

const rateLimiter = (limit = 2, minutes = 1) =>
  rateLimit({
    windowMs: minutes * 60 * 1000,
    limit,
    message: 'You have exceeded your request limit.',
    handler: (req, res, next, options) => res.status(options.statusCode).json({ error: options.message }),
    standardHeaders: 'draft-7', // provides informational headers letting you know your retry status, etc.
  })

export default rateLimiter
