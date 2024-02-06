import client from '.'
import { ContactFormModel } from '../components/ContactForm'

const base = process.env.REACT_APP_BASE_URL

export const createUser = (data: ContactFormModel) => client.post(`${base}/v1/user`, data)
