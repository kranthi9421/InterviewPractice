import { useRef, useState, useEffect, use } from "react"

export const ClickInterval = () => {
  const [count, setCount] = useState<number>(0)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, 1000)
    }
  }

  const pauseInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const resumeInterval = () => {
    if (!intervalRef.current) {
      startInterval()
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startInterval}>Start</button>
      <button onClick={pauseInterval}>Pause</button>
      <button onClick={resumeInterval}>Resume</button>
    </div>
  )
}
