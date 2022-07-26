import { screen } from '@testing-library/react';
import React from 'react';

import EmployeeCard from '@/components/EmployeeCard';
import { renderForTest } from '@/utils/tests';
import { Employee } from '@/components/EmployeeCard/employee-card';

beforeAll(() => (console.error = jest.fn()));

describe('EmployeeCard', () => {
  it('Renders an EmployeeCard component', () => {
    const employee: Employee = {
      created_date: '2022-07-18T15:04:11.000Z',
      deleted: false,
      email: 'Vivien92@yahoo.com',
      first_name: 'Toni',
      gender: 'M',
      last_name: 'Boyle',
      number: '+94771277684',
      photo: 'https://randomuser.me/api/portraits/men/88.jpg',
      __v: 0,
      _id: '62d5766b5d5b43787783f385'
    };
    renderForTest(
      <EmployeeCard data={employee} key={employee._id} type="list" />
    );

    expect(screen.getByText('Toni')).toBeInTheDocument();
    expect(screen.getByText('Vivien92@yahoo.com')).toBeInTheDocument();
    expect(screen.getByText('+94771277684')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByAltText('Toni Boyle')).toBeTruthy();
  });
});
