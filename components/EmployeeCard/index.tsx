/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { MdPermPhoneMsg, MdEmail } from 'react-icons/md';

import { Typography } from '@mui/material';

import type { EmployeeCardProps } from './employee-card';

const EmployeeCard: FC<EmployeeCardProps> = ({ data, type = 'list' }) => {
  const { first_name, last_name, number, email, photo } = data;

  if (type === 'list') {
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
          <span className="flex items-start">
            <MdPermPhoneMsg />
            <Typography className="ml-2">{number}</Typography>
          </span>
          <span className="flex items-start">
            <MdEmail />
            <Typography className="ml-2">{email}</Typography>
          </span>
        </div>
      </div>
    );
  }

  return <div className="rounded shadow"></div>;
};

export default EmployeeCard;
