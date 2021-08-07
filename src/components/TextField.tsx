import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';


interface Props{
    placeholder: string,
    icon?: string
}

export const TextField = ({placeholder, icon}: Props) => {
    return (
        <View style={styles.inputContainer}>
            { icon && <Icon name={icon} size={25} />}
            <TextInput style={{color: 'black', flex: 1, marginLeft: icon? 10:0 }}
                       placeholder={placeholder}
                       placeholderTextColor='gray' />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        color: 'black',
        height: 50,
        width: '90%',
        borderRadius: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
