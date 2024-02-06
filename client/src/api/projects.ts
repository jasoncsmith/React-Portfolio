import client from '.'

export const getProjects = () => client.get(`/v1/projects`)
