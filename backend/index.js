import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import projectsRouter from './api/projects/index.js'
import userRouter from './api/user/index.js'

dotenv.config()
const app = express()
const version = 'v1'

app.use(bodyParser.json({ limit: '3mb' }))
app.use(bodyParser.urlencoded({ limit: '3mb', extended: true }))
app.use(cors())

app.use(`/${version}/projects`, projectsRouter)
app.use(`/${version}/user`, userRouter)

const PORT = process.env.PORT || 3001

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`)))
  .catch(error => console.log(error.message))
