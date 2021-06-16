import { Platform } from 'react-native';
import { colors } from './colors';

const defaultStyle = {
  text: {
    color: colors.darkGrey,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 16,
  },
};

export default defaultStyle;
