import { NextPage } from 'next';
import { Typography, Button } from '@mui/material';
import Link from 'next/link';

import { getSingleEmployeebyId } from '@/apis/employee';
import { Employee } from '@/components/EmployeeCard/employee-card';
import EmployeeeForm from '@/components/forms/EmployeeForm';

const EditEmployeePage: NextPage<{ data: Employee; id: string }> = ({
  data,
  id
}) => {
  const defaultValues = {
    _id: id,
    first_name: data?.first_name ?? '',
    last_name: data?.last_name ?? '',
    email: data?.email ?? '',
    number: data?.number ?? '',
    photo: data?.photo ?? '',
    gender: data?.gender ?? 'M'
  };

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
        Update employee
      </Typography>
      <EmployeeeForm defaultValues={defaultValues} />
    </div>
  );
};

export default EditEmployeePage;

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  let employee: Employee;
  try {
    const response = await getSingleEmployeebyId(id);
    employee = response.data;
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      return {
        redirect: {
          destination: '/404',
          permanent: false
        }
      };
    }
    return {
      redirect: {
        destination: '/500',
        permanent: false
      }
    };
  }

  return {
    props: { data: employee, id }
  };
}
