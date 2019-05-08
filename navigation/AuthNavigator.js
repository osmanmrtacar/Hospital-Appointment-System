import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

import React from 'react';
import { createStackNavigator} from 'react-navigation';



export default createStackNavigator({ SignIn: LoginScreen, SignUp: SignUpScreen });