import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';

export const selectEmployee = (state: RootState) => state.employee;

export const employeeSelector = createSelector(
  selectEmployee,
  (state) => state
);
