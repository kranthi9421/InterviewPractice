import React from "react"

export const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0)

  const steps = 3
  const step = 100 / steps

  const handleClick = () => {
    setProgress((prev) => {
      const next = prev + step
      return next >= 100 ? 100 : parseFloat(next.toFixed(2))
    })
  }

  const handleReset = () => {
    setProgress(0)
  }

  return (
    <div className="p-6 space-y-4 text-center">
      <h1 className="text-xl font-semibold">
        Progress - {progress.toFixed(0)}%
      </h1>
      <div className="w-[600px] h-6 bg-slate-400 rounded-full overflow-hidden mx-auto">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-green-700 transition-all duration-300 rounded-full"
        ></div>
      </div>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Click
      </button>
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Reset
      </button>
    </div>
  )
}
