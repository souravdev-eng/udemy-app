import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const AuthButton = ({ onPress, style, children }) => (
  <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0a81ab',
    width: '85%',
    borderRadius: 2,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default AuthButton;
