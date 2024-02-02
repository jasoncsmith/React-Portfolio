import client from '.'
import { ContactFormModel } from '../components/ContactForm'
// import { v4 as uuidV4 } from 'uuid'

const version = 'v1'
const base = `/${version}/user`

export const createUser = (data: ContactFormModel) => client.post(`${base}`, data)
