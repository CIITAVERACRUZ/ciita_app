import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AccountTypeCard } from '../../components/AccountTypeCard';
import { AuthHeader } from '../../components/AuthHeader';
import { globalStyles } from '../../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{};

export const BusinessType = ({navigation}: Props) => {
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

            <ScrollView style={{flex: 1, width: '100%', marginTop: 35}}>
            <View 
                style={{
                    flex:1, 
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <AccountTypeCard 
                    title='Hotel'
                    onPress={() => navigation.navigate('SignupScreen', {type: 'business', name: 'hotel' })}
                />
                <AccountTypeCard 
                    title='Artesano'
                    onPress={() => navigation.navigate('SignupScreen', {type: 'business', name: 'artisan' })}
                />
                <AccountTypeCard 
                    title='Restaurante'
                    onPress={() => navigation.navigate('SignupScreen', {type: 'business', name: 'restaurant' })}
                />
                <AccountTypeCard 
                    title='Otro'
                    onPress={() => navigation.navigate('SignupScreen', {type: 'business', name: 'other' })}
                />

            </View>
            </ScrollView>
        </View>
    )
}
