/* eslint-disable @next/next/no-img-element */
import { FC, useCallback } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useRouter } from 'next/router';

import { deleteAnEmployee } from '@/redux/actions/employees';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { employeeSelector } from '@/redux/selectors';

import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

import type { EmployeeCardProps } from './employee-card';
import { isEmpty } from '@/utils/helpers';

const EmployeeCard: FC<EmployeeCardProps> = ({ data, type = 'list' }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isDeletingEmployeeId } = useAppSelector(employeeSelector);
  const { first_name, last_name, number, email, photo, gender, _id } = data;

  const handleDeleteEmployee = useCallback(() => {
    if (isEmpty<string>(isDeletingEmployeeId)) dispatch(deleteAnEmployee(_id));
  }, [isDeletingEmployeeId, dispatch, _id]);

  const handleEditEmployee = useCallback(() => {
    router.push(`/employee/edit/${_id}`);
  }, [_id, router]);

  if (type === 'grid') {
    return (
      <div className="rounded shadow-xl">
        <div className="w-full h-[200px] relative">
          <img
            alt={`${first_name} ${last_name}`}
            className="absolute w-full h-full object-cover object-center rounded-b-none"
            src={photo}
          />
        </div>
        <div className="p-3 flex flex-col flex-wrap break-all">
          <Typography className="heading-5 font-bold mb-1">{`${first_name} ${last_name}`}</Typography>
          <ul className="m-0 group pl-6">
            <li>
              <Typography className="text-sm">{number}</Typography>
            </li>
            <li>
              <Typography className="text-sm">{email}</Typography>
            </li>
            <li>
              <Typography className="text-sm">
                {gender === 'M' ? 'Male' : 'Female'}
              </Typography>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <span
            className="py-3 flex-1 flex items-center justify-center bg-swivel-red duration-200 transition-all opacity-70 hover:opacity-100 cursor-pointer"
            onClick={handleDeleteEmployee}
          >
            {isDeletingEmployeeId === _id ? (
              <CircularProgress size={16} />
            ) : (
              <FiTrash2 />
            )}
          </span>
          <span
            className="py-3 flex-1 flex items-center justify-center bg-swivel-green duration-200 transition-all opacity-70 hover:opacity-100 cursor-pointer"
            onClick={handleEditEmployee}
          >
            <FiEdit />
          </span>
        </div>
      </div>
    );
  }

  return (
    <TableContainer className="mb-4" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              <div className="w-14 h-14 relative">
                <img
                  alt={`${first_name} ${last_name}`}
                  className="absolute w-full h-full object-cover object-center rounded-b-none"
                  src={photo}
                />
              </div>
            </TableCell>
            <TableCell>{first_name}</TableCell>
            <TableCell>{last_name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{number}</TableCell>
            <TableCell>{gender === 'M' ? 'Male' : 'Female'}</TableCell>
            <TableCell>
              <FiTrash2 className="mr-3" onClick={handleDeleteEmployee} />
              <FiEdit onClick={handleEditEmployee} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeCard;
