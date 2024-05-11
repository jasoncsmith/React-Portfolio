import { onRequest } from 'firebase-functions/v2/https'

import express from 'express'
import cors from 'cors'

import projectRouter from './routes/projectRouter.js'
import userRouter from './routes/userRouter.js'
// const csurf = require('csurf')
// const helmet = require("helmet")

const app = express()
const version = 'v1'

// app.use(csurf())
// app.use(helmet())
app.use(express.json({ limit: '3mb' }))
app.use(express.urlencoded({ limit: '3mb', extended: true }))
app.use(cors())

app.use(`/api/${version}/projects`, projectRouter)
app.use(`/api/${version}/users`, userRouter)

export const api = onRequest(app)
