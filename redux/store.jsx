import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './auth/auth.reducer';

import cartReducer from './cart/cart.reducer';
import courseReducer from './course/course.reducer';

const rootReducer = combineReducers({
  course: courseReducer,
  user: userReducer,
  cart: cartReducer,
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
