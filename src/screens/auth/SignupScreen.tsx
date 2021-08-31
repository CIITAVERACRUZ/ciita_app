import { getActionFromState } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthHeader } from '../../components/AuthHeader'
import { CustomButton } from '../../components/CustomButton'
import { TextClickeable } from '../../components/TextClickable'
import { TextField } from '../../components/TextField'
import { AuthStackType } from '../../navigation/MainNavigation'
import { globalStyles } from '../../theme/AppTheme'

interface Props extends StackScreenProps<AuthStackType, 'SignupScreen'>{}

export const SignupScreen = ({navigation, route}: Props) => {
    const { top } = useSafeAreaInsets();
    let type = route.params?.type;
    let name = route.params?.name;


    const handleTextChange = (text: string) => {
        console.log(text);
    }

    const signUp = () => {
        console.log(name);
    }

    const getIcon = () => {
        if(name === 'restaurant') return 'restaurant-outline'
        if(name === 'hotel') return 'bed-outline'
        if(name === 'artisan') return 'hammer-outline'
        if(name === 'other') return 'business-outline'
    }

    return (
        <View 
            style={{
                ...globalStyles.container,
                alignItems: 'center',
                paddingTop: top
            }}
        >
                <AuthHeader />

                <ScrollView style={{flex: 1, width: '100%'}} >
                    <View style={styles.card}>
                    <Text style={styles.cardTitle}>Crea tu cuenta</Text>
                        <TextField 
                            placeholder='Nombre'
                            icon='person-outline'
                            onChangeText={handleTextChange}
                        />
                        {
                            type === 'business' && (
                                <>
                                    <View style={{marginBottom: 30}} />
                                    <TextField 
                                        placeholder={name !== 'other' ? `Nombre del ${name}` : 'Nombre del negocio'}
                                        icon={getIcon()}
                                        onChangeText={handleTextChange}
                                    /> 
                                </>
                            )
                        }
                        <View style={{marginBottom: 30}} />

                        <TextField 
                            placeholder='Email'
                            icon='mail-outline'
                            onChangeText={handleTextChange}
                        />
                        <View style={{marginBottom: 30}} />

                        <TextField
                            placeholder='Contraseña'
                            icon='lock-closed-outline'
                            onChangeText={handleTextChange}
                        />
                        <View style={{marginBottom: 30}} />

                        <TextField
                            placeholder='Confirme contraseña'
                            icon='lock-closed-outline'
                            onChangeText={handleTextChange}
                        />
                        <View style={{marginBottom: 30}} />
                        <CustomButton
                            title='Enviar'
                            onPress={signUp}     
                        />
                    </View>
                    <View style={styles.links}>
                        <TextClickeable 
                            onPress={() => navigation.navigate('SigninScreen') }                        
                            color='black' 
                            title='¿Ya tienes una cuenta? Inicia sesión'
                        />
                        <TextClickeable 
                            onPress={() => navigation.navigate('RecoverPasswordScreen') }
                            color='black' 
                            title='¿Olvidaste tu contraseña?  Click Aquí'
                        /> 
                    </View>          
                </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        flex: 1, 
        marginTop: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    cardTitle: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    links:{
        zIndex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    cinta: {
        bottom: -80,
        right: -20,
        transform: [{rotateX: '-20deg'}],
        position: 'absolute',
        width: 520
    }
});
