import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import {
  getEmployeeListRequest,
  deleteAnEmployeeRequest,
  createNewEmployeeRequest,
  updateEmployeeRequest
} from '@/apis/employee';
import { Employee } from '@/components/EmployeeCard/employee-card';

export const changeEmployeeDisplay = createAction('employee/display');

export const getEmployeeList = createAsyncThunk('employee/list', async () => {
  const response = await getEmployeeListRequest();
  return response.data;
});

export const createNewEmployee = createAsyncThunk(
  'employee/create',
  async (
    employee: Pick<
      Employee,
      'first_name' | 'last_name' | 'email' | 'gender' | 'number' | 'photo'
    >
  ) => {
    const response = await createNewEmployeeRequest(employee);
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  'employee/update',
  async (
    employee: Pick<
      Employee,
      | 'first_name'
      | 'last_name'
      | 'email'
      | 'gender'
      | 'number'
      | 'photo'
      | '_id'
    >
  ) => {
    const response = await updateEmployeeRequest(employee);
    return response.data;
  }
);

export const deleteAnEmployee = createAsyncThunk(
  'employee/delete',
  async (id: string) => {
    await deleteAnEmployeeRequest(id);
    const response = await getEmployeeListRequest();
    return response.data;
  }
);
