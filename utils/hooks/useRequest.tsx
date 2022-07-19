import { useState } from 'react';

const useRequest = (request: Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const run = async () => {
    try {
      setLoading(true);
      const response = await request;
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return { loading, data, error, run };
};

export default useRequest;
