import { onRequest } from 'firebase-functions/v2/https'
// updating firebase-functions from 5.0.1 to 5.1.0 breaks
//'5.0.1', '5.1.0',  '5.1.1',  '6.0.0',  '6.0.1',  '6.1.0'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import projectRouter from './routes/projectRouter.js'
import userRouter from './routes/userRouter.js'

const version = 'v1'
const app = express()

app.use(helmet())
app.use(express.json({ limit: '3mb' }))
app.use(express.urlencoded({ limit: '3mb', extended: true }))
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://www.jasoncsmith.tech', 'https://jasoncsmith.tech'],
  })
)

app.use(`/api/${version}/projects`, projectRouter)
app.use(`/api/${version}/users`, userRouter)

// a named export must be provided
// exported name will be in the url path of your local api ->
// http://127.0.0.1:5001/portfolio-2d6cd/us-central1/{name_of_what_you_export_from_here}
export const api = onRequest(app)
