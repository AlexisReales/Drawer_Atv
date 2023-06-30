import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export function ScreenC() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tem alguma reclamação sobre o sistema? DIGA!
            </Text>
            <TextInput
                placeholder='Comente aqui!'
                placeholderTextColor={'white'}
                style={styles.input}
            />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#222',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title:{
            color: 'white',
            fontSize: 30,
            padding: 20
        },
        input:{
            padding: 10,
            color: '#fff',
            backgroundColor: '#666',
            borderRadius: 10
        },
    });