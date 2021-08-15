import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Evento, HomeItem } from '../interfaces/AppInterfaces'
import { Colors } from '../theme/Colors'
import { Badge } from './Badge'

interface Props{
    item: HomeItem | Evento,
}

export const HomeCard = ({item}: Props) => {
    const getTypeColor = () => {
        if(item.type === 'Turismo') return Colors.lime;
        if(item.type === 'Cultura') return Colors.pink;
        if(item.type === 'Historia') return Colors.granate;
        if(item.type === 'Evento') return Colors.green;
    }

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}  
                    source={{uri: item.image}} 
                    resizeMode='contain'
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'justify'}}>{item.description.slice(0, 100) + '...'}</Text>
            </View>
            <View style={{...styles.type, backgroundColor: getTypeColor()}}>
                <Text style={{marginHorizontal: 5, marginVertical: 2, color: 'white'}} >{item.type}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageContainer: {
        height: 150,
        width: 150,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden'
    },
    image: {
        flex: 1, 
        width: '100%',
    },
    type: {
        position: 'absolute',
        right: 0,
        top: 15,
        borderRadius: 20
    }
});