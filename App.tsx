import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigation/MainNavigation'
import 'react-native-gesture-handler';
import { AuthContext, AuthProvider } from './src/context/AuthContext';

const AppAuthState = ({children}: any) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

const App = () => {
  return (
    <NavigationContainer> 
      <AppAuthState>
        <MainNavigation/> 
      </AppAuthState>
    </NavigationContainer> 
  )
}

export default App;
