import express from 'express'
import createUser from '../controllers/userController'
import userSchema from '../models/user'
import rateLimiter from '../middleware/rateLimiter'

const router = express.Router()

router.route('/').post(rateLimiter(2), userSchema, createUser)

export default router
