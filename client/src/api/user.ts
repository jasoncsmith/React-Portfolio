import { AxiosResponse } from 'axios'
import client from '.'
import { User, ContactFormModel } from '../components/ContactFormController'

export const createUser = (data: ContactFormModel): Promise<AxiosResponse<User>> =>
  client.post(`api/v1/users`, data)
