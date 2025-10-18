import { type Request, type Response } from 'express'
import db from '../db'
import logger from '../utils/logger'

const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects: object[] = []
    const refProjects = db.collection('projects')
    const querySnapshot = await refProjects.orderBy('order', 'asc').get()

    querySnapshot.forEach(doc => projects.push({ ...doc.data(), id: doc.id }))
    return res.status(200).json({ count: querySnapshot.size, projects })
  } catch (error: any) {
    logger.error('Error fetching projects: ' + error?.message)
    res.status(500).json({ message: 'something went wrong' })
  }
}

export default getProjects
