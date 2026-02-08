import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
  const [users, setUsers] = useState<any>(null)

  const getData = async () => {
    const res = await fetch(url)
    const users = await res.json()
    setUsers(users)
  }

  useEffect(() => {
    getData()
  }, [])

  return { users }
}
