import axios, { AxiosResponse } from 'axios';
import { Employee } from '@/components/EmployeeCard/employee-card';
import { getEmployeeListRequest } from '@/apis/employee';
import { apiRequest } from '@/apis/index';

jest.mock('axios');

describe('List employee page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.create.mockReturnThis();
  });

  it('Fetch the API', async () => {
    const mockResponseData: Array<Employee> = [
      {
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
      },
      {
        created_date: '2022-07-18T15:04:11.000Z',
        deleted: false,
        email: 'Melany_Rau70@gmail.com',
        first_name: 'Lulu',
        gender: 'F',
        last_name: 'Reinger',
        number: '+94771277687',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
        __v: 0,
        _id: '62d5766b5d5b43787783f38b'
      }
    ];
    const mockedResponse: AxiosResponse = {
      data: mockResponseData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {}
    };

    axios.get.mockResolvedValue(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const data = await getEmployeeListRequest();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(mockResponseData);
  });
});
