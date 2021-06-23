import React from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../config/colors';
import defaultStyle from '../../config/style';

const AppInput = ({ icon, style, ...othersProps }) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.darkGrey}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyle.text} {...othersProps} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    // height: 50,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    borderColor: '#c2c2c2',
    backgroundColor: colors.lightGrey,
  },
  icon: {
    marginRight: 10,
  },
});
