import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthButton from '../buttons/AuthButton';

const IconButton = ({ icon, title, style }) => {
  return (
    <AuthButton style={[styles.container, style]}>
      <View style={styles.buttonIcon}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={26} color='#ff449f' />
        )}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </AuthButton>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '200',
    marginLeft: 10,
  },
  buttonIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
