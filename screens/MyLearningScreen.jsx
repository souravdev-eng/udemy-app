import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyLearningScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyLearningScreen</Text>
    </View>
  );
};

export default MyLearningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
