import { CURRENT_USER, LOOG_IN } from './auth.types';

const INITAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOOG_IN:
      return action.payload;
    case CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
