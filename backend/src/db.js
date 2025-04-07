import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'
// import getAuth from 'firebase-auth'
import config from './config.js'

// which is not a supported version. Valid versions are 18, 20, 22
export const appFirebase = initializeApp(config)

console.log('|| ------------------------->', appFirebase.name)

const db = getFirestore()

export default db
