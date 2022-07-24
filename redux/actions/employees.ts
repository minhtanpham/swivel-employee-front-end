import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import {
  getEmployeeListRequest,
  deleteAnEmployeeRequest
} from '@/apis/employee';

export const changeEmployeeDisplay = createAction('employee/display');

export const getEmployeeList = createAsyncThunk('employee/list', async () => {
  const response = await getEmployeeListRequest();
  return response.data;
});

export const deleteAnEmployee = createAsyncThunk(
  'employee/delete',
  async (id: string) => {
    await deleteAnEmployeeRequest(id);
    const response = await getEmployeeListRequest();
    return response.data;
  }
);
