import { useEffect, useRef, useState } from "react";

const App = () => {
 
  const [count, setCount] = useState(0);
 
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
   
    countRef.current = setInterval(() => {
     
      setCount(prev => prev + 1);
  
    }, 1000);

    return () => {
     
      if (countRef.current) {
      
        clearInterval(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
  
    if (count >= 10 && countRef.current) {
      
      clearInterval(countRef.current);
     
      countRef.current = null;
    }
  }, [count]);

 
  return <h1>{count}</h1>;

};

export default App;
