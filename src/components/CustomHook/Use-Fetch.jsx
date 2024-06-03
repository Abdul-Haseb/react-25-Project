import { useEffect, useState } from "react";

export default function useFetchCustomHook(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(`${error} some Error occured`);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchUserData();
  }, [url]);

  return { data, loading, error };
}
