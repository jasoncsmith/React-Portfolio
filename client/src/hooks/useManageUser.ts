import { User } from '../components/ContactForm'
import { getStorageItem, setStorageItem } from '../utilities/storage'

const useManageUser = () => {
  function setUser(user: User) {
    setStorageItem('user', user)
  }

  function getUser(): User {
    return getStorageItem('user')
  }

  return { getUser, setUser }
}

export default useManageUser
