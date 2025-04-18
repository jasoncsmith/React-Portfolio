import { validationResult } from 'express-validator'
import { error as logError } from 'firebase-functions/logger'
import db from '../db.js'

const createUser = async (req, res) => {
  const { firstName, lastName, email, comments, company, confirmEmail } = req.body
  const validationErrors = validationResult(req)

  if (!!confirmEmail) {
    // if this field is filled out a bot did it and we want to
    // return a 202 so the client handles it silently
    return res.status(202).json({ message: 'success' })
  }

  if (!validationErrors.isEmpty()) {
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

    res.status(201).json({ firstName, lastName, email, company, fullName, id })
  } catch (error) {
    logError('J_FOLIO_ERROR', error)
    return res.status(500).json({ message: 'Something went wrong.' })
  }
}

export default createUser
