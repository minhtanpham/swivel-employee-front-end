import { createReducer } from '@reduxjs/toolkit';

import { getEmployeeList, deleteAnEmployee } from '@/redux/actions';
import { Employee } from '@/components/EmployeeCard/employee-card';
import { changeEmployeeDisplay } from '@/redux/actions';

export type EmployeeState = {
  employees: Array<Employee>;
  isFetchingList: boolean;
  isFetchingError: boolean;
  display: 'grid' | 'list';
  isDeletingEmployeeId: string;
  isDeleteEmployeeErrorId: string;
};

const initialState: EmployeeState = {
  employees: [],
  isFetchingList: false,
  isFetchingError: false,
  display: 'grid',
  isDeletingEmployeeId: '',
  isDeleteEmployeeErrorId: ''
};

export const employeeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeEmployeeDisplay, (state) => {
      state.display === 'grid'
        ? (state.display = 'list')
        : (state.display = 'grid');
    })
    .addCase(getEmployeeList.pending, (state) => {
      state.isFetchingList = true;
    })
    .addCase(getEmployeeList.fulfilled, (state, { payload }) => {
      state.isFetchingList = false;
      state.employees = payload;
    })
    .addCase(getEmployeeList.rejected, (state) => {
      state.isFetchingList = false;
      state.isFetchingError = true;
    })
    .addCase(deleteAnEmployee.pending, (state, { meta }) => {
      state.isDeletingEmployeeId = meta.arg;
    })
    .addCase(deleteAnEmployee.fulfilled, (state, { payload }) => {
      state.isDeletingEmployeeId = '';
      state.employees = payload;
    })
    .addCase(deleteAnEmployee.rejected, (state, { meta }) => {
      state.isDeletingEmployeeId = '';
      state.isDeleteEmployeeErrorId = meta.arg;
    });
});
