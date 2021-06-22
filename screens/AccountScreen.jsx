import React from 'react';
import { useSelector } from 'react-redux';
import DashbordScreen from './auth/DashbordScreen';
import SignInOrSignUp from '../components/auth/Sign-in-or-sign-up.component';

const AccountScreen = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return user.currentUser !== null ? <DashbordScreen /> : <SignInOrSignUp />;
};

export default AccountScreen;
