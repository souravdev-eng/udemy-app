import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import BottamNavigator from './navigation/BottamNavigator';
import store from './redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BottamNavigator />
      </Provider>
    </>
  );
}
