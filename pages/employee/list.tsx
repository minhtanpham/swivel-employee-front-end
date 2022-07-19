import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import useRequest from '../../utils/hooks/useRequest';

const EmployeeListPage: FC<any> = () => {
  const { loading, data, error } = useRequest(
    axios.get('https://swivel-backend.herokuapp.com/employee')
  );

  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md">
      <Typography>Welcome to Swivel Management</Typography>
      <Link href="/employee/list">
        <Button className="mt-4" color="primary" variant="contained">
          Visit
        </Button>
      </Link>
    </div>
  );
};

export default EmployeeListPage;
