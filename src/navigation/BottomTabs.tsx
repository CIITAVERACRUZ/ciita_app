import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { BusinessScreen } from '../screens/home/BusinessScreen';
import { FoodScreen } from '../screens/home/FoodScreen';
import { PlacesScreen } from '../screens/home/PlacesScreen';
import { ProfileScreen } from '../screens/home/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/Colors';
import { StyleSheet, View } from 'react-native';
import { BusinessStack, FoodsStack, HomeStack, PlacesStack } from './AppStacks';

export type BottomTabsType = {
  HomeScreen: undefined,
  BusinessScreen: undefined,
  FoodScreen: undefined,
  PlacesScreen: undefined,
  ProfileScreen: undefined,
} 

const Tab = createBottomTabNavigator<BottomTabsType>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';
            let focusedColor: string = '';

            if(route.name === 'HomeScreen'){
              iconName = focused ? 'home' : 'home-outline' 
              focusedColor = Colors.granate
            }
            if(route.name === 'BusinessScreen'){
              iconName = focused ? 'business' : 'business-outline'
              focusedColor = Colors.pink
            }
            if(route.name === 'FoodScreen'){
              iconName = focused ? 'fast-food' : 'fast-food-outline'
              focusedColor = Colors.lime
            }
            if(route.name === 'PlacesScreen'){
              iconName = focused ? 'map' : 'map-outline'
              focusedColor = Colors.green
            }
            if(route.name === 'ProfileScreen'){
              iconName = focused ? 'person' : 'person-outline'
              focusedColor = Colors.skyblue
            }

            return (
              <View style={styles.iconContainer}>
                <View style={{
                    ...styles.icon,
                    borderColor: focused ? focusedColor : Colors.cream,
                   }}>
                <Icon name={iconName} color={focused ? focusedColor : Colors.cream} size={size} />
                </View>
              </View>
            ) 
          },
        }
      )}

      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowColor: 'transparent',
          borderTopWidth: 0,
          marginBottom: 5,
          marginTop: 5
        }
      }}

      initialRouteName='HomeScreen'
    >
      <Tab.Screen name="HomeScreen" component={HomeStack} />
      <Tab.Screen name="PlacesScreen" component={PlacesStack} />
      <Tab.Screen name="FoodScreen" component={FoodsStack} />
      <Tab.Screen name="BusinessScreen" component={BusinessStack} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    iconContainer: {
      flex: 1, 
      width: '100%', 
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    icon: {
      width: 50, 
      height: 50, 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 100, 
      borderWidth: 3,
      marginBottom: 5
    }
});