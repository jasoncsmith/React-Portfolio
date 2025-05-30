import axios from 'axios'

// const baseURL = process.env.REACT_APP_API_ENDPOINT
// TODO: setup secrets on github
// http://127.0.0.1:5001/portfolio-2d6cd/us-central1/api, the .../api is defined by what you
// name the export of backend/src/index.js

// console.log('import.meta.env.VITE_NODE_ENV', import.meta.env.VITE_NODE_ENV)
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const baseURL =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD

const client = axios.create({ baseURL })

export default client
