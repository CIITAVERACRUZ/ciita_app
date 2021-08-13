import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme/Colors';

interface Props {
    title: string,
    onPress: () => void
}

export const AccountTypeCard = ({title, onPress}: Props) => {
    return (
        <TouchableOpacity 
            style={styles.card} 
            activeOpacity={.6}
            onPress={onPress}
        >
            <LinearGradient 
                colors={[Colors.lime, Colors.slime]}
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}} >{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 150,
        backgroundColor: Colors.slime,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
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
