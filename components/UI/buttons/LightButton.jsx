import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LightButton = ({ onPress, title, style }) => (
  <TouchableOpacity
    activeOpacity={0.3}
    style={[styles.lightButton, style]}
    onPress={onPress}>
    <Text style={styles.lightButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default LightButton;

const styles = StyleSheet.create({
  lightButtonText: {
    color: '#0a81ab',
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 40,
    marginVertical: 30,
  },
});
