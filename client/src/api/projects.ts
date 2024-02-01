import client from '.'

const version = 'v1'
const base = `/${version}/projects`

export const getProjects = () => client.get(`${base}`)
