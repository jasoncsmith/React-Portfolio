import { validationResult } from 'express-validator'
// import { error as logError } from 'firebase-functions/logger'
import db from '../db.js'
import logger from '../utils/logger.js'

const createUser = async (req, res) => {
  const { firstName, lastName, email, comments, company, confirmEmail } = req.body
  const validationErrors = validationResult(req)

  if (!!confirmEmail) {
    // if this field is filled out a bot did it and we want to
    // return a 202 so the client handles it silently
    logger.error('honeypot submission caught')
    return res.status(202).json({ message: 'success' })
  }

  if (!validationErrors.isEmpty()) {
    logger.error('Client side validation did not catch field errors')

    return res.status(400).json({
      error: validationErrors.errors.map(err => err.msg),
    })
  }

  try {
    const userCollection = db.collection('users')
    const querySnapshot = await userCollection.where('email', '==', email).get()
    const fullName = [firstName, lastName].join(' ')

    if (!querySnapshot.empty) {
      // TODO: DO WE HAVE TO USE LOOP? BETTER?
      querySnapshot.forEach(doc =>
        // should only be 1 record
        userCollection.doc(doc.id).set(
          {
            firstName,
            lastName,
            comments,
            company,
            fullName,
          },
          { merge: true }
        )
      )
      logger.info('User updated email address or comment')
      return res.status(200).json({
        firstName,
        lastName,
        email,
        company,
        fullName,
      })
    }

    const { id } = await userCollection.add({
      firstName,
      lastName,
      email,
      comments,
      company,
      fullName,
    })

    logger.info('New user created')
    res.status(201).json({ firstName, lastName, email, company, fullName, id })
  } catch (error) {
    logger.error('error saving user to database: ' + error.message)
    return res.status(500).json({ message: 'Something went wrong.' })
  }
}

export default createUser
