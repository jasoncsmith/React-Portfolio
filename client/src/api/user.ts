import { AxiosResponse } from 'axios'
import client from '.'
import { ContactFormModel, User } from '../components/ContactForm'

interface UserResponse extends User {
  exists: boolean
  fullName: string
}

export const createUser = (data: ContactFormModel): Promise<AxiosResponse<UserResponse>> =>
  client.post(`api/v1/user`, data)
