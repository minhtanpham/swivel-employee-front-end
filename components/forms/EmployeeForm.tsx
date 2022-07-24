import { FC, useCallback } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  Typography,
  Select,
  MenuItem,
  Button,
  CircularProgress
} from '@mui/material';

import CustomInput from './components/CustomInput';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { createNewEmployee, updateEmployee } from '@/redux/actions';
import { employeeSelector } from '@/redux/selectors/employees';

const phoneRegExp = /^\+94[0-9]{6,12}$/;

export const employeeSchema = yup.object({
  first_name: yup
    .string()
    .max(10, 'First name maximum character is 10')
    .min(6, 'First name maximum character is 6')
    .required('First name is required'),
  last_name: yup
    .string()
    .max(10, 'Last name maximum character is 10')
    .min(6, 'Last name maximum character is 6')
    .required('Last name is required'),
  email: yup.string().required('Email is required').email(),
  number: yup
    .string()
    .required('Phone is required')
    .matches(phoneRegExp, 'Invalid phone number'),
  gender: yup.string()
});

export interface Employeeform {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  photo: string;
  gender: 'M' | 'F';
}

export interface SubscribeRequest {
  token: string;
  contact: Employeeform;
}

export interface EmployeeeFormProps {
  defaultValues?: Employeeform;
}

const EmployeeeForm: FC<EmployeeeFormProps> = ({ defaultValues }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isCreatingNewEmployee, isCreatingNewEmployeeError } =
    useAppSelector(employeeSelector);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<Employeeform>({
    resolver: yupResolver(employeeSchema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<Employeeform> = useCallback(
    async (data) => {
      const { first_name, last_name, number, email, gender, photo } = data;

      if (!defaultValues) {
        // if this form doesnt provide the default value, the action is create new one
        dispatch(
          createNewEmployee({
            first_name,
            last_name,
            email,
            number,
            gender,
            photo:
              gender === 'F'
                ? 'https://www.w3schools.com/howto/img_avatar2.png'
                : 'https://www.w3schools.com/w3images/avatar2.png'
          })
        ).then(() => {
          router.push('/employee/list');
          reset();
        });
      } else {
        // if this form doesnt provide the default value, the action is update one
        const { _id } = defaultValues;
        dispatch(
          updateEmployee({
            _id,
            first_name,
            last_name,
            email,
            number,
            gender,
            photo
          })
        ).then(() => {
          router.push('/employee/list');
        });
      }
    },
    [defaultValues, dispatch, reset, router]
  );

  return (
    <form className="w-5/12" onSubmit={handleSubmit(onSubmit)}>
      {isCreatingNewEmployeeError && (
        <Typography className="text-red-500 mt-1 text-sm mb-3">
          {defaultValues
            ? 'Error when update employee. Please try again'
            : 'Error when create new employee. Please try again'}
        </Typography>
      )}
      <div className="flex flex-col gap-4">
        <div className="w-full flex-wrap">
          <CustomInput
            defaultValue={defaultValues?.first_name || ''}
            placeholder="Enter first name"
            type="text"
            hasError={(errors?.first_name?.message ?? '').length > 0}
            {...register('first_name')}
          />
          <Typography className="text-red-500 mt-1 text-sm">
            {errors.first_name?.message}
          </Typography>
        </div>
        <div className="w-full">
          <CustomInput
            defaultValue={defaultValues?.last_name || ''}
            placeholder="Enter last name"
            type="text"
            hasError={(errors?.last_name?.message ?? '').length > 0}
            {...register('last_name')}
          />
          <Typography className="text-red-500 mt-1 text-sm">
            {errors.last_name?.message}
          </Typography>
        </div>
        <div className="w-full">
          <CustomInput
            defaultValue={defaultValues?.email || ''}
            placeholder="Enter email"
            type="text"
            hasError={(errors?.email?.message ?? '').length > 0}
            {...register('email')}
          />
          <Typography className="text-red-500 mt-1 text-sm">
            {errors.email?.message}
          </Typography>
        </div>
        <div className="w-full">
          <CustomInput
            defaultValue={defaultValues?.number || ''}
            placeholder="Enter phone"
            type="text"
            hasError={(errors?.number?.message ?? '').length > 0}
            {...register('number')}
          />
          <Typography className="text-red-500 mt-1 text-sm">
            {errors.number?.message}
          </Typography>
        </div>
        <div className="w-full">
          <Select
            className="w-full appearance-none border-swivel-primary"
            label="Gender"
            {...register('gender')}
            defaultValue={defaultValues?.gender || 'M'}
          >
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
          </Select>
        </div>
        <Button
          type="submit"
          className="w-full rounded-full bg-swivel-primary px-8 py-3 text-white font-bold text-lg appearance-none outline-none disabled:opacity-70 disabled:bg-gray-600 transition-all duration-300"
          disabled={!isValid || isCreatingNewEmployee}
        >
          {isCreatingNewEmployee ? <CircularProgress size={20} /> : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default EmployeeeForm;
