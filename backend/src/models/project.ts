import { Schema, model } from 'mongoose'

const ImageSchema = new Schema({
  name: String,
  alt: String,
})

const projectSchema = new Schema({
  // _id: String,
  skills: String,
  image: ImageSchema,
  fragment: String,
  clientId: String,
  role: String,
  projectDescription: String,
  client: String,
  projectName: String,
  url: String,
  longDesc: String,
  year: Number,
  order: Number,
})

export default model('Project', projectSchema, 'Projects')
