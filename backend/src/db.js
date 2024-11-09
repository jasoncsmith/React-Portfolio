import firebaseConfig from './config.js'
import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'

initializeApp(firebaseConfig)
const db = getFirestore()

export default db
