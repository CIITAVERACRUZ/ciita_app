import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, FlatList, View, ViewStyle, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Badge } from '../../components/Badge'
import { Header } from '../../components/Header'
import { HomeCard } from '../../components/HomeCard'
import { Events, HomeItems, months } from '../../data/HomeScreenData'
import { Evento, HomeItem } from '../../interfaces/AppInterfaces'
import { Colors } from '../../theme/Colors'

interface Badge{
    style: StyleProp<ViewStyle>,
    text: string,
    onPress: () => void,
    activeColor: string
}

export const HomeScreen = () => {

    const [items, setItems] = useState(HomeItems);
    const [activeBadge, setActiveBadge] = useState<'TODO' | 'Cultura' | 'Historia' | 'Turismo' | 'Eventos'>('TODO')

    const badges: Badge[] = [
        {style: {marginRight: 10}, text: 'Cultura', onPress: () => showCultura(), activeColor: Colors.pink},
        {style: {marginRight: 10}, text: 'Turismo', onPress: () => showTurismo(), activeColor: Colors.lime},
        {style: {marginRight: 10}, text: 'Historia', onPress: () => showHistoria(), activeColor: Colors.granate },
        {style: {marginRight: 10}, text: 'Eventos', onPress: () => showEventos(), activeColor: Colors.green},
    ]


    useEffect(() => {
        activeBadge !== 'Eventos' && showData();
    }, [activeBadge])

    const showData = () => {
        let tempData = HomeItems;
        if (activeBadge !== 'TODO' && activeBadge !== 'Eventos'){
           tempData = tempData.filter((item) => (item.type === activeBadge));
        }
        setItems(tempData);
    }

    const showCultura = () => {
        if(activeBadge==='Cultura'){ setActiveBadge('TODO') }
        else setActiveBadge('Cultura');
    }

    const showTurismo = () => {
        if(activeBadge==='Turismo'){ setActiveBadge('TODO') }
        else setActiveBadge('Turismo'); 
    }

    const showHistoria = () => {
        if(activeBadge==='Historia'){ setActiveBadge('TODO') }
        else setActiveBadge('Historia');
    }

    const showEventos = () => {
        if(activeBadge==='Eventos'){ setActiveBadge('TODO') }
        else setActiveBadge('Eventos');
    }

    const renderItem = (item: HomeItem) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <HomeCard item={item} />
        </View>
    )
    const renderMonths = (item: any) => {
       const actualMonth = new Date().getMonth();
       const activeMonth = actualMonth === months.indexOf(item);
       
       return (
            <TouchableOpacity style={{width: 50, marginVertical: 10}}>
                <Text style={{color: activeMonth? Colors.skyblue : 'black'}} >{item}</Text>
            </TouchableOpacity>
       ) 
    }
    const renderEvents = (item: Evento) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <HomeCard item={item} />
        </View>
    )


    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title='Inicio' />
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
            {   
            activeBadge !== 'Eventos' ?
            <FlatList 
                style={{flex: 1}}
                data={items}
                renderItem={({item}) => renderItem(item)}
            /> : (
                <FlatList 
                    style={{flex: 1}}
                    data={Events}
                    renderItem={({item}) => renderEvents(item)}
                    ListHeaderComponent={() => (
                        <FlatList
                            style={{paddingHorizontal: 20}}
                            horizontal
                            data={months}
                            renderItem={({item}) => renderMonths(item)}
                        />
                    )}
                />
            )
            }    
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
