import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
  client: { type: String, required: true },
  year: { type: Number, required: true },
  projectUrl: { type: String, required: true },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  slug: { type: String, required: true },
  role: { type: String, required: true },
  skills: { type: String, required: true },
  software: { type: String },
  longDesc: { type: String },
  image: {
    alt: { type: String, required: true },
    src0: { type: String, required: true },
  },
})

export default mongoose.model('Project', projectSchema)
