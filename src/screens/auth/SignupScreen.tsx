import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CustomButton } from '../../components/CustomButton'
import { TextClickeable } from '../../components/TextClickable'
import { TextField } from '../../components/TextField'
import { globalStyles } from '../../theme/AppTheme'
import Colors from '../../theme/Colors'

interface Props extends StackScreenProps<any, any>{}

export const SignupScreen = ({navigation}: Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <View 
            style={{
                ...globalStyles.container,
                alignItems: 'center',
            }}
        >

        <LinearGradient 
            colors={['#1DBCFB', '#6ED151', '#D671BF']} 
            style={styles.linearGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            >
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/volador.png')}
                    resizeMode='contain'
                />
                <View style={{width: '100%', zIndex: 9}}>
                    <Text style={globalStyles.authTitle}>Descubre</Text>
                    <Text style={{...globalStyles.authSubtitle, marginRight: 150}}>Papantla</Text>
                </View>
        </LinearGradient>


                <View style={styles.card}>
                    <TextField 
                        placeholder='Nombre'
                        icon='person-outline'
                    />
                    <View style={{marginBottom: 30}} />

                    <TextField 
                        placeholder='Email'
                        icon='mail-outline'
                    />
                    <View style={{marginBottom: 30}} />

                    <TextField
                        placeholder='Contraseña'
                        icon='lock-closed-outline'
                    />
                    <View style={{marginBottom: 30}} />

                    <TextField
                        placeholder='Confirme contraseña'
                        icon='lock-closed-outline'
                    />
                    <View style={{marginBottom: 30}} />
                    <CustomButton
                        title='Enviar'
                        
                    />
                </View>

                <View style={styles.links}>
                    <TextClickeable 
                        onPress={() => navigation.navigate('SigninScreen') }                        
                        color='black' 
                        title='¿Ya tienes una cuenta? Inicia sesión'/>
                    <TextClickeable 
                        onPress={() => navigation.navigate('RecoverPasswordScreen') }
                        color='black' 
                        title='¿Olvidaste tu contraseña?  Click Aquí'/> 
                </View>
                {/* 
                <Image 
                    style={styles.cinta}
                    source={require('../../assets/images/cinta.png')}
                    resizeMode='contain'
                /> */}


            
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: -10,
        left: 120,
        height: 200,
        zIndex: 0
    },
    linearGradient: {
        width: '100%',
        height: 130,
        paddingHorizontal: 15
    },
    card: {
        width: '90%', 
        marginTop: 80,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
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
