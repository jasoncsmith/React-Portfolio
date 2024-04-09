import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '../utilities/storage'

export const useLocalStorage = <T>(key: string): [T, Dispatch<SetStateAction<T>>] => {
  const [data, setData] = useState<T>(() => getStorageItem(key))

  useEffect(() => {
    setStorageItem(key, data)
  }, [data])

  return [data, setData]
}

export default useLocalStorage
