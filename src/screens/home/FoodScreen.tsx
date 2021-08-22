import React from 'react'
import { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/Header'
import { ScreenItem } from '../../components/ScreenItem'
import { Platillos } from '../../data/GastronomiaData'

export const FoodScreen = () => {
    const [items, setItems] = useState(Platillos);  

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header
                title='Comida'
                showSearchBar
                searchBarPlaceholder='Busca comida'
            />

            <FlatList
                style={{marginTop: 20}}
                contentContainerStyle={{alignItems: 'center', flex: 1}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={items}
                numColumns={2}
                renderItem={({item}) => <ScreenItem item={item} /> }
                keyExtractor={(item, index) => (item.name)}
            />
            
        </SafeAreaView>
    )
}
