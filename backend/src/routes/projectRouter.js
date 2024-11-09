import express from 'express'
import getProjects from '../controllers/projectController.js'
import rateLimiter from '../middleware/rateLimiter.js'

const router = express.Router()

router.route('/').get(rateLimiter(5), getProjects)

export default router
