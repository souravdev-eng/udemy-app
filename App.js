import React from 'react';
import BottamNavigator from './navigation/BottamNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, pristore } from './redux/store';
import SearchResult from './components/search-result';
import SearchScreen from './screens/SearchScreen';
import CreateCourseScreen from './screens/teacher/courses/create-course-screen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={pristore}>
        {/* <SearchResult /> */}
        {/* <SearchScreen /> */}
        <CreateCourseScreen />
        {/* <BottamNavigator /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
