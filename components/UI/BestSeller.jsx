import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BestSeller = ({ style }) => {
  return (
    <View style={[styles.bestSellerContainer, style]}>
      <Text>Best Seller</Text>
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  bestSellerContainer: {
    backgroundColor: '#ffc93c',
    width: 80,
    height: 25,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});
