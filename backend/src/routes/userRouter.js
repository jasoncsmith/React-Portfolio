import express from 'express'
import rateLimiter from '../middleware/rateLimiter.js'
import createUser from '../controllers/userController.js'
import userSchema from '../models/user.js'

const router = express.Router()

router.route('/').post(rateLimiter(2), userSchema, createUser)

export default router
