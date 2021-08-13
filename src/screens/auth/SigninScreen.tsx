import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CustomButton } from '../../components/CustomButton';
import { TextClickeable } from '../../components/TextClickable';
import { TextField } from '../../components/TextField';
import { AuthContext } from '../../context/AuthContext';
import { globalStyles } from '../../theme/AppTheme'
import {Colors} from '../../theme/Colors';
import { SignupScreen } from './SignupScreen';

interface Props extends StackScreenProps<any, any>{}

export const SigninScreen = ({navigation}: Props) => {
    const { top } = useSafeAreaInsets();
    const { signUp } = useContext(AuthContext);

    const login = () => {
        signUp();
    }

    const handleTextChange = ( text: string ) => {
        console.log(text);
    }

    return (
        <LinearGradient colors={[Colors.skyblue, Colors.yellow, Colors.pink]} style={styles.linearGradient} >

        <ScrollView>
            <View             
                style={{
                    ...globalStyles.container,
                    paddingTop: top + 10,
                    paddingHorizontal: 15,
                    alignItems: 'center'
                }}
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

                <View style={styles.card}>
                    <TextField 
                        placeholder='Email'
                        icon='mail-outline'
                        onChangeText={handleTextChange}

                    />
                    <View style={{marginBottom: 20}} />
                    <TextField 
                        placeholder='Password'
                        icon='lock-closed-outline'
                        onChangeText={handleTextChange}
                    />
                    <View style={{marginBottom: 30}} />
                    <CustomButton
                        title='Login'
                        onPress={login}
                    />
                </View>

                <View style={styles.links}>
                    <TextClickeable 
                        onPress={() => navigation.navigate('AccountType') }                        
                        color='white' 
                        title='¿No tienes una cuenta?  Regístrate Aquí'/>
                    <TextClickeable 
                        onPress={() => navigation.navigate('RecoverPasswordScreen') }
                        color='white' 
                        title='¿Olvidaste tu contraseña?  Click Aquí'/> 
                </View>          
            </View>
        </ScrollView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: -10,
        left: 80,
        height: 290,
        zIndex: 0
    },
    linearGradient: {
        flex: 1
    },
    card: {
        width: '90%', 
        backgroundColor: Colors.lime,
        marginTop: 170,
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
