import { useEffect, useState } from "react";

 const useDebounce = (val: string, del: number) => {
 
  const [debVal, setDebVal] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebVal(val);
    }, del);

    return () => clearTimeout(timer);
  
  }, [val, del]);

  return debVal;
};


export default useDebounce
