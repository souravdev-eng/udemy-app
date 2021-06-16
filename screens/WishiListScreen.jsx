import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WishiListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WishiListScreen</Text>
    </View>
  );
};

export default WishiListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
