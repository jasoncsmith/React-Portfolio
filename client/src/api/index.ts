import axios from 'axios'

// const baseURL = process.env.REACT_APP_API_ENDPOINT
// TODO: setup secrets on github
// http://127.0.0.1:5001/portfolio-2d6cd/us-central1/api, the .../api is defined by what you
// name the export of backend/src/index.js
const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5001/portfolio-2d6cd/us-central1/api'
    : 'https://api-gaxpa6b7ta-uc.a.run.app'

const client = axios.create({ baseURL })

export default client
