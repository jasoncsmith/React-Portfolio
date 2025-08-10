import axios from 'axios'

// http://127.0.0.1:5001/..../us-central1/api, the .../api is defined by the named export in backend/src/index.js

// console.log('import.meta.env.VITE_NODE_ENV', import.meta.env.VITE_NODE_ENV)
const baseURL =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD

axios.defaults.headers.common['X-APPHEADER'] = 1 // CSRF Prevention Header
const client = axios.create({ baseURL })

export default client
