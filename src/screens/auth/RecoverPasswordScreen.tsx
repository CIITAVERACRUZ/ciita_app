import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CustomButton } from '../../components/CustomButton'
import { TextClickeable } from '../../components/TextClickable'
import { TextField } from '../../components/TextField'
import { globalStyles } from '../../theme/AppTheme'
import { Colors } from '../../theme/Colors'

interface Props extends StackScreenProps<any, any>{};

export const RecoverPasswordScreen = ({navigation}: Props) => {
    const { top } = useSafeAreaInsets();
    const [email, setEmail] = useState();

    const sendRecoveryEmail = () => {

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

                <View 
                    style={{
                        marginTop: 20,
                        height: 150,
                        width: '100%', 
                        zIndex: 2
                    }} 
                >
                    <Image 
                        style={{flex: 1, right: 10, bottom: -30, position: 'absolute'}}
                        height={150}
                        source={require('../../assets/images/gorro.png')} 
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.card}>
                    <View style={{width: '100%', paddingLeft: 20, marginBottom: 10}}>
                        <Text style={{...globalStyles.authTitle, fontSize: 30}}>Recuperar</Text>
                        <Text style={{...globalStyles.authSubtitle, fontSize: 30}}>Contraseña</Text>
                    </View>
                    <TextField 
                        placeholder='Email'
                        icon='mail-outline'
                        onChangeText={handleTextChange}
                    />
                    <View style={{marginBottom: 20}} />
                    <CustomButton
                        title='Enviar'
                        onPress={sendRecoveryEmail}
                    />
                </View>

                <View style={styles.links}>
                    <TextClickeable 
                        onPress={() => navigation.navigate('SignupScreen') }                        
                        color='white' 
                        title='¿No tienes una cuenta?  Regístrate Aquí'/>
                    <TextClickeable 
                        onPress={() => navigation.navigate('RecoverPasswordScreen') }
                        color='white' 
                        title='¿Ya tienes una cuenta?  Inicia Sesión'/> 
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
