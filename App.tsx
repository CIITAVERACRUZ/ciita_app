import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigation/MainNavigation'
import 'react-native-gesture-handler';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import Toast from 'react-native-toast-message';

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
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer> 
  )
}

export default App;
