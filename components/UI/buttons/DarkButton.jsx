import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const DarkButton = ({ title, onPress, style }) => (
  <TouchableOpacity
    activeOpacity={0.3}
    style={[styles.buttonContainer, style]}
    onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0a81ab',
    width: '95%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default DarkButton;
