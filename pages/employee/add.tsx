import { NextPage } from 'next';
import { Typography } from '@mui/material';

import EmployeeeForm from '@/components/forms/EmployeeForm';

const AddNewEmployeePage: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md">
      <Typography className="heading-1 text-swivel-primary mb-7">
        Add new employee
      </Typography>
      <EmployeeeForm />
    </div>
  );
};

export default AddNewEmployeePage;
