import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { Platillo, Sitio } from '../interfaces/AppInterfaces';
import { Colors } from '../theme/Colors';

interface Props{
    item: Sitio | Platillo
}

export const ScreenItem = ({item}: Props) => {
    return (
        <TouchableOpacity 
            style={styles.placeContainer}
            activeOpacity={.7}
        >
            <View style={{height: '100%', width: '100%'}}>
                <Image source={{uri: item.images[0]}} style={{flex: 1}} />
            </View>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
                <Text style={styles.textPlace} >{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeContainer: {
        width: '47%',
        height: 130,
        backgroundColor: Colors.cream,
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    textPlace: {
        color: 'white', 
        backgroundColor: 'rgba(1, 1, 1, 0.45)', 
        fontSize: 14,
        paddingLeft: 5
    }
});
