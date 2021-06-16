import { GET_ALL_COURSE } from './cart.types';

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COURSE:
      return action.payload;
    default:
      return state;
  }
};

export default courseReducer;
