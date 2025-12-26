import  useDebounce  from "./useDebounce";
import { useState } from "react";

const data = ["hayu", "daksh", "dog", "pig", "girafee", "eagle", "rihno"]

const DebounceList = () => {
 
  const [input, setInput] = useState("");

  const deb = useDebounce(input, 5000);

  const filterData = data.filter((item) =>
    item.toLowerCase().includes(deb.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {filterData.length > 0
        ? filterData.map((item) => <li key={item}>{item}</li>)
        : "No results"}
    </div>
  );
};

export default DebounceList;
