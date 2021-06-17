import axios from 'axios';

const url = `http://192.168.0.103:4000/api/v1`;

const loginUser = (email, password) =>
  axios.post(`${url}/user/login`, { email, password });

export default {
  loginUser,
};
