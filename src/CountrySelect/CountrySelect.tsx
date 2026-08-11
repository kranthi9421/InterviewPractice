import { useState } from "react";
import type { ChangeEvent } from "react";

type Country = {
  name: string;
  states: string[];
};

const countries: Country[] = [
  { name: "India", states: ["Andhra Pradesh", "Karnataka", "Tamil Nadu"] },
  { name: "USA", states: ["New York", "California", "Texas"] },
  { name: "UK", states: ["London", "Manchester", "Birmingham"] },
  { name: "Pakistan", states: ["Lahore", "Rawalpindi", "Karachi"] },
  { name: "Canada", states: ["Ontario", "Quebec", "Alberta"] },
  { name: "Australia", states: ["New South Wales", "Victoria", "Queensland"] },
  { name: "China", states: ["Beijing", "Shanghai", "Guangzhou"] },
];

export const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState(
    countries[0].states[0]
  );

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const country =
      countries.find((c) => c.name === e.target.value) ?? countries[0];

    setSelectedCountry(country);
    setSelectedState(country.states[0]);
  };

  return (
    <div>
      <div>
        <label htmlFor="country">Select Country</label>

        <select
          id="country"
          value={selectedCountry.name}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="state">Select State</label>

        <select
          id="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {selectedCountry.states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};