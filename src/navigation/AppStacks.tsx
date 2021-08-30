import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Location, Platillo, Sitio } from "../interfaces/AppInterfaces";
import { DetailsScreen } from "../screens/home/DetailsScreens/DetailsScreen";
import { HomeItemDetail } from "../screens/home/DetailsScreens/HomeItemDetail";
import { HomeScreen } from "../screens/home/HomeScreen";
import { PlacesScreen } from '../screens/home/PlacesScreen';
import { FoodScreen } from '../screens/home/FoodScreen';
import { BusinessScreen } from "../screens/home/BusinessScreen";


export type HomeStackType = {
     Home: undefined,
     HomeDetails: {
          image: string,
          title: string,
          desc: string
     } 
}

const HomeScreens = createStackNavigator<HomeStackType>();
export const HomeStack = () => {
     return (
          <HomeScreens.Navigator
               initialRouteName={'Home'}
               screenOptions={{
                    cardStyle: {
                         backgroundColor: 'white',
                    }
               }}
               headerMode='none'
          >
               <HomeScreens.Screen name="Home" component={HomeScreen} />
               <HomeScreens.Screen name="HomeDetails" component={HomeItemDetail} />
          </HomeScreens.Navigator>
     )
}

export type PlacesStackType = {
     Places: undefined,
     DetailsScreen: {
          item: Sitio | Platillo
     }
}

const PlacesScreens = createStackNavigator<PlacesStackType>();
export const PlacesStack = () => {
 return (
      <PlacesScreens.Navigator
          initialRouteName={'Places'}
          screenOptions={{
               cardStyle: {
                    backgroundColor: 'white',
               }
          }}
          headerMode='none'
      >
           <PlacesScreens.Screen name="Places" component={PlacesScreen} />
           <PlacesScreens.Screen name="DetailsScreen" component={DetailsScreen} />
      </PlacesScreens.Navigator>
 )
}

export type FoodsStackType = {
     Foods: undefined,
     DetailsScreen: {
          item: Platillo | Sitio
     }
}

const FoodsScreens = createStackNavigator<FoodsStackType>();
export const FoodsStack = () => {
 return (
      <FoodsScreens.Navigator
          initialRouteName={'Foods'}
          screenOptions={{
               cardStyle: {
                    backgroundColor: 'white',
               }
          }}
          headerMode='none'
      >
           <FoodsScreens.Screen name="Foods" component={FoodScreen} />
           <FoodsScreens.Screen name="DetailsScreen" component={DetailsScreen} />
      </FoodsScreens.Navigator>
 )
}

export type BusinessStackType = {
     Business: undefined,
     DetailsScreen: {
          item: Platillo | Sitio
     }
}

const BusinessScreens = createStackNavigator<BusinessStackType>();
export const BusinessStack = () => {
 return (
      <BusinessScreens.Navigator
          initialRouteName={'Business'}
          screenOptions={{
               cardStyle: {
                    backgroundColor: 'white',
               }
          }}
          headerMode='none'
      >
           <BusinessScreens.Screen name="Business" component={BusinessScreen} />
           <BusinessScreens.Screen name="DetailsScreen" component={DetailsScreen} />
      </BusinessScreens.Navigator>
 )
}

