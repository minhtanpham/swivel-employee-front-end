import { NextPage } from 'next';

import { getSingleEmployeebyId } from '@/apis/employee';
import { Employee } from '@/components/EmployeeCard/employee-card';

const EditEmployeePage: NextPage<{ data: Employee }> = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg p-6 rounded-md"></div>
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
    props: { data: employee }
  };
}
