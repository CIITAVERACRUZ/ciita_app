import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { FlatList, Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { DummyUsers } from '../../../data/DummyUsers'
import { Platillos } from '../../../data/GastronomiaData'
import { Restaurants } from '../../../data/NegociosData'
import { Platillo, Restaurant } from '../../../interfaces/AppInterfaces'
import { FoodsStackType, PlacesStackType } from '../../../navigation/AppStacks'
import { Colors } from '../../../theme/Colors'

interface Props extends StackScreenProps<FoodsStackType | PlacesStackType, 'DetailsScreen' >{}

export const DetailsScreen = ({route}: Props) => {
     
     const  {item} = route.params;
     const {images, name, description} = item;     

     const openMap = () => {
          const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
          const latLng = `${item.location.lat},${item.location.lng}`;
          const label = 'Custom Label';
          const url: any = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
          });
          Linking.openURL(url);
     }

     const renderPhoto = (item: Restaurant | Platillo) => {
          return ( 
              <TouchableOpacity 
                    style={{
                         height: 100,
                         width: 100, 
                         marginRight: 10,
                         shadowColor: "#000",
                         shadowOffset: {
                             width: 0,
                             height: 6,
                         },
                         shadowOpacity: 0.39,
                         shadowRadius: 8.30,
                 
                         elevation: 13,
                    }}

               >
                    <View style={{width: '100%', position: 'absolute', bottom: 0}}>
                         <Text 
                              style={{
                                   color: 'white', 
                                   backgroundColor: 'rgba(1, 1, 1, 0.45)', 
                                   fontSize: 10,
                                   paddingLeft: 5,
                                   zIndex: 10
                              }} 
                         >
                              {item.name}
                         </Text>
                    </View>
                    <Image source={{uri: item.images[0]}} style={{flex: 1, width: '100%'}} resizeMode='cover' />
              </TouchableOpacity>
              )
     }
  

     return (
          <SafeAreaView style={{flex: 1}} >
               <View style={{flex: 1}}>
                    <Image 
                         source={{uri: images[0]}} 
                         style={{flex: 1, width: '100%'}}
                         resizeMode='cover'
                    />
               </View>
               <ScrollView style={{flex: 1, height: '100%', paddingHorizontal: 20}}>
                    <Text style={styles.title} >{name}</Text>
                    <Text style={styles.desc} >{description}</Text>
                    {
                         item.places && (
                              <>
                                   <Text 
                                        style={{
                                             fontSize: 15,
                                             marginTop: 10,
                                             marginBottom: 5,
                                             fontWeight: 'bold'
                                        }}
                                   >
                                         Pruébalo aquí
                                   </Text>
                                   <FlatList
                                        style={{width: '100%', marginBottom: 40}}
                                        horizontal
                                        data={Restaurants}
                                        renderItem={({item}) => renderPhoto(item)}
                                        keyExtractor={(item) => item.name}
                                   />
                              </>
                         )
                    }
                    {
                         item.schedule && (
                              <>
                                   <Text>{item.schedule}</Text>
                                   {
                                        item.products && (
                                             <>
                                             <Text
                                                  style={{
                                                       fontSize: 15,
                                                       marginTop: 10,
                                                       marginBottom: 5,
                                                       fontWeight: 'bold'
                                                  }}
                                             >
                                                  Mejores platillos
                                             </Text>
                                             <FlatList
                                                  style={{width: '100%', marginBottom: 20}}
                                                  horizontal
                                                  data={Platillos}
                                                  renderItem={({item}) => renderPhoto(item)}
                                                  keyExtractor={(item) => item.name}
                                             />
                                             </>
                                        )
                                   }
                                   <View 
                                        style={{
                                             width: '100%',
                                             marginBottom: 20
                                        }}
                                   >
                                             <Text
                                                  style={{
                                                       fontSize: 15,
                                                       marginTop: 10,
                                                       marginBottom: 5,
                                                       fontWeight: 'bold'
                                                  }}
                                             >
                                                  Comentarios
                                             </Text>
                                             <FlatList 
                                                  data={DummyUsers}
                                                  renderItem={({item}) => (
                                                       <View style={{width: '100%', flexDirection: 'row', marginTop: 10}} >
                                                            <View style={{height: 50, width: 50, overflow: 'hidden', borderRadius: 100}} >
                                                                 <Image source={{uri: item.image}} style={{flex: 1, width: '100%'}} resizeMode='cover' />
                                                            </View>
                                                            <View 
                                                                 style={{
                                                                      flex: 1, 
                                                                      backgroundColor: Colors.cream, 
                                                                      paddingHorizontal: 20, 
                                                                      justifyContent: 'space-between',
                                                                      alignItems: 'center',
                                                                      marginLeft: 10,
                                                                      borderRadius: 100,
                                                                      flexDirection: 'row'
                                                                 }}
                                                            >
                                                                 <Text>{item.comment}</Text>
                                                                 <Text>
                                                                      {Math.floor(Math.random() * (5 - 4)) + 4}/5
                                                                 </Text>
                                                            </View>
                                                       </View>
                                                  )}
                                             />

                                   </View>
                              </>
                         )
                    }
               </ScrollView>

               {item.location && (
                         <TouchableOpacity 
                              style={styles.fab}
                              onPress={openMap}
                         >
                              <Text style={{paddingHorizontal: 5}} >¿Cómo llegar?</Text>
                              <Icon name='locate-outline' size={30} />
                         </TouchableOpacity>
                       )
                    }
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     title: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10
     },
     desc: {
          fontSize: 17,
          textAlign: 'justify'
     },
     fab: {
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: Colors.cream,
          padding: 10,
          borderRadius: 100,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.30,
  
          elevation: 13,
     }
});
