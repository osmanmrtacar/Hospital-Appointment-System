import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from "./AuthNavigator";
import AdminTabNavigator from './AdminTabNavigator';


export default createAppContainer(createSwitchNavigator(
  {
    Main: MainTabNavigator,
    Auth: AuthNavigator,
    Admin: AdminTabNavigator
  },
  {
    initialRouteName: 'Auth',
  }
));