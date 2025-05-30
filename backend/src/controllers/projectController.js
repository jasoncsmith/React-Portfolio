import db from '../db.js'

const getProjects = async (req, res) => {
  try {
    const projects = []
    const refProjects = db.collection('projects')
    const querySnapshot = await refProjects.orderBy('order', 'asc').get()

    querySnapshot.forEach(doc => projects.push({ ...doc.data(), id: doc.id }))

    return res.status(200).json({ count: querySnapshot.size, projects })
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }
}

export default getProjects
