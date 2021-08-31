import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AccountTypeCard } from '../../components/AccountTypeCard';
import { AuthHeader } from '../../components/AuthHeader';
import { globalStyles } from '../../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{};

export const AccountType = ({navigation}: Props) => {
    const {top} = useSafeAreaInsets();

    return (
        <View
            style={{
                ...globalStyles.container,
                alignItems: 'center',
                paddingTop: top
            }}
        >
            <AuthHeader />

            <View 
                style={{
                    flex:1, 
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 40
                }}
            >
                <AccountTypeCard 
                    title='Turista'
                    onPress={() => navigation.navigate('SignupScreen')}
                />
                <AccountTypeCard 
                    title='Negocio'
                    onPress={() => navigation.navigate('BusinessType')}
                />

            </View>
        </View>
    )
}
