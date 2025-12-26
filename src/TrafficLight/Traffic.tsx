import React, { useEffect, useState } from "react"

const colors = [
  { color: "bg-red-500", dur: 5000 },
  { color: "bg-yellow-500", dur: 2000 },
  { color: "bg-green-500", dur: 5000 },
]

export const Traffic = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % colors.length)
    }, colors[active].dur)

    return () => clearTimeout(timer) // Clear timeout on re-run
  }, [active]) // Only depend on active

  return (
    <div className="w-[200px] h-[500px] bg-black">
      {colors.map((color, index) => (
        <div
          key={color.color}
          className={`${
            index === active ? color.color : "bg-slate-500"
          } w-[150px] h-[150px] rounded-full`}
        ></div>
      ))}
    </div>
  )
}
