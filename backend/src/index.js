import { onRequest } from 'firebase-functions/v2/https'

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
app.use(cors())

app.use(`/api/${version}/projects`, projectRouter)
app.use(`/api/${version}/users`, userRouter)

// a named export must be provided
// exported name will be in the url path of your local api ->
// http://127.0.0.1:5001/portfolio-2d6cd/us-central1/{name_of_what_you_export_from_here}
export const api = onRequest(app)
