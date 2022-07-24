import { Employee } from '@/components/EmployeeCard/employee-card';
import { apiRequest } from './index';

export const getEmployeeListRequest = () =>
  apiRequest('/employee', {
    method: 'GET'
  });

export const getSingleEmployeebyId = (id: string) =>
  apiRequest(`/employee/${id}`, {
    method: 'GET'
  });

export const deleteAnEmployeeRequest = (id: string) =>
  apiRequest(`/employee/${id}`, {
    method: 'DELETE'
  });

export const createNewEmployeeRequest = (
  data: Pick<
    Employee,
    'first_name' | 'last_name' | 'email' | 'gender' | 'number' | 'photo'
  >
) =>
  apiRequest('/employee', {
    method: 'POST',
    data
  });

export const updateEmployeeRequest = (
  data: Pick<
    Employee,
    'first_name' | 'last_name' | 'email' | 'gender' | 'number' | 'photo' | '_id'
  >
) =>
  apiRequest(`/employee/${data._id}`, {
    method: 'PUT',
    data
  });
