export const getStorageItem = (key: string) => {
  try {
    const item = window.localStorage.getItem(key)
    return item && JSON.parse(item)
  } catch (error: unknown) {
    return null
  }
}

export const setStorageItem = (key: string, data: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (error: unknown) {
    return undefined
  }
}

export const removeStorageItem = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    return undefined
  }
}
