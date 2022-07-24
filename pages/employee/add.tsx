import { NextPage } from 'next';
import { Typography, Button } from '@mui/material';
import Link from 'next/link';

import EmployeeeForm from '@/components/forms/EmployeeForm';

const AddNewEmployeePage: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md">
      <div className="w-full flex items-center justify-end mb-5">
        <Link href="/employee/list">
          <Button className="bg-swivel-primary text-white px-5 rounded-full">
            List all employee
          </Button>
        </Link>
      </div>
      <Typography className="heading-1 text-swivel-primary mb-7">
        Add new employee
      </Typography>
      <EmployeeeForm />
    </div>
  );
};

export default AddNewEmployeePage;
