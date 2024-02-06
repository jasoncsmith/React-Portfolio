import client from '.'
import { ContactFormModel } from '../components/ContactForm'

export const createUser = (data: ContactFormModel) => client.post(`/v1/user`, data)
