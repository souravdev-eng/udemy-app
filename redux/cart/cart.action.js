import { ADD_TO_CART_ITEM } from './cart.types';

export const addToCart = (item) => ({
  type: ADD_TO_CART_ITEM,
  payload: item,
});
