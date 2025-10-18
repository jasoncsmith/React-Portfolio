import dotenv from 'dotenv'
import { dirname } from './utils/utils'

dotenv.config({ path: dirname(import.meta.url, '/../.env') })

const config = {
  appId: process.env.APP_ID,
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpires: process.env.JWT_EXPIRES,
}

export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.toString().split(',')

export default config
