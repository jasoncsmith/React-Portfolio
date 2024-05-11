import express from 'express'
import createUser from '../controllers/userController.js'
import userSchema from '../models/user.js'

const router = express.Router()

router.route('/').post(userSchema, createUser)

export default router
