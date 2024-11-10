import dotenv from 'dotenv'
dotenv.config()

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

export default config
