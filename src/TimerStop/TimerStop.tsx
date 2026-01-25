import { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    countRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          if (countRef.current) {
            clearInterval(countRef.current);
            countRef.current = null;
          }
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    // cleanup when component unmounts
    return () => {
      if (countRef.current) {
        clearInterval(countRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default App;