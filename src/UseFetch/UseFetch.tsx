import { useEffect, useState } from "react";

// cache using Map
const cache = new Map<string, any>();

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 1️⃣ return cached data if available
    if (cache.has(url)) {
      setData(cache.get(url));
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Something went wrong");

        const result = await res.json();
        cache.set(url, result); // 2️⃣ cache response

        setData(result);
        setLoading(false);
      } catch (err: any) {
        if (err.name === "AbortError") return; // 3️⃣ cancelled
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    // 4️⃣ cleanup → prevent memory leaks
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};