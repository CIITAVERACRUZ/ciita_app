import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { globalStyles } from '../theme/AppTheme'
import {Colors} from '../theme/Colors'

export const AuthHeader = () => {
    return (
        <LinearGradient
            colors={[Colors.skyblue, Colors.slime, Colors.pink]} 
            style={styles.linearGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        >
            <Image 
                style={styles.logo}
                source={require('../assets/images/volador.png')}
                resizeMode='contain'
            />
            <View style={{width: '100%', zIndex: 9}}>
                <Text style={globalStyles.authTitle}>Descubre</Text>
                <Text style={{...globalStyles.authSubtitle, marginRight: 150}}>Papantla</Text>
            </View>
       </LinearGradient>
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
        height: 120,
        paddingHorizontal: 15
    },
});
