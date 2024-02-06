import client from '.'
const base = process.env.REACT_APP_BASE_URL

export const getProjects = () => client.get(`${base}/v1/projects`)
