import React, { useEffect, useRef, useState } from "react";

export const TimerStop = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prev) => (prev >= 10 ? prev : prev + 1));
    }, 1000);

    return () => {
      // Cleanup when component unmounts
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (count >= 10 && timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, [count]);

  return <h1 className="text-5xl">{count}</h1>;
};
