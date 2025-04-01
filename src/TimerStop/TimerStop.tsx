import React, { useEffect } from "react"

export const TimerStop = () => {
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (count >= 10) return;
   
    const timer = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [count])

  return (
    <div>
      <h1 className="text-5xl">{count}</h1>
    </div>
  )
}
