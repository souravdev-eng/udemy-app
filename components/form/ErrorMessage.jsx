import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
