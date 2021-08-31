import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { Platillos } from '../../data/GastronomiaData'
import { Platillo } from '../../interfaces/AppInterfaces'
import { Colors } from '../../theme/Colors'

export const ProfileScreen = () => {

    const renderPhoto = (item: string) => {
        return ( 
            <View style={{height: 100, width: 100, marginRight: 10}}>
             <Image source={{uri: item}} style={{flex: 1, width: '100%'}} resizeMode='cover' />
            </View>
            )
    }

    const renderItem = (item: Platillo) => {
        return ( 
        <View style={{height: 100, width: 100, marginRight: 10}}>
            <View style={{position: 'absolute', bottom: 0, width: '100%', zIndex: 2, backgroundColor: 'rgba(1, 1, 1, 0.45)'}} >
                <Text style={{color: 'white'}} > {item.name} </Text>
            </View>
         <Image source={{uri: item.images[0]}} style={{flex: 1, width: '100%'}} resizeMode='cover' />
        </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{position: 'absolute', zIndex: -1, width: '100%', height: 200}}>
            <LinearGradient colors={[Colors.skyblue, Colors.slime]} style={{flex: 1}} />
        </View>
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 5}} >
            <Text style={{fontSize: 20, fontWeight: 'bold'}} >El Volador</Text>
            <Text style={{fontSize: 15, color: 'black'}} >Restaurant</Text>
            <View style={styles.imageC} >
                <Image 
                    source={{uri:  'https://vhlblog.vistahigherlearning.com/wp-content/uploads/2020/06/Imagen-voladores-de-Papantla-2.jpg'}} 
                    style={{flex: 1}}
                />
            </View>
        </View>
        <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}} >
            <View style={styles.text}>
                <Icon name='restaurant-outline' style={{marginLeft: 15}} size={20} />
                <TextInput style={styles.input} >El Volador</TextInput>
            </View>
            <View style={{...styles.text, marginTop: 10, height: 60}}>
                <Icon name='create-outline' style={{marginLeft: 15}} size={20} />
                <TextInput
                    style={styles.input} 
                    multiline={true}
                >
                    Restaurante tradicional con todo tipo de platillos de la región.
                </TextInput>
            </View>
            <View style={{...styles.text, marginTop: 10, height: 160, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name='images-outline' style={{marginLeft: 15}} size={20} />
                    <Text style={{...styles.input, marginVertical: 10}} >Fotos</Text>
                </View>
                <FlatList
                    style={{width: '100%'}}
                    horizontal
                    data={[
                        'https://www.zonaturistica.com/files/restaurantes/1724/R1_1724.jpg',
                        'https://rutatotonaca.mx/app/wp-content/uploads/2020/12/El-zaguan-papantla-interior.jpg',
                        'https://www.zonaturistica.com/files/restaurantes/1724/R1_1724.jpg',
                        'https://rutatotonaca.mx/app/wp-content/uploads/2020/12/El-zaguan-papantla-interior.jpg'
                    ]}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => renderPhoto(item)}
                />
            </View>
            <View style={{...styles.text, marginTop: 10, height: 160, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name='pricetags-outline' style={{marginLeft: 15}} size={20} />
                    <Text style={{...styles.input, marginVertical: 10}} >Productos</Text>
                </View>
                <FlatList
                    style={{width: '100%'}}
                    horizontal
                    data={Platillos}
                    keyExtractor={(item) => item.name}
                    renderItem={({item}) => renderItem(item)}
                />
            </View>
            <TouchableOpacity style={{...styles.text, marginTop: 10, marginBottom: 30}}>
                <Icon name='document-attach-outline' style={{marginLeft: 15}} size={20} />
                <Text style={styles.input} >Subir menú</Text>
                <Icon name='chevron-forward-outline' style={{marginLeft: 15, position: 'absolute' ,right: 15}} size={20} />
            </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageC: {
        borderRadius: 100,
        backgroundColor: Colors.cream,
        height: 150,
        width: 150,
        overflow: 'hidden', 
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },

    button: {
        borderWidth: 2, 
        borderColor: Colors.skyblue, 
        marginBottom: 30,
        width: 200,
        alignItems: 'center',
        paddingVertical: 15, 
        borderRadius: 25
    },
    text: {
        flexDirection: 'row',
        backgroundColor: Colors.cream, 
        width: '85%', borderRadius: 20 ,
        height: 40, 
        alignItems: 'center', 
        overflow: 'hidden'
    },
    input: {
        marginLeft: 10, 
        paddingRight: 50,
        color: 'black'
    }
});
