import React from 'react'
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native'
import { Colors } from '../theme/Colors'

interface Props{
    text: string,
    onPress: () => void,
    active?: boolean,
    activeColor?: string,
    style?: StyleProp<ViewStyle>
}

export const Badge = ({text, onPress, style, active, activeColor}: Props) => {
    return (
        <TouchableOpacity
            style={[style ,{
                maxWidth: 200,
                borderRadius: 20,
                backgroundColor: active? activeColor : 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: active? activeColor : Colors.cream,
            }]}
            onPress={onPress}
        >
            <Text style={{color: active? 'white' : 'black', paddingVertical: 5, paddingHorizontal: 10}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
