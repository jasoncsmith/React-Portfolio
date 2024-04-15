import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '../utilities/storage'

const useLocalStorage = <T>(key: string, initialState: T | null = null): [T, Dispatch<SetStateAction<T>>] => {
  const [data, setData] = useState<T>(() => getStorageItem(key) || initialState)

  useEffect(() => {
    setStorageItem(key, data)
  }, [data])

  return [data, setData]
}

export default useLocalStorage
