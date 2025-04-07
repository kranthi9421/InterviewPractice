import React from "react"
import { useForm } from "./useForm"

export const Form = () => {
  const [firstName, bindFirstName, resetFirstName] = useForm("")
  const [lastName, bindLastName, resetLastName] = useForm("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Hello ${firstName} - ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" {...bindFirstName} />

        <label>Last Name</label>
        <input type="text" {...bindLastName} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
