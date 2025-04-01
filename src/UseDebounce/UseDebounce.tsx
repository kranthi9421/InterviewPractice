import React, { useEffect } from "react"

const UseDebounce = (val: string, delay: number) => {
  const [debvalue, setDebvalue] = React.useState(val)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebvalue(val)
    }, delay)
    return () => clearTimeout(timer)
  }, [val])

  return debvalue
}

export default UseDebounce
