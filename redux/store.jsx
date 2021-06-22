import thunk from 'redux-thunk';
import createSecureStore from 'redux-persist-expo-securestore';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';
import courseReducer from './course/course.reducer';

// Declare secure storage
const secureStorage = createSecureStore();

// Setup config
const presistConfig = {
  key: 'root',
  storage: secureStorage,
  whitelist: ['user'],
};
const middleware = [thunk];

// declare root reducer
const rootReducer = combineReducers({
  course: courseReducer,
  user: userReducer,
  cart: cartReducer,
});
// Create prist reducer
const presistedReducer = persistReducer(presistConfig, rootReducer);

// Create prisitedStore and export it

export const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const pristore = persistStore(store);
