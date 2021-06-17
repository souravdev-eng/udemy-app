import React from 'react';
import { Provider, useSelector } from 'react-redux';
import BottamNavigator from './navigation/BottamNavigator';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BottamNavigator />
    </Provider>
  );
}
