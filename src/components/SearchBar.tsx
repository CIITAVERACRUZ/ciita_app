import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../theme/Colors'

interface Props{
    placeholder?: string,
    value?: string,
    onChangeText: (text: string) => void
}

export const SearchBar = ({placeholder, value, onChangeText}: Props) => {
    return (
        <View 
            style={{
                flex: 1,
                width: '100%',
                height: 35,
                marginHorizontal: 10,
                borderRadius: 20,
                backgroundColor: 'white',
                overflow: 'hidden'
            }}
        >
            <View 
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10
                }}
            >
                <Icon name='search' size={20} />
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={(text) => onChangeText(text)}
                    placeholderTextColor='gray'
                    style={{
                        flex: 1,
                        paddingTop: 0,
                        paddingBottom: 0,
                        color: 'black'
                    }}
                />
            </View>
        </View>
    )
}
