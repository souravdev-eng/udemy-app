import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardList from '../components/Feacherd/CardList';

const FeacheredScreen = () => {
  return (
    <View style={styles.container}>
      <CardList />
    </View>
  );
};

export default FeacheredScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
