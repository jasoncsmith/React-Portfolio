import { onRequest } from 'firebase-functions/v2/https'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import projectsRouter from './api/projects/index.js'
import userRouter from './api/user/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const version = 'v1'

app.use(bodyParser.json({ limit: '3mb' }))
app.use(bodyParser.urlencoded({ limit: '3mb', extended: true }))
app.use(cors())

app.use(`/${version}/projects`, projectsRouter)
app.use(`/${version}/user`, userRouter)

export const api = onRequest(app)
