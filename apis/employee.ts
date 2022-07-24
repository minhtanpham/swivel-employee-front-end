import { apiRequest } from './index';

export const getEmployeeListRequest = () =>
  apiRequest('/employee', {
    method: 'GET'
  });

export const deleteAnEmployeeRequest = (id: string) =>
  apiRequest(`/employee/${id}`, {
    method: 'DELETE'
  });
