import db from '../../db.js'

const projects = async (req, res) => {
  try {
    const projects = []
    const refProjects = db.collection('projects')
    const querySnapshot = await refProjects.get()
    querySnapshot.forEach(doc => projects.push({ ...doc.data(), id: doc.id }))

    return res.status(200).json({ projects })
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }
}

export default projects
