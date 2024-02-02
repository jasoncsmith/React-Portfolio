import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  id: { type: String },
  firstName: { type: String, required: true, minLength: [2, 'First name must be at least 2 characters.'] },
  lastName: { type: String, required: true, minLength: [2, 'Last name must be at least 2 characters.'] },
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: [true, 'Must provide a valid email.'],
    trim: true,
    unique: true,
    dropDups: true,
  },
  comments: { type: String, required: true },
  company: { type: String },
})

export default mongoose.model('User', userSchema)
