import React, { useState } from "react"

const countries = [
  { name: "India", states: ["Andhra Pradesh", "Karnataka", "Tamil Nadu"] },
  { name: "USA", states: ["New York", "California", "Texas"] },
  { name: "UK", states: ["London", "Manchester", "Birmingham"] },
  { name: "Pakistan", states: ["Lahore", "Rawalpindi", "Karachi"] },
  { name: "Canada", states: ["Ontario", "Quebec", "Alberta"] },
  { name: "Australia", states: ["New South Wales", "Victoria", "Queensland"] },
  { name: "China", states: ["Beijing", "Shanghai", "Guangzhou"] },
]

export const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedState, setSelectedState] = useState(countries[0].states[0])

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country =
      countries.find((c) => c.name === e.target.value) ?? countries[0]
    setSelectedCountry(country)
    setSelectedState(country.states[0])
  }

  return (
    <div>
      <label className="flex gap-14">
        Select Country
        <select value={selectedCountry.name} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex gap-14">
        Select State
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {selectedCountry.states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
