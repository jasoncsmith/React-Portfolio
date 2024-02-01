const projects = (req, res) => {
  try {
    console.log(' test ')
    return res.status(200).json({ congrats: true })
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }
}

export default projects
