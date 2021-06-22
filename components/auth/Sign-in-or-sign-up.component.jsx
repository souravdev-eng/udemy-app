import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import IconButton from '../UI/buttons/IconButton';

const SignInOrSignUp = (props) => {
  return (
    <View style={styles.container}>
      <IconButton
        title='Sign in with email'
        icon='email-outline'
        style={styles.email}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
      <View style={styles.or}>
        <Text style={styles.orText}>or</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton title='Sign in with Google' icon='google' />
        <IconButton title='Sign in with Facebook' icon='facebook' />
        <IconButton title='Sign in with Apple' icon='apple' />
      </View>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>New here? Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(SignInOrSignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e63f5a',
    overflow: 'hidden',
    marginTop: 50,
  },
  email: {
    marginTop: 60,
  },
  or: {
    position: 'absolute',
    top: 190,
  },
  orText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    marginTop: '45%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 30,
  },
});
