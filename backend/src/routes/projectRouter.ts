import express from 'express'
import getProjects from '../controllers/projectController'
import rateLimiter from '../middleware/rateLimiter'

const router = express.Router()

router.route('/').get(rateLimiter(5), getProjects)

export default router
