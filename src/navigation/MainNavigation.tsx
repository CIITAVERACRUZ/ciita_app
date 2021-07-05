import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RecoverPasswordScreen } from '../screens/auth/RecoverPasswordScreen';
import { SigninScreen } from '../screens/auth/SigninScreen';
import { SignupScreen } from '../screens/auth/SignupScreen';

export type AuthStackType = {
    SigninScreen: undefined,
    SignupScreen: undefined,
    RecoverPasswordScreen: undefined
}

const AuthStack = createStackNavigator<AuthStackType>();

export const MainNavigation = () => {
  return (
    <AuthStack.Navigator
      headerMode='none'
      initialRouteName='SigninScreen'
    >
      <AuthStack.Screen name='SigninScreen' component={SigninScreen} />
      <AuthStack.Screen name='SignupScreen' component={SignupScreen} />
      <AuthStack.Screen name='RecoverPasswordScreen' component={RecoverPasswordScreen} />
    </AuthStack.Navigator>
  );
}