import axios, { AxiosError, AxiosResponse } from 'axios';

const handleResponseSuccess = (response: AxiosResponse) => response;

const handleResponseFail = (error: AxiosError): Promise<any> => {
  if (error?.response?.status !== 401) {
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

export const apiRequest = async (
  url: string,
  info: Record<string, string | number | Record<any, any>>
): Promise<AxiosResponse> => {
  const requestInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_ENDPOINT_API}${url}`,
    withCredentials: false
  });
  requestInstance.defaults.timeout = parseInt(
    process.env.NEXT_PUBLIC_REQUEST_TIMEOUT,
    0
  );
  requestInstance.interceptors.response.use(
    handleResponseSuccess,
    handleResponseFail
  );
  return await requestInstance(info);
};

export * from './employee';
