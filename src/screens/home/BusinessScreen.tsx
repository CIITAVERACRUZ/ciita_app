import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header'

export const BusinessScreen = () => {
    return (
        <View>
            <Header
                title='Negocios'
                showSearchBar
                searchBarPlaceholder='Busca negocios'
            />
            <Text>Negocios</Text>
        </View>
    )
}
