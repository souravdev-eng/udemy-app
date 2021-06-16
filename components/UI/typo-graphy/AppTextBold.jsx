import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppTextBold = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppTextBold;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
});
