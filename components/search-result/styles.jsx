import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default styles;
