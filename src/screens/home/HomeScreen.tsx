import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header'

export const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Header
                title='Inicio'
            />
            <Text>Home</Text>           
        </View>
    )
}
