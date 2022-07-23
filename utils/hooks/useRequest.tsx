import { useState, useCallback } from 'react';

const useRequest = (request: Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const run = useCallback(async () => {
    try {
      setLoading(true);
      const response = await request;
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  return { loading, data, error, run };
};

export default useRequest;
