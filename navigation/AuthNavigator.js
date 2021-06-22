import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import DashbordScreen from '../screens/auth/DashbordScreen';

const AuthNavigator = createStackNavigator(
  {
    Account: { screen: AccountScreen },
    Login: { screen: LoginScreen },
    Dashbord: { screen: DashbordScreen },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      initialRouteName: 'Account',
    },
  }
);

export default createAppContainer(AuthNavigator);
