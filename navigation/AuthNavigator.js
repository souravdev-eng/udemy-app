import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthNavigator = createStackNavigator(
  {
    Account: { screen: AccountScreen },
    Login: { screen: LoginScreen },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      initialRouteName: 'Account',
    },
  }
);

export default createAppContainer(AuthNavigator);
