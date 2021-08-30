import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Toast from 'react-native-toast-message';
import { Badge } from '../../components/Badge';
import { Header } from '../../components/Header'
import { ScreenItem } from '../../components/ScreenItem';
import { Artesanos, Restaurants } from '../../data/NegociosData';
import { useSearchBar } from '../../hooks/useSearchBar';
import { Colors } from '../../theme/Colors';

interface Badge{
    style: StyleProp<ViewStyle>,
    text: string,
    onPress: () => void,
    activeColor: string
}
type BussinesType = 'Restaurantes' | 'Artesanías' | 'TODO';

export const BusinessScreen = () => {
    const todo = [...Restaurants, ...Artesanos];
    const [items, setItems] = useState(todo);  
    const [activeBadge, setActiveBadge] = useState<BussinesType>('TODO');
    const [searchBarValue, setSearchBarValue] = useState<string | undefined>(undefined);
    const { searchByName, result } = useSearchBar();

    useEffect(() => {      
        switch(activeBadge){
            case 'Artesanías':
                return setItems(Artesanos);
            case 'Restaurantes':
                return setItems(Restaurants);
            case 'TODO':
                return setItems(todo);
        }
    }, [activeBadge])

    const badges: Badge[] = [
        {style: {marginRight: 10}, text: 'Restaurantes', onPress: () => showItems('Restaurantes'), activeColor: Colors.pink},
        {style: {marginRight: 10}, text: 'Artesanías', onPress: () => showItems('Artesanías'), activeColor: Colors.lime},
    ]

    const showItems = (type: BussinesType) => {
        if(activeBadge === type) setActiveBadge('TODO');
        else setActiveBadge(type);
    }

    const searchBarChangeText = async(text: string) => {
        if(text === '') return setItems(todo);
        let result = await searchByName(text.toLocaleLowerCase().trim() , todo);      
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
                title='Negocios'
                showSearchBar
                searchBarValue={searchBarValue}
                onChangeText={(text) => searchBarChangeText(text)}
                searchBarPlaceholder='Busca negocios'
            />
            <View style={styles.badgeContainer}>
                <FlatList
                    data={badges}
                    renderItem={({item}) => (
                        <Badge 
                            text={item.text}
                            style={item.style}
                            onPress={item.onPress}
                            active={activeBadge === item.text}
                            activeColor={item.activeColor}
                        />
                    )}
                    horizontal
                />
            </View> 
            <FlatList
                contentContainerStyle={{alignItems: 'center'}}
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
    badgeContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10
    }
});
