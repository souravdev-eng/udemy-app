import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';

const IconComponent = (props) => {
  return <HeaderButton {...props} iconSize={28} />;
};

export default IconComponent;

const styles = StyleSheet.create({});
