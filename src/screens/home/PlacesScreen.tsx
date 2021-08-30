import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { Header } from '../../components/Header'
import { ScreenItem } from '../../components/ScreenItem'
import { Sitios } from '../../data/SitiosData'
import { useSearchBar } from '../../hooks/useSearchBar'
import { Colors } from '../../theme/Colors'

export const PlacesScreen = () => {
    const [items, setItems] = useState(Sitios);
    const [searchBarValue, setSearchBarValue] = useState<string | undefined>(undefined);
    const { searchByName, result } = useSearchBar();

    const searchBarChangeText = async(text: string) => {
        if(text === '') return setItems(Sitios);
        let result = await searchByName(text.toLocaleLowerCase().trim() , Sitios);      
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
                title='Sitios'
                showSearchBar
                searchBarPlaceholder='Busca sitios'
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

const styles = StyleSheet.create({
    placeContainer: {
        width: '47%',
        height: 130,
        backgroundColor: Colors.cream,
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    textPlace: {
        color: 'white', 
        backgroundColor: 'rgba(1, 1, 1, 0.45)', 
        fontSize: 14,
        paddingLeft: 5
    }
});
