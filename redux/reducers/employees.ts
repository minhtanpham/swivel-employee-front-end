import { createReducer } from '@reduxjs/toolkit';

import {
  getEmployeeList,
  deleteAnEmployee,
  createNewEmployee,
  updateEmployee,
  changeEmployeeDisplay
} from '@/redux/actions';
import { Employee } from '@/components/EmployeeCard/employee-card';

export type EmployeeState = {
  employees: Array<Employee>;
  isFetchingList: boolean;
  isFetchingError: boolean;
  display: 'grid' | 'list';
  isDeletingEmployeeId: string;
  isDeleteEmployeeErrorId: string;
  isCreatingNewEmployee: boolean;
  isCreatingNewEmployeeError: boolean;
  isUpdatingEmployee: boolean;
  isUpdatingEmployeeError: boolean;
};

const initialState: EmployeeState = {
  employees: [],
  isFetchingList: false,
  isFetchingError: false,
  display: 'grid',
  isDeletingEmployeeId: '',
  isDeleteEmployeeErrorId: '',
  isCreatingNewEmployee: false,
  isCreatingNewEmployeeError: false,
  isUpdatingEmployee: false,
  isUpdatingEmployeeError: false
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
      state.isFetchingError = false;
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
    })
    .addCase(createNewEmployee.pending, (state) => {
      state.isCreatingNewEmployee = true;
      state.isCreatingNewEmployeeError = false;
    })
    .addCase(createNewEmployee.fulfilled, (state) => {
      state.isCreatingNewEmployee = false;
    })
    .addCase(createNewEmployee.rejected, (state) => {
      state.isCreatingNewEmployee = false;
      state.isCreatingNewEmployeeError = true;
    })
    .addCase(updateEmployee.pending, (state) => {
      state.isUpdatingEmployee = true;
      state.isUpdatingEmployeeError = false;
    })
    .addCase(updateEmployee.fulfilled, (state) => {
      state.isUpdatingEmployee = false;
    })
    .addCase(updateEmployee.rejected, (state) => {
      state.isUpdatingEmployee = false;
      state.isUpdatingEmployeeError = true;
    });
});
