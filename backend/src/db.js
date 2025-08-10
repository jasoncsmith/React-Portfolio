import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'
import config from './config.js'

// Running node 22 for firebase
export const appFirebase = initializeApp(config)
// console.log('|| ------------------------->', appFirebase.name)

export default getFirestore()
