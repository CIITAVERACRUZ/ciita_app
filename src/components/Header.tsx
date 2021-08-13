import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../theme/Colors'
import { SearchBar } from './SearchBar'

interface Props{
    title: string,
    showSearchBar?: boolean,
    hideTitle?: boolean
}



export const Header = ({title, showSearchBar, hideTitle}: Props) => {

    const Title = () => (
        <Text 
        style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white'
        }}
        >
            {title}
        </Text>
    )

    return (
        <View
            style={{
                width: '100%',
                height: 80,
            }}
        >
            <LinearGradient 
                style={{
                    flex: 1, 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    flexDirection: 'row', 
                    paddingHorizontal: 20
                }}
                colors={[Colors.skyblue, Colors.slime]}
            >

                {
                    (!hideTitle || !showSearchBar) && (<Title />)
                }

                {
                    showSearchBar && <SearchBar />
                }


                <View
                    style={{height: 70, width: 70}}
                >
                    <Image 
                        style={{flex: 1, width: '100%'}}
                        source={require('../assets/images/gorro.png')}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}
