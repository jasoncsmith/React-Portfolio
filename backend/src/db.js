import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'

import firebaseConfig from './config.js'

export const appFirebase = initializeApp(firebaseConfig)
const db = getFirestore()

export default db
