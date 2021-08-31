import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RecoverPasswordScreen } from '../screens/auth/RecoverPasswordScreen';
import { SigninScreen } from '../screens/auth/SigninScreen';
import { SignupScreen } from '../screens/auth/SignupScreen';
import { BottomTabs } from './BottomTabs';
import { AuthContext } from '../context/AuthContext';
import { AccountType } from '../screens/auth/AccountType';
import { BusinessType } from '../screens/auth/BusinessType';

export type AuthStackType = {
    SigninScreen: undefined,
    SignupScreen: {
      type: string,
      name?: 'artisan' | 'hotel' | 'restaurant' | 'other'
    },
    AccountType: undefined,
    RecoverPasswordScreen: undefined,
    BusinessType: undefined
}

export type NavigatorType = {
  BottomTabs: undefined
}


const Stack = createStackNavigator<NavigatorType>();
const AuthStack = createStackNavigator<AuthStackType>();

export const MainNavigation = () => {
  const {status} = useContext(AuthContext)

  if(status === 'authenticated') {
    return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="BottomTabs" component={ BottomTabs } />
    </Stack.Navigator>
    )
  }

  return (
    <AuthStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
      headerMode='none'
      initialRouteName='SigninScreen'
    >
      <AuthStack.Screen name='SigninScreen' component={SigninScreen} />
      <AuthStack.Screen name='SignupScreen' component={SignupScreen} />
      <AuthStack.Screen name='AccountType' component={AccountType} />
      <AuthStack.Screen name='BusinessType' component={BusinessType} />
      <AuthStack.Screen name='RecoverPasswordScreen' component={RecoverPasswordScreen} />
    </AuthStack.Navigator>
  );
}