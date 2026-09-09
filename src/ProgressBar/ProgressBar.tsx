import React from "react"

export const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0)

  const steps = 3
  const step = 100 / steps

  const handleClick = () => {
    setProgress((current) => Math.min(current + step, 100))
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
          className="h-full bg-green-700 transition-all duration-300"
        />
      </div>

      <button
        onClick={handleClick}
        disabled={progress === 100}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Click
      </button>

      <button
        onClick={handleReset}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Reset
      </button>
    </div>
  )
}