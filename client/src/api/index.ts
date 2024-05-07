import axios from 'axios'
// const baseURL = process.env.REACT_APP_API_ENDPOINT
// TODO: setup secrets on github
// const baseURL = 'http://127.0.0.1:5001/portfolio-2d6cd/us-central1/api'
const baseURL = 'https://api-gaxpa6b7ta-uc.a.run.app'

const client = axios.create({ baseURL })

export default client
