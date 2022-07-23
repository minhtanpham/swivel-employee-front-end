declare namespace EmployeeCardTypes {
  export interface Employee {
    created_date: string;
    deleted?: boolean;
    email: string;
    first_name: string;
    gender: 'M' | 'F';
    last_name: string;
    number: string;
    photo: string;
    _id: string;
    __v?: number;
  }
  export interface EmployeeCardProps {
    data: Employee;
    type?: 'grid' | 'list';
  }
}

export = EmployeeCardTypes;
export as namespace EmployeeCardTypes;
