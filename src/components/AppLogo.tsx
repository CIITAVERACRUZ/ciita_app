import React from 'react'
import { View, ViewStyle } from 'react-native'

interface Props{
    style?: ViewStyle
}

export const AppLogo = ({ style }: Props) => {
    return (
        <View 
            style={{
                height: 150,
                width: 150,
                backgroundColor: 'gray',
                borderRadius: 100,
                ...style
            }}
        >
            {/* Logo aquí */}
        </View>
    )
}
