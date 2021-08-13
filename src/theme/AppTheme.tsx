import { StyleSheet } from 'react-native';
import {Colors} from './Colors';
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    authTitle: {
        color: Colors.yellowText,
        fontSize: 40,
        fontWeight: 'bold'
    },
    authSubtitle: {
        color: Colors.cream,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});