import { useState, useEffect } from "react"

type Users = {
  id: number
  name: string
}

export const useFetch = (url: string) => {
  const [users, setUsers] = useState<Users[]>([])

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
