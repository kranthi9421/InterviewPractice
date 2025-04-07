import React, { useEffect, useRef } from "react"

export const TimerStop = () => {
  const [count, setCount] = React.useState(0)
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    countRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          if (countRef.current) clearInterval(countRef.current)
          return prev
        } else {
          return prev + 1
        }
      })
    }, 1000)
  }, [])

  return (
    <div>
      <h1 className="text-5xl">{count}</h1>
    </div>
  )
}
