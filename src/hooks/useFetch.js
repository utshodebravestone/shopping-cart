import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return { error, data };
};
export default useFetch;
