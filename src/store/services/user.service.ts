import axios from 'axios';

export const fetchUsersService = () => axios({
  method: 'get',
  url: '/',
});