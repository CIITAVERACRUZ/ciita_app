import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextClickeable } from '../../../components/TextClickable'
import { HomeStackType } from '../../../navigation/AppStacks'

interface Props extends StackScreenProps<HomeStackType, 'HomeDetails' >{}

export const HomeItemDetail = ({route}: Props) => {
     
     const { image, title, desc } = route.params;

     return (
          <SafeAreaView style={{flex: 1}} >
               <View style={{flex: 1}}>
                    <Image 
                         source={{uri: image}} 
                         style={{flex: 1, width: '100%'}}
                         resizeMode='cover'
                    />
               </View>
               <ScrollView style={{flex: 1, height: '100%', paddingHorizontal: 20}}>
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.desc} >{desc}</Text>
                    <View style={{marginVertical: 20}}>
                         <TextClickeable
                              onPress={() => console.log()}
                              color='blue'
                              title='¿Quieres saber más?'
                         />
                    </View>
               </ScrollView>
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
     }
});
