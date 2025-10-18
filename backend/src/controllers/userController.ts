import { ExpressValidator } from 'express-validator'
import { type Request, type Response } from 'express'

// import { error as logError } from 'firebase-functions/logger'
import db from '../db'
import logger from '../utils/logger'

const { query: Request, validationResult } = new ExpressValidator(
  {},
  {},
  {
    errorFormatter: error => error.msg,
  }
)

const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, comments, company, confirmEmail } = req.body

  const validationErrors = validationResult({ firstName: '', ...req })

  if (!!confirmEmail) {
    // if this field is filled out a bot did it and we want to
    // return a 202 so the client handles it silently
    logger.error('honeypot submission caught')
    return res.status(202).json({ message: 'success' })
  }

  if (!validationErrors.isEmpty()) {
    logger.error('Client side validation did not catch field errors')

    return res.status(400).json({
      error: validationErrors.array(),
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
  } catch (error: any | Error) {
    logger.error('error saving user to database: ' + error?.stack)
    return res.status(500).json({ message: 'Something went wrong.' })
  }
}

export default createUser
