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
            <View style={styles.header}>
                {
                   item.type === 'Evento' && <Text style={styles.title} >{item.title}</Text>
                }
                <Text style={{...styles.type, backgroundColor: getTypeColor()}} >{item.type}</Text>
            </View>
            <View style={styles.cardBody} >
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
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    header:{
        width: '100%',
        minHeight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleContainer: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    type: {
        position: 'absolute',
        right: 0,
        borderRadius: 20,
        color: 'white',
        paddingHorizontal: 6
    },
    cardBody: {
        flexDirection: 'row'
    },
    imageContainer: {
        height: 120,
        width: 150,
        marginRight: 15,
    },
    image: {
        flex: 1, 
        width: '100%',
    },

});