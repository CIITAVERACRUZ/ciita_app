import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';

export type BottomTabsType = {
    HomeScreen: undefined
} 

const Tab = createBottomTabNavigator<BottomTabsType>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
}