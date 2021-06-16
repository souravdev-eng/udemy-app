import * as api from '../../api/featchCourse';
import { GET_ALL_COURSE } from './cart.types';

export const getAllCourse = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCourse();
    dispatch({ type: GET_ALL_COURSE, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
