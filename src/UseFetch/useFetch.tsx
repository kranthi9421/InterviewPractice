import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
  const [users, setUsers] = useState<any>(null)

  const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    getData()
  }, [url])

  return { users }
}
