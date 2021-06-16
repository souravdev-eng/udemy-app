import axios from 'axios';

const url = `http://192.168.0.103:4000/api/v1`;

export const getAllCourse = () => axios.get(`${url}/course`);
