import { FC, useEffect, useCallback } from 'react';
import { CircularProgress, IconButton } from '@mui/material';
import { MdList, MdGrid3X3 } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { isEmpty } from '@/utils/helpers';
import ConditionView from '@/components/ConditionView';
import { Employee } from '@/components/EmployeeCard/employee-card';
import EmployeeCard from '@/components/EmployeeCard';

import { changeEmployeeDisplay, getEmployeeList } from '@/redux/actions';
import { employeeSelector } from '@/redux/selectors';

const EmployeeListPage: FC<any> = () => {
  const dispatch = useAppDispatch();
  const { employees, isFetchingList, isFetchingError, display } =
    useAppSelector(employeeSelector);

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  const handleChangeDisplayStyle = useCallback(() => {
    dispatch(changeEmployeeDisplay());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md">
      <div className="w-full flex mb-3 items-center justify-end">
        <IconButton
          className="bg-swivel-primary text-white"
          onClick={handleChangeDisplayStyle}
        >
          {display === 'grid' ? <MdGrid3X3 /> : <MdList />}
        </IconButton>
      </div>
      <ConditionView condition={isFetchingError}>Error</ConditionView>
      <ConditionView condition={isFetchingList}>
        <CircularProgress />
      </ConditionView>
      <ConditionView
        condition={!isFetchingList && !isEmpty<Array<Employee>>(employees)}
      >
        {display === 'grid' ? (
          <div className="w-full grid gap-8 employee-grid">
            {employees &&
              employees.map((employee: Employee) => {
                const { _id } = employee;
                return (
                  <EmployeeCard data={employee} key={_id} type={display} />
                );
              })}
          </div>
        ) : (
          <div className="w-full flex flex-col">
            {employees &&
              employees.map((employee: Employee) => {
                const { _id } = employee;
                return (
                  <EmployeeCard data={employee} key={_id} type={display} />
                );
              })}
          </div>
        )}
      </ConditionView>
    </div>
  );
};

export default EmployeeListPage;
