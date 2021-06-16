import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CardList from '../components/Feacherd/CardList';
import { colors } from '../config/colors';
import CartScren from '../screens/course/CartScren';
import CourseDetailsScreen from '../screens/course/CourseDetailsScreen';

const FeacheredNavigator = createStackNavigator(
  {
    Home: CardList,
    CourseDetails: CourseDetailsScreen,
    Cart: {
      screen: CartScren,
      navigationOptions: {
        headerTitle: 'Cart',
        headerStyle: {
          backgroundColor: '#ce1212',
        },
        headerTintColor: '#fff',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStatusBarHeight: 29,
      title: '',
    },
  }
);

export default createAppContainer(FeacheredNavigator);
