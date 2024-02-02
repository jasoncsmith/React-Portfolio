import User from '../../schemas/user.js'
import { v4 as uuidV4 } from 'uuid'

const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body
  try {
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
      return res.status(200).json({ ...req.body, exists: true })
    }

    User.create({ ...req.body, fullName: `${firstName} ${lastName}` })
      .then(newUser => res.status(200).json(newUser._doc))
      .catch(function (err) {
        if (err.name === 'ValidationError') {
          res.status(422).json(err)
        } else {
          res.status(500).json(err)
        }
      })
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong.' })
  }
}

export default createUser
