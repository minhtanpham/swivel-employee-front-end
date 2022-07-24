/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { employeeReducer } from '@/redux/reducers';

export const store = configureStore({
  reducer: {
    employee: employeeReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
