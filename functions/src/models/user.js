import { checkSchema } from 'express-validator'

const userSchema = checkSchema({
  firstName: {
    errorMessage: 'Invalid first name',
    trim: true,
    escape: true,
    isLength: {
      options: { min: 2 },
      errorMessage: 'First name should be at least 2 chars',
    },
  },
  lastName: {
    errorMessage: 'Invalid last name',
    trim: true,
    escape: true,
    isLength: {
      options: { min: 2 },
      errorMessage: 'Last name should be at least 2 chars',
    },
  },
  email: {
    errorMessage: 'Invalid email',
    trim: true,
    escape: true,
    isEmail: true,
    normalizeEmail: true,
  },
  comments: {
    errorMessage: 'Invalid username',
    trim: true,
    escape: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'Comments should have at least 5 chars',
    },
  },
  company: {
    optional: true,
    trim: true,
    escape: true,
    isLength: {
      options: { min: 2 },
      errorMessage: 'Company should have at least 2 chars',
    },
  },
  confirmEmail: {
    optional: true,
    escape: true,
  },
})

export default userSchema
