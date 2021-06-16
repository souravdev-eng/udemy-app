import { addItemToCart, addToCart } from './cart.utils';
import { ADD_TO_CART_ITEM } from './cart.types';

const INITAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
