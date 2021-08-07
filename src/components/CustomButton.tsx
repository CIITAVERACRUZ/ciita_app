import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../theme/Colors';

interface Props{
    title: string,
    onPress?: () => void
}

export const CustomButton = ( {title, onPress}: Props ) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress} >
            <Text style={{fontSize: 20, color: Colors.cream}} > {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.granate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
            }
});
