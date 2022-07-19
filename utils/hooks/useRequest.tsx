import { useState, useEffect } from 'react';

const useRequest = (request: Promise<any>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await request;
        setLoading(false);
        setData(response);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { loading, data, error };
};

export default useRequest;
