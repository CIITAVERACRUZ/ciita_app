import React from 'react'
import { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { Header } from '../../components/Header'
import { ScreenItem } from '../../components/ScreenItem'
import { Platillos } from '../../data/GastronomiaData'
import { useSearchBar } from '../../hooks/useSearchBar'

export const FoodScreen = () => {
    const [items, setItems] = useState(Platillos);  
    const [searchBarValue, setSearchBarValue] = useState<string | undefined>(undefined);
    const { searchByName, result } = useSearchBar();

    const searchBarChangeText = async(text: string) => {
        if(text === '') return setItems(Platillos);
        let result = await searchByName(text.toLocaleLowerCase().trim() , Platillos);      
        if(result.length > 0) setItems(result);
        else {
            Toast.show({  
                type: 'info',
                position:  'top',
                text1: 'Oops!',
                text2: 'No hay resultados para tu búsqueda'
            });
        }
            
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header
                title='Comida'
                showSearchBar
                searchBarPlaceholder='Busca comida'
                searchBarValue={searchBarValue}
                onChangeText={(text) => searchBarChangeText(text)}
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
