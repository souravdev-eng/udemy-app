import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './cart/cart.reducer';
import courseReducer from './course/course.reducer';

const rootReducer = combineReducers({
  course: courseReducer,
  cart: cartReducer,
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
