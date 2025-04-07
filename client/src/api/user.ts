import { AxiosResponse } from 'axios'
import client from '.'
import { type User, type ContactFormModel } from '../components/ContactFormController'

export const createUser = (data: ContactFormModel): Promise<AxiosResponse<User>> =>
  client.post(`api/v1/users`, data)
