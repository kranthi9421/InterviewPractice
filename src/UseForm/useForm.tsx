import React from "react"

export const useForm = (intialValue:string) => {
  const [value, setValue] = React.useState(intialValue)

  const resest = () => {
    setValue(intialValue)
  }

  const bind = {
    value,
    onChange:         (e:React.ChangeEvent<HTMLInputElement>)=>
      setValue(e.target.value),
  }
  return [value, bind, resest] as const
}


