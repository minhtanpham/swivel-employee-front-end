import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const InternalErrorPage: FC<any> = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md">
      <Typography>500 - Internal error</Typography>
      <Link href="/employee/list">
        <Button className="mt-4" color="primary" variant="contained">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default InternalErrorPage;
