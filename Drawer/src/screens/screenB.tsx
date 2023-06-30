import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function ScreenB() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
              Dowload do nosso APP!
          </Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.tbutton}>
                  Download NOW!
              </Text>
          </TouchableOpacity>
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
          padding: 20,
      },
      button:{
          backgroundColor: '#fff',
          padding: 8,
          textAlign: 'center',
          borderRadius: 10
      },
      tbutton:{
          color: '#000',
          fontSize: 15
      }
  });