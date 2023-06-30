import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function ScreenA() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Bem vindo ao Clube Notice
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        color: 'white',
        fontSize: 30,
    },
});