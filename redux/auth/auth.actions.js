import api from '../../api/authApi';
import { CURRENT_USER, LOOG_IN } from './auth.types';
import authStorage from '../../store/authStorage';

const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(email, password);
    await authStorage.storeToken(data.token);
    dispatch({
      type: LOOG_IN,
      payload: {
        token: data.token,
        _id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const currentUser = () => async (dispatch) => {
  const token = await authStorage.getToken();
  if (!token) return;
  dispatch({
    type: CURRENT_USER,
    payload: {
      id: token._id,
      email: token.email,
      name: token.name,
    },
  });
};

export default {
  loginUser,
  currentUser,
};
