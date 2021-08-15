import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header'

export const PlacesScreen = () => {
    return (
        <View>
            <Header
                title='Sitios'
                showSearchBar
                searchBarPlaceholder='Busca sitios'
            />
            <Text>Sitios de interes</Text>
        </View>
    )
}
