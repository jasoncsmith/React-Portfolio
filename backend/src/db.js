import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'

import config from './config.js'

export const appFirebase = initializeApp(config)
const db = getFirestore()

export default db
