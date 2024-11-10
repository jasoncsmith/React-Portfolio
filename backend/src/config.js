import dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
  appId: process.env.APP_ID,
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
  superSecret: process.env.SUPER_SECRET_KEY,
}

export default firebaseConfig
