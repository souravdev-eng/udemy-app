import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

const DashbordScreen = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://ca.slack-edge.com/T01GQ2A3Y69-U024F83AKPH-d30765450bee-512',
          }}
          style={styles.image}
        />
      </View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default DashbordScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 48,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userContainer: {
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    height: 150,
    width: '40%',
  },
});
