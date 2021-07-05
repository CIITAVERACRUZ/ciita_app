import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppLogo } from '../../components/AppLogo'
import { globalStyles } from '../../theme/AppTheme'

export const SigninScreen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View 
            style={{
                ...globalStyles.container,
                marginTop: top + 10,
                alignItems: 'center'
            }}
        >

        <AppLogo style={{marginTop: 40}} />

            
        </View>
    )
}
