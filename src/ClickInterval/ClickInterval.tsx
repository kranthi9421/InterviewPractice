import { useEffect, useRef, useState } from "react";

const App = () => {
 
  const [count, setCount] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
  };

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resume = () => {
    start(); // ✅ reuse start directly
  };

  useEffect(() => {
    return () => pause();
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
};

export default App;
