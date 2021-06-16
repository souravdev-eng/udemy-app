import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { colors } from '../../config/colors';
import AppFormInput from '../../components/form/AppFormInput';
import SubmitFormButton from '../../components/form/SubmitFormButton';
import AppForm from '../../components/form/AppForm';
import AppTextBold from '../../components/UI/typo-graphy/AppTextBold';

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  return (
    <View style={styles.container}>
      <AppTextBold>Login with your email and password</AppTextBold>
      <AppForm
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}>
        <AppFormInput
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Email'
          keyboardType='email-address'
          icon='email'
          name='email'
          placeholderTextColor={colors.darkGrey}
        />
        <AppFormInput
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Password'
          icon='lock'
          name='password'
          secureTextEntry
          placeholderTextColor={colors.darkGrey}
        />
        <SubmitFormButton title='Login' style={styles.darkButton} />
      </AppForm>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginVertical: '20%',
  },
  darkButton: {
    borderRadius: 25,
    marginTop: 10,
    width: '100%',
    color: colors.lightPink,
  },
});
