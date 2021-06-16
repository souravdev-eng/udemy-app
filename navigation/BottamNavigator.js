import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import FeacheredNavigator from './FeacheredNavigator';
import SearchScreen from '../screens/SearchScreen';
import MyLearningScreen from '../screens/MyLearningScreen';
import WishiListScreen from '../screens/WishiListScreen';
import AuthNavigator from './AuthNavigator';
import AccountScreen from '../screens/AccountScreen';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Feacherd: {
      screen: FeacheredNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name='star' size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons name='search' size={28} color={tabInfo.tintColor} />
          );
        },
      },
    },

    MyLearning: {
      screen: MyLearningScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name='playcircleo' size={23} color={tabInfo.tintColor} />
          );
        },
      },
    },
    WishiList: {
      screen: WishiListScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <AntDesign name='heart' size={23} color={tabInfo.tintColor} />;
        },
        tabBarLabel: 'Wishi List',
      },
    },

    Account: {
      screen: AuthNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name='account-circle'
              size={29}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#0a81ab',
      allowFontScaling: true,
      style: {
        borderTopWidth: 0.4,
        borderTopColor: '#888',
      },
    },
  }
);

export default createAppContainer(BottomTabNavigator);
