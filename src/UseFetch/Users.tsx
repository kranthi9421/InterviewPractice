import React from "react"
import { useFetch } from "./useFetch"


export const Users = () => {
  const { users } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  )
}
