import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../theme/AppTheme'

export const RecoverPasswordScreen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View 
            style={{
                ...globalStyles.container,
                marginTop: top + 10,
            }}
        >
            
        </View>
    )
}
