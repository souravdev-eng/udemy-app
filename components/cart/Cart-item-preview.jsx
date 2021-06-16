import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppTextBold from '../UI/typo-graphy/AppTextBold';
import DarkButton from '../UI/buttons/DarkButton';
import AppText from '../UI/typo-graphy/AppText';

const CartItemPreview = ({
  quantity,
  imageURL,
  title,
  author,
  price,
  BuyNow,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image style={styles.imageSmall} source={{ uri: imageURL }} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText>{author}</AppText>
          <AppTextBold>${price}</AppTextBold>
        </View>
      </View>
      <DarkButton
        title='Buy With G Pay'
        style={styles.button}
        onPress={BuyNow}
      />
    </View>
  );
};

export default CartItemPreview;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginHorizontal: 10,
  },
  item: {
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 20,
  },
  imageSmall: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 19,
  },
  button: {
    width: '80%',
    marginLeft: 90,
    marginVertical: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'center',
  },
});
