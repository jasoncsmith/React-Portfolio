import { onRequest } from 'firebase-functions/v2/https'

import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import projectRouter from './routes/projectRouter'
import userRouter from './routes/userRouter'
import { ALLOWED_ORIGINS } from './config'
import logger, { httpLogger } from './utils/logger'
import verifyCsrfHeader from './middleware/verifyCsrfHeader'

const version = 'v1'
const app = express()
app.disable('x-powered-by') // remove "fingerprinting" header, not completely secure but helps

app.use(
  helmet({
    frameguard: { action: 'deny' },
    noSniff: true,
    xssFilter: true,
  })
)
app.use(express.json({ limit: '3mb' }))
app.use(express.urlencoded({ limit: '3mb', extended: true }))
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    methods: ['GET', 'OPTIONS'],
  })
)
app.use(httpLogger)

app.use(`/api/${version}/projects`, verifyCsrfHeader, projectRouter)
app.use(`/api/${version}/users`, verifyCsrfHeader, userRouter)

// reduce "fingerprinting", custom 404
app.use((req, res, _next) => {
  logger.error(`404 Not Found: ${req.originalUrl}`)
  res.status(404).json({ message: '404, Not Found' })
})

// reduce "fingerprinting", custom error handler
app.use((err: any | Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    logger.error(`Error: ${err.stack}`)
  } else {
    logger.error(`Unknown error: ${JSON.stringify(err)}`)
  }

  res.status(err.status || 500).json({
    message: 'Internal Server Error',
    error: {},
  })
})

// a named export must be provided
// exported name will be in the url path of your local api ->
// http://127.0.0.1:5001/{{project_id}}/us-central1/{name_of_what_you_export_from_here}
export const api = onRequest(app)
