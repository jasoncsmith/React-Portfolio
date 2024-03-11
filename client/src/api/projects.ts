import client from '.'

export const getProjects = () => client.get(`api/v1/projects`)
