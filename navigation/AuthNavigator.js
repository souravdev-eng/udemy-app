import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import DashbordScreen from '../screens/auth/DashbordScreen';
import CreateCourseScreen from '../screens/teacher/courses/create-course-screen';

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerShown: false,
    initialRouteName: 'Account',
  },
};

const TeacherNavigator = createStackNavigator(
  {
    NewCourse: { screen: CreateCourseScreen },
  },
  defaultNavigationOptions
);

const AuthNavigator = createStackNavigator(
  {
    Account: { screen: AccountScreen },
    Login: { screen: LoginScreen },
    Dashbord: { screen: DashbordScreen },
    Teacher: TeacherNavigator,
  },
  defaultNavigationOptions
);

export default createAppContainer(AuthNavigator);
