import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

interface Props{
    title: string,
    color: string,
    onPress: () => void
  }

export const TextClickeable = ({ title, color = 'black', onPress }: Props) => {
  return (
    <TouchableOpacity 
        activeOpacity={.7}
        onPress={ onPress }
        style={styles.button}>
        <Text style={{color, fontSize: 16}}>
        {title}
        </Text>
    </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
  button:{
      marginBottom: 3
  }
});

