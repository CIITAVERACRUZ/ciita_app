import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { Header } from '../../components/Header'
import { ScreenItem } from '../../components/ScreenItem';
import { Platillos } from '../../data/GastronomiaData';
import { Artesanos, Hoteles, Restaurants } from '../../data/NegociosData';

export const BusinessScreen = () => {
    const [items, setItems] = useState([...Restaurants, ...Artesanos]);  

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header
                title='Negocios'
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
