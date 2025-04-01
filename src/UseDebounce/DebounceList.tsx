import React, { useEffect, useState } from "react"
import UseDebounce from "./UseDebounce"


const data = ["hayu", "daksh", "dog", "pig", "girafee", "eagle", "rihno"]

export const DebounceList = () => {
  const [input, setInput] = useState<string>("")
  const [results, setResults] = useState<string[]>([])

  const deb = UseDebounce(input,3000)

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(deb.toLowerCase())
    )
    setResults(filtered)
  }, [deb])

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {results.length > 0 ? (
        results.map((item) => <p key={item}>{item}</p>)
      ) : (
        <p>No results found</p>
      )}
    </div>
  )
}
