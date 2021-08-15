import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header'

export const FoodScreen = () => {
    return (
        <View>
            <Header
                title='Comida'
                showSearchBar
                searchBarPlaceholder='Busca comida'
            />
            <Text>Gastronomía</Text>
        </View>
    )
}
