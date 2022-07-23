import { FC, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

import { isEmpty } from '@/utils/helpers';
import ConditionView from '@/components/ConditionView';
import useRequest from '@/utils/hooks/useRequest';
import { Employee } from '@/components/EmployeeCard/employee-card';
import EmployeeCard from '@/components/EmployeeCard';

const EmployeeListPage: FC<any> = () => {
  const {
    loading,
    data,
    run: getEmployeeList
  } = useRequest(axios.get('https://swivel-backend.herokuapp.com/employee'));

  useEffect(() => {
    getEmployeeList();
  }, [getEmployeeList]);

  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md">
      <ConditionView condition={loading}>
        <CircularProgress />
      </ConditionView>
      <ConditionView condition={!loading && !isEmpty<Array<Employee>>(data)}>
        <div className="w-full grid gap-8 employee-grid">
          {data &&
            data.map((employee: Employee) => {
              const { _id } = employee;
              return <EmployeeCard data={employee} key={_id} />;
            })}
        </div>
      </ConditionView>
    </div>
  );
};

export default EmployeeListPage;
