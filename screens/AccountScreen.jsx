import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import DashbordScreen from './auth/DashbordScreen';
import SignInOrSignUp from '../components/auth/Sign-in-or-sign-up.component';
import authStorage from '../store/authStorage';
import authActions from '../redux/auth/auth.actions';

const AccountScreen = () => {
  const { user } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();

  const getToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    const user = await jwtDecode(token);
    dispatch(authActions.currentUser(user));
  };

  useEffect(() => {
    getToken();
  }, []);

  return user.currentUser === null ? <SignInOrSignUp /> : <DashbordScreen />;
};

export default AccountScreen;

const styles = StyleSheet.create({});
