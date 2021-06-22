import api from '../../api/authApi';
import jwtDecode from 'jwt-decode';
import { LOOGED_OUT, LOOG_IN } from './auth.types';
import authStorage from '../../store/authStorage';

const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(email, password);
    // await authStorage.storeToken(data.token);
    const token = jwtDecode(data.token);
    if (!token) return;

    dispatch({
      type: LOOG_IN,
      payload: {
        _id: token.id,
        name: token.name,
        email: token.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const removeUser = () => async (dispatch) => {
  try {
    await authStorage.removeToken();
    dispatch({
      type: LOOGED_OUT,
      payload: {
        currentUser: null,
      },
    });
  } catch (error) {
    console.log('REDUX REMOVING ERROR', error);
  }
};

export default {
  loginUser,
  removeUser,
};
