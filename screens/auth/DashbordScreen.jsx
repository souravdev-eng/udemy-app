import React, { useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import authActions from '../../redux/auth/auth.actions';

const DashbordScreen = (props) => {
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user.currentUser === null) {
      props.navigation.navigate('Home');
    }
  }, [user]);

  let dispatch = useDispatch();

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
      <Button
        title='Log out'
        onPress={() => {
          dispatch(authActions.removeUser());
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default withNavigation(DashbordScreen);

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
