import axios from 'axios'
// const baseURL = process.env.REACT_APP_API_ENDPOINT
// TODO: setup secrets on github
const baseURL = 'https://api-gaxpa6b7ta-uc.a.run.app'

const client = axios.create({ baseURL })

export default client
